import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
const server = express();
export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { cors: true },
  );
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  return app.init();
};
createNestServer(server)
  .then()
  .catch((err) => console.error('Nest broken', err));

module.exports.httpHandler = server;
