import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  Character,
  elizaLogger,
  ModelProviderName,
  settings,
  validateCharacterConfig,
} from '@elizaos/core';
import yargs from 'yargs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function parseArguments(): {
  character?: string;
  characters?: string;
} {
  try {
    return yargs(process.argv.slice(2))
      .option('character', {
        type: 'string',
        description: 'Path to the character JSON file',
      })
      .option('characters', {
        type: 'string',
        description: 'Comma separated list of paths to character JSON files',
      })
      .parseSync();
  } catch (error) {
    console.error('Error parsing arguments:', error);
    return {};
  }
}

export async function loadCharacters(
  charactersArg: string
): Promise<Character[]> {
  let characterPaths = charactersArg?.split(',').map((filePath) => {
    if (path.basename(filePath) === filePath) {
      filePath = '../characters/' + filePath;
    }
    return path.resolve(process.cwd(), filePath.trim());
  });

  const loadedCharacters = [];

  if (characterPaths?.length > 0) {
    for (const characterPath of characterPaths) {
      try {
        const character = await loadCharacterTryPath(characterPath);
        loadedCharacters.push(character);
      } catch (e) {
        console.error(`Error loading character from ${path}: ${e}`);
        // don't continue to load if a specified file is not found
        process.exit(1);
      }
    }
  }

  if (loadedCharacters.length === 0) {
    elizaLogger.error('No characters found');
    throw new Error('No characters found');
  }

  return loadedCharacters;
}

export function getTokenForProvider(
  provider: ModelProviderName,
  character: Character
) {
  switch (provider) {
    case ModelProviderName.OPENAI:
      return (
        character.settings?.secrets?.OPENAI_API_KEY || settings.OPENAI_API_KEY
      );
    case ModelProviderName.LLAMACLOUD:
      return (
        character.settings?.secrets?.LLAMACLOUD_API_KEY ||
        settings.LLAMACLOUD_API_KEY ||
        character.settings?.secrets?.TOGETHER_API_KEY ||
        settings.TOGETHER_API_KEY ||
        character.settings?.secrets?.XAI_API_KEY ||
        settings.XAI_API_KEY ||
        character.settings?.secrets?.OPENAI_API_KEY ||
        settings.OPENAI_API_KEY
      );
    case ModelProviderName.ANTHROPIC:
      return (
        character.settings?.secrets?.ANTHROPIC_API_KEY ||
        character.settings?.secrets?.CLAUDE_API_KEY ||
        settings.ANTHROPIC_API_KEY ||
        settings.CLAUDE_API_KEY
      );
    case ModelProviderName.REDPILL:
      return (
        character.settings?.secrets?.REDPILL_API_KEY || settings.REDPILL_API_KEY
      );
    case ModelProviderName.OPENROUTER:
      return (
        character.settings?.secrets?.OPENROUTER || settings.OPENROUTER_API_KEY
      );
    case ModelProviderName.GROK:
      return character.settings?.secrets?.GROK_API_KEY || settings.GROK_API_KEY;
    case ModelProviderName.HEURIST:
      return (
        character.settings?.secrets?.HEURIST_API_KEY || settings.HEURIST_API_KEY
      );
    case ModelProviderName.GROQ:
      return character.settings?.secrets?.GROQ_API_KEY || settings.GROQ_API_KEY;
  }
}

async function loadCharacterTryPath(characterPath: string): Promise<Character> {
  let content: string | null = null;
  let resolvedPath = '';

  // Try different path resolutions in order
  const pathsToTry = [
    characterPath, // exact path as specified
    path.resolve(process.cwd(), characterPath), // relative to cwd
    path.resolve(process.cwd(), 'agent', characterPath), // Add this
    path.resolve(__dirname, characterPath), // relative to current script
    path.resolve(__dirname, 'characters', path.basename(characterPath)), // relative to agent/characters
    path.resolve(__dirname, '../characters', path.basename(characterPath)), // relative to characters dir from agent
    path.resolve(__dirname, '../../characters', path.basename(characterPath)), // relative to project root characters dir
  ];

  elizaLogger.debug(
    'Trying paths:',
    pathsToTry.map((p) => ({
      path: p,
      exists: fs.existsSync(p),
    }))
  );

  for (const tryPath of pathsToTry) {
    content = tryLoadFile(tryPath);
    if (content !== null) {
      resolvedPath = tryPath;
      break;
    }
  }

  if (content === null) {
    elizaLogger.error(
      `Error loading character from ${characterPath}: File not found in any of the expected locations`
    );
    elizaLogger.error('Tried the following paths:');
    pathsToTry.forEach((p) => elizaLogger.error(` - ${p}`));
    throw new Error(
      `Error loading character from ${characterPath}: File not found in any of the expected locations`
    );
  }
  try {
    const character: Character = await loadCharacter(resolvedPath);
    elizaLogger.success(`Successfully loaded character from: ${resolvedPath}`);
    return character;
  } catch (e) {
    console.error(`Error parsing character from ${resolvedPath}: `, e);
    throw new Error(`Error parsing character from ${resolvedPath}: ${e}`);
  }
}

async function loadCharacter(filePath: string): Promise<Character> {
  const content = tryLoadFile(filePath);
  if (!content) {
    throw new Error(`Character file not found: ${filePath}`);
  }
  const character = JSON.parse(content);
  return jsonToCharacter(character);
}

function tryLoadFile(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

async function jsonToCharacter(character: any): Promise<Character> {
  const characterId = character.name;
  const characterPrefix = `CHARACTER.${characterId
    .toUpperCase()
    .replace(/ /g, '_')}.`;
  const characterSettings = Object.entries(process.env)
    .filter(([key]) => key.startsWith(characterPrefix))
    .reduce((settings, [key, value]) => {
      const settingKey = key.slice(characterPrefix.length);
      return { ...settings, [settingKey]: value };
    }, {});

  if (Object.keys(characterSettings).length > 0) {
    character.settings = character.settings || {};
    character.settings.secrets = {
      ...characterSettings,
      ...character.settings.secrets,
    };
  }

  validateCharacterConfig(character);

  return character;
}
