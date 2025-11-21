import type { FastifyInstance } from 'fastify';
import { createProject } from './project/create.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { listProjects } from './project/list.js';
import { deleteProject } from './project/delete.js';
import { editProject } from './project/edit.js';
import { getProject } from './project/get.js';

export type Project = {
  title: string;
  description: string;
  link: string;
  fastDescription: string;
  overview: string;
  technologies: string[];
};

export type editedProject = {
  title: string;
  description: string;
  link: string;
  images: string[];
  technologies: string[];
  // challenges: string[];

  fastDescription: string;
  overview: string;
};

export type Params = {
  id: string;
};

export const projectRoutes = (app: FastifyInstance) => {
  app.post<{ Body: Project }>('/projects', { preHandler: authMiddleware }, createProject);
  app.post('/projects-delete', { preHandler: authMiddleware }, deleteProject);
  app.get('/projects', listProjects);
  app.post<{ Body: editedProject; Params: Params }>(
    '/projects-edit/:id',
    { preHandler: authMiddleware },
    editProject,
  );
  app.get<{ Params: Params }>('/projects/:id', getProject);
};
