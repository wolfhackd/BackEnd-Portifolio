import type { FastifyInstance } from 'fastify';
import { createProject } from './project/create.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { listProjects } from './project/list.js';
import { deleteProject } from './project/delete.js';

export type Project = {
  title: string;
  description: string;
  link: string;
  fastDescription: string;
  overview: string;
};

export const projectRoutes = (app: FastifyInstance) => {
  app.post<{ Body: Project }>('/projects', { preHandler: authMiddleware }, createProject);
  app.post('/projects-delete', { preHandler: authMiddleware }, deleteProject);
  app.get('/projects', listProjects);
};
