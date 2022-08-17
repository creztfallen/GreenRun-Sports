'use strict';

import Hapi from '@hapi/hapi';
import { Server, Request } from '@hapi/hapi';
import { Index } from './controllers/indexController';
import { createUser } from './controllers/userController';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

export let server: Server;

export const init = async function () {
  try {
    server = Hapi.server({
      port: PORT,
      host: '0.0.0.0',
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: Index,
    });

    server.route({
      method: 'POST',
      path: '/users',
      handler: createUser,
    });

    return server;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const start = async function (): Promise<void> {
  try {
    console.log(`Running on ${server.settings.host}:${server.settings.port}`);
    return server.start();
  } catch (e) {
    console.error(e);
  }
};

// process.on('unhandledRejection', (err) => {
//   console.error('unhandledRejection');
//   console.error(err);
//   process.exit(1);
// });
