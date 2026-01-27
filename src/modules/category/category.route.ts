import type { FastifyInstance } from "fastify";
import { CategoryController } from "./category.controller.js";
import { CategoryRepository } from "./category.repository.js";
import { CategoryService } from "./category.service.js";
import {
  createCategorySchema,
  deleteCategorySchema,
  getCategorySchema,
  listCategoriesSchema,
} from "./category.schema.js";

const repository = new CategoryRepository();
const service = new CategoryService(repository);
const categoryController = new CategoryController(service);

export const categoryRoute = async (app: FastifyInstance) => {
  app.post(
    "/category",
    { schema: createCategorySchema },
    categoryController.createCategory,
  );
  app.get(
    "/category",
    { schema: listCategoriesSchema },
    categoryController.listCategories,
  );
  app.get(
    "/category/:id",
    { schema: getCategorySchema },
    categoryController.getCategory,
  );
  app.delete(
    "/category-delete/:id",
    { schema: deleteCategorySchema },
    categoryController.deleteCategory,
  );
};
