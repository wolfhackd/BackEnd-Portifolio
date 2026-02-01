import type { FastifyInstance } from "fastify";
import { ProjectController } from "./project.controller.js";
import { ProjectService } from "./project.service.js";
import { ProjectRepository } from "./project.repository.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { authMiddlewareService } from "../../middleware/auth.service.js";
import { JwtService } from "../../shared/jwtService.js";

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

// instância do JWT + serviço de auth
const jwtService = new JwtService();
const authService = new authMiddlewareService(jwtService);

export const projectRoute = async (app: FastifyInstance) => {
  // Rotas protegidas
  app.post(
    "/project",
    { preHandler: authMiddleware(authService) },
    projectController.createProject,
  );

  app.put(
    "/project/:id",
    { preHandler: authMiddleware(authService) },
    projectController.updateProject,
  );

  app.delete(
    "/project-delete/:id",
    { preHandler: authMiddleware(authService) },
    projectController.deleteProject,
  );

  // Rotas públicas
  app.get("/project", projectController.listProjects);
  app.get("/project/:id", projectController.getProject);
};
