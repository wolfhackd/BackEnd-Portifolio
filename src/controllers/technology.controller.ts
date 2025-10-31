import type { FastifyInstance } from 'fastify';
import { createTechnology } from './technology/create.js';
import { listTechnology } from './technology/list.js';

export const technologiesRoutes = (app: FastifyInstance) => {
  app.post('/technologies', createTechnology);
  app.get('/technologies', listTechnology);
};
