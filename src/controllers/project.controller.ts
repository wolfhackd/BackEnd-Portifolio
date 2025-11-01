import type { FastifyInstance } from 'fastify';
import { createProject, type Project } from './project/create.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

export const projectRoutes = (app: FastifyInstance) => {
  app.post<{ Body: Project }>('/projects', { preHandler: authMiddleware }, createProject);
  // app.post<{ Body: Project }>('/projects', createProject);
};
