import type { FastifyInstance } from 'fastify';
import { createTechnology, type Technology } from './technology/create.js';
import { listTechnology } from './technology/list.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

export const technologiesRoutes = (app: FastifyInstance) => {
  app.post<{ Body: Technology }>('/technologies', { preHandler: authMiddleware }, createTechnology);
  app.get('/technologies', listTechnology);
};
