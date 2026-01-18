import type { FastifyInstance } from "fastify";
import { CategoryController } from "./category.controller.js";
import { CategoryRepository } from "./category.repository.js";
import { CategoryService } from "./category.service.js";

const repository = new CategoryRepository();
const service = new CategoryService(repository);
const categoryController = new CategoryController(service);

export const categoryRoute = async (app: FastifyInstance) => {
  app.post("/category", categoryController.createCategory);
  app.get("/category", categoryController.listCategories);
  // app.post('/category-delete', { preHandler: authMiddleware }, deleteCategory);
};
