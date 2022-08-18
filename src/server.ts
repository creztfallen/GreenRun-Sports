'use strict';

import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
import 'dotenv/config';
import { Routes } from './routes/index';

const PORT = process.env.PORT || 3000;

export let server: Server;

export const init = async function () {
  try {
    server = Hapi.server({
      port: PORT,
      host: '0.0.0.0',
    });

    server.route(Routes.user);
    server.route(Routes.bet);

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
