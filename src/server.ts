'use strict';

import Hapi from '@hapi/hapi';
import { Server, Request } from '@hapi/hapi';
import { Index } from './controllers/indexController';
import 'dotenv/config';
import { getAllUsers, createUser } from './controllers/userController';

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

    server.route({
      method: 'GET',
      path: '/users',
      handler: getAllUsers,
    })

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
