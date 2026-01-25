import z from "zod";
import { createTechnologyInput, technologySchema } from "./technology.type.js";

export const createTechnologySchema = {
  description: "Create a new technology",
  tags: ["Technology"],
  summary: "Create a new technology",
  body: createTechnologyInput,
  response: {
    201: technologySchema,
  },
};

export const listTechnologiesSchema = {
  description: "List all technologies",
  tags: ["Technology"],
  summary: "List all technologies",
  response: {
    200: z.array(technologySchema),
  },
};

export const deleteTechnologySchema = {
  description: "Delete a technology by id",
  tags: ["Technology"],
  summary: "Delete a technology by id",
  params: z.object({ id: z.string() }),
  response: {
    200: technologySchema,
  },
};
