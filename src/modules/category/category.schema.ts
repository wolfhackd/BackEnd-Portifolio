import z from "zod";
import { categorySchema, createCategoryInput } from "./category.type.js";
import { id } from "zod/locales";

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
    200: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        technologies: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            color: z.string(),
            icon: z.string().nullish(),
            categoryId: z.string(),
          }),
        ),
      }),
    ),
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
    200: z.object({
      id: z.string(),
      name: z.string(),
      technologies: z
        .array(
          z.object({
            id: z.string(),
            name: z.string(),
            color: z.string(),
            icon: z.string().nullish(),
            categoryId: z.string(),
          }),
        )
        .optional(),
    }),
  },
};
