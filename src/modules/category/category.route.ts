import type { FastifyInstance } from "fastify";
import { CategoryController } from "./category.controller.js";
import { CategoryRepository } from "./category.repository.js";
import { CategoryService } from "./category.service.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { authMiddlewareService } from "../../middleware/auth.service.js";
import { JwtService } from "../../shared/jwtService.js";

// instâncias
const repository = new CategoryRepository();
const service = new CategoryService(repository);
const categoryController = new CategoryController(service);

// instância do JWT + serviço de auth
const jwtService = new JwtService();
const authService = new authMiddlewareService(jwtService);

export const categoryRoute = async (app: FastifyInstance) => {
  // rotas públicas (sem auth)
  app.get("/category", categoryController.listCategories);
  app.get("/category/:id", categoryController.getCategory);

  // rotas protegidas (com auth)
  app.post(
    "/category",
    { preHandler: authMiddleware(authService) }, // 🔒 middleware aplicado
    categoryController.createCategory,
  );

  app.delete(
    "/category-delete/:id",
    { preHandler: authMiddleware(authService) }, // 🔒 middleware aplicado
    categoryController.deleteCategory,
  );
};
