import type { FastifyInstance } from "fastify";

import { TechnologyController } from "./technology.controller.js";
import { TechnologyRepository } from "./technology.repository.js";
import { TechnologyService } from "./technology.service.js";
import {
  createTechnologySchema,
  deleteTechnologySchema,
  listTechnologiesSchema,
} from "./technology.schema.js";
import { CategoryRepository } from "../category/category.repository.js";
import { CategoryService } from "../category/category.service.js";

const technologyRepository = new TechnologyRepository();
const technologyService = new TechnologyService(technologyRepository);
const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const technologyController = new TechnologyController(
  technologyService,
  categoryService,
);

export const technologyRoute = async (app: FastifyInstance) => {
  app.post(
    "/technology",
    // { schema: createTechnologySchema },
    technologyController.createTechnology,
  );
  app.get(
    "/technology",
    // { schema: listTechnologiesSchema },
    technologyController.listTechnologies,
  );
  app.delete(
    "/technology-delete/:id",
    // { schema: deleteTechnologySchema },
    technologyController.deleteTechnology,
  );
};
