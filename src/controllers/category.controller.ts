import type { FastifyInstance } from 'fastify';
import { createCategory } from './category/create.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { listCategory } from './category/list.js';
import { deleteCategory } from './category/delete.js';

export type Category = {
  name: string;
};

export const categoryRoutes = (app: FastifyInstance) => {
  app.post<{ Body: Category }>('/category', { preHandler: authMiddleware }, createCategory);
  // app.post<{ Body: Category }>('/category', createCategory);
  app.get('/category', listCategory);
  app.post('/category-delete', { preHandler: authMiddleware }, deleteCategory);
};
