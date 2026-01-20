import { z } from "zod";

export const technologySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  icon: z.string().nullish(), // Aceita string | null | undefined
  categoryId: z.string().nullish(), // Aceita string | null | undefined
});

export const createTechnologyInput = technologySchema.omit({ id: true });

export type ITechnology = z.infer<typeof technologySchema>;
