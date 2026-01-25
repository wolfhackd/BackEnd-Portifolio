import type { FastifyInstance } from "fastify";
import { ProjectController } from "./project.controller.js";
import { ProjectService } from "./project.service.js";
import { ProjectRepository } from "./project.repository.js";
import {
  createProjectSchema,
  deleteProjectSchema,
  getProjectSchema,
  listProjectsSchema,
  updateProjectSchema,
} from "./project.schema.js";
import { get } from "http";

const projectRepository = new ProjectRepository();
const projectService = new ProjectService(projectRepository);
const projectController = new ProjectController(projectService);

export const projectRoute = async (app: FastifyInstance) => {
  app.post(
    "/project",
    { schema: createProjectSchema },
    projectController.createProject,
  );
  app.get(
    "/project",
    { schema: listProjectsSchema },
    projectController.listProjects,
  );
  app.delete(
    "/project-delete/:id",
    { schema: deleteProjectSchema },
    projectController.deleteProject,
  );
  app.get(
    "/project/:id",
    { schema: getProjectSchema },
    projectController.getProject,
  );
  app.put(
    "/project/:id",
    { schema: updateProjectSchema },
    projectController.updateProject,
  );
};
