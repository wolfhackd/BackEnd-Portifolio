import z from "zod";
import { categorySchema, createCategoryInput } from "./category.type.js";

export const createCategorySchema = {
  description: "Create a new category",
  tags: ["Category"],
  summary: "Create a new category",
  body: createCategoryInput,
  response: {
    201: categorySchema,
  },
};

export const listCategoriesSchema = {
  description: "List all categories",
  tags: ["Category"],
  summary: "List all categories",
  response: {
    200: z.array(categorySchema),
  },
};

export const deleteCategorySchema = {
  description: "Delete a category by id",
  tags: ["Category"],
  summary: "Delete a category by id",
  params: z.object({ id: z.string() }),
  response: {
    200: categorySchema,
  },
};

export const getCategorySchema = {
  description: "Get a category by id",
  tags: ["Category"],
  summary: "Get a category by id",
  params: z.object({ id: z.string() }),
  response: {
    200: categorySchema,
  },
};