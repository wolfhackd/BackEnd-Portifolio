import type { FastifyInstance } from "fastify";

import { TechnologyController } from "./technology.controller.js";
import { TechnologyRepository } from "./technology.repository.js";
import { TechnologyService } from "./technology.service.js";
import { CategoryRepository } from "../category/category.repository.js";
import { CategoryService } from "../category/category.service.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { authMiddlewareService } from "../../middleware/auth.service.js";
import { JwtService } from "../../shared/jwtService.js";

// Repositories e Services
const technologyRepository = new TechnologyRepository();
const technologyService = new TechnologyService(technologyRepository);

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);

const technologyController = new TechnologyController(
  technologyService,
  categoryService,
);

// JWT e serviço de auth
const jwtService = new JwtService();
const authService = new authMiddlewareService(jwtService);

export const technologyRoute = async (app: FastifyInstance) => {
  // Rotas protegidas
  app.post(
    "/technology",
    { preHandler: authMiddleware(authService) },
    technologyController.createTechnology,
  );

  app.delete(
    "/technology-delete/:id",
    { preHandler: authMiddleware(authService) },
    technologyController.deleteTechnology,
  );

  // Rota pública
  app.get("/technology", technologyController.listTechnologies);
};
