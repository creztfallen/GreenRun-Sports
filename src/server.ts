'use strict';

import Hapi from '@hapi/hapi';
import { Server, Request } from '@hapi/hapi';
import { Index } from './controllers/indexController';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: PORT,
    host: '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: Index,
  });

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Running on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
  console.error(err);
  process.exit(1);
});
