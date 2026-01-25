import type { FastifyInstance } from "fastify";

import { TechnologyController } from "./technology.controller.js";
import { TechnologyRepository } from "./technology.repository.js";
import { TechnologyService } from "./technology.service.js";
import {
  createTechnologySchema,
  deleteTechnologySchema,
  listTechnologiesSchema,
} from "./technology.schema.js";

const repository = new TechnologyRepository();
const service = new TechnologyService(repository);
const technologyController = new TechnologyController(service);

export const technologyRoute = async (app: FastifyInstance) => {
  app.post(
    "/technology",
    { schema: createTechnologySchema },
    technologyController.createTechnology,
  );
  app.get(
    "/technology",
    { schema: listTechnologiesSchema },
    technologyController.listTechnologies,
  );
  app.delete(
    "/technology-delete/:id",
    { schema: deleteTechnologySchema },
    technologyController.deleteTechnology,
  );
};
