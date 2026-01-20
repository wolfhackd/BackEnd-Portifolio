import type { FastifyInstance } from "fastify";

import { TechnologyController } from "./technology.controller.js";
import { TechnologyRepository } from "./technology.repository.js";
import { TechnologyService } from "./technology.service.js";

const repository = new TechnologyRepository();
const service = new TechnologyService(repository);
const technologyController = new TechnologyController(service);

export const technologyRoute = async (app: FastifyInstance) => {
  app.post("/technology", technologyController.createTechnology);
  app.get("/technology", technologyController.listTechnologies);
  //   app.post("/technology-delete", technologyController.deletetechnology);
};
