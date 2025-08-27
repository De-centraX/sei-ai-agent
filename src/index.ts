/* Node Modules */
import fs from 'fs';
import net from 'net';
import path from 'path';
import { fileURLToPath } from 'url';

/* ElizaOS core */
import {
  AgentRuntime,
  elizaLogger,
  settings,
  stringToUuid,
  type Character,
} from '@elizaos/core';

/* Plugins */
import { bootstrapPlugin } from '@elizaos/plugin-bootstrap';
import { twitterPlugin } from './plugins/client-twitter/index.ts';

/* Chat */
import { startChat } from './chat/index.ts';

/* Clients */
import { DirectClient } from '@elizaos/client-direct';
import { initializeClients } from './clients/index.ts';

/* Cache */
import { initializeDbCache } from './cache/index.ts';

/* Database */
import { initializeDatabase } from './database/index.ts';

/* Config */
import {
  getTokenForProvider,
  loadCharacters,
  parseArguments,
} from './config/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Create agent runtime */
export function createAgent(
  character: Character,
  db: any,
  cache: any,
  token: string
) {
  elizaLogger.success(
    elizaLogger.successesTitle,
    'Creating runtime for character',
    character.name
  );

  const agent = new AgentRuntime({
    databaseAdapter: db,
    token,
    modelProvider: character.modelProvider,
    evaluators: [],
    character,
    plugins: [bootstrapPlugin, twitterPlugin].filter(Boolean),
    providers: [],
    actions: [],
    services: [],
    managers: [],
    cacheManager: cache,
  });

  const fixedKnowledgeRoot = path.join(
    process.cwd(),
    'characters',
    'knowledge'
  );
  //@ts-expect-error - knowledgeRoot is private
  agent.knowledgeRoot = fixedKnowledgeRoot;
  //@ts-expect-error - knowledgeRoot is private
  agent.ragKnowledgeManager.knowledgeRoot = fixedKnowledgeRoot;

  return agent;
}

/* Start an agent */
async function startAgent(character: Character, directClient: DirectClient) {
  try {
    character.id ??= stringToUuid(character.name);
    character.username ??= character.name;

    const token = getTokenForProvider(character.modelProvider, character);
    const dataDir = path.join(__dirname, '../data');

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const db = initializeDatabase(dataDir, character.name);

    await db.init();

    const cache = initializeDbCache(character, db);
    const runtime = createAgent(character, db, cache, token);

    await runtime.initialize();

    runtime.clients = await initializeClients(character, runtime);

    directClient.registerAgent(runtime);

    // report to console
    elizaLogger.debug(`Started ${character.name} as ${runtime.agentId}`);

    return runtime;
  } catch (error) {
    elizaLogger.error(
      `Error starting agent for character ${character.name}:`,
      error
    );
    console.error(error);
    throw error;
  }
}

/* Check if port is available */
const checkPortAvailable = (port: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      }
    });

    server.once('listening', () => {
      server.close();
      resolve(true);
    });

    server.listen(port);
  });
};

/* Start all agents */
const startAgents = async () => {
  const directClient = new DirectClient();
  let serverPort = parseInt(settings.SERVER_PORT || '3000');
  const args = parseArguments();

  let charactersArg = args.characters || args.character;
  let characters = [];

  if (!charactersArg) {
    throw new Error('No characters found');
  }

  if (charactersArg) {
    characters = await loadCharacters(charactersArg);
  }

  try {
    for (const character of characters) {
      await startAgent(character, directClient as DirectClient);
    }
  } catch (error) {
    elizaLogger.error('Error starting agents:', error);
  }

  while (!(await checkPortAvailable(serverPort))) {
    elizaLogger.warn(`Port ${serverPort} is in use, trying ${serverPort + 1}`);
    serverPort++;
  }

  // upload some agent functionality into directClient
  directClient.startAgent = async (character: Character) => {
    // wrap it so we don't have to inject directClient later
    return startAgent(character, directClient);
  };

  directClient.start(serverPort);

  if (serverPort !== parseInt(settings.SERVER_PORT || '3000')) {
    elizaLogger.info(`Server started on alternate port ${serverPort}`);
  }

  const isDaemonProcess = process.env.DAEMON_PROCESS === 'true';
  if (!isDaemonProcess) {
    elizaLogger.info("Chat started. Type 'exit' to quit.");
    const chat = startChat(characters);
    chat();
  }
};

/* ENTRYPOINT */
startAgents().catch((error) => {
  elizaLogger.error('Unhandled error in startAgents:', error);
  process.exit(1);
});

export const wait = (minTime: number = 1000, maxTime: number = 3000) => {
  const waitTime =
    Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return new Promise((resolve) => setTimeout(resolve, waitTime));
};
