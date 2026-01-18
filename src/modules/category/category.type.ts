import z from "zod";

export const createCategoryInput = z.object({
  name: z.string().min(1, "Category name is required"),
});

export type CreateCategoryBody = z.infer<typeof createCategoryInput>;

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  technologies: z.array(z.string()),
});

export type ICategorySchema = z.infer<typeof categorySchema>;
