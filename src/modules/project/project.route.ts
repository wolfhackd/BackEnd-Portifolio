import type { FastifyInstance } from "fastify";
import { ProjectController } from "./project.controller.js";
import { ProjectService } from "./project.service.js";
import { ProjectRepository } from "./project.repository.js";

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

export const projectRoute = async (app: FastifyInstance) => {
  app.post("/project", projectController.createProject);
  app.get("/project", projectController.listProjects);
};
