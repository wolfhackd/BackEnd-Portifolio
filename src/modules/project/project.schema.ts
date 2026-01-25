import z from "zod";
import { createProjectInput, ProjectInput } from "./project.type.js";

export const createProjectSchema = {
  description: "Create a new project",
  tags: ["Project"],
  summary: "Create a new project",
  body: createProjectInput,
  response: {
    201: ProjectInput,
  },
};

export const listProjectsSchema = {
  description: "List all projects",
  tags: ["Project"],
  summary: "List all projects",
  response: {
    200: z.array(ProjectInput),
  },
};

export const deleteProjectSchema = {
  description: "Delete a project by id",
  tags: ["Project"],
  summary: "Delete a project by id",
  params: z.object({ id: z.string() }),
  response: {
    200: ProjectInput,
  },
};

export const getProjectSchema = {
  description: "Get a project by id",
  tags: ["Project"],
  summary: "Get a project by id",
  params: z.object({ id: z.string() }),
  response: {
    200: ProjectInput,
  },
};

export const updateProjectSchema = {
  description: "Update a project by id",
  tags: ["Project"],
  summary: "Update a project by id",
  params: z.object({ id: z.string() }),
  body: ProjectInput,
  response: {
    200: ProjectInput,
  },
};
