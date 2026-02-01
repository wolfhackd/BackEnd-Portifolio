import z from "zod";

export const ProjectInput = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  link: z.string(),
  created: z.coerce.date(),
  fastDescription: z.string(),
  overview: z.string(),
  technologies: z
    .array(
      z.object({
        id: z.string(),
      }),
    )
    .optional(),

  challenges: z
    .array(
      z.object({
        id: z.string(),
      }),
    )
    .optional(),
});

export type IProject = z.infer<typeof ProjectInput>;

export const ProjectUpdateInput = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  link: z.string().optional(),
  fastDescription: z.string().optional(),
  overview: z.string().optional(),

  technologyIds: z.array(z.string()).optional(),

  challengeIds: z
    .array(
      z.object({
        id: z.string(),
      }),
    )
    .optional(),
});

export type IProjectUpdate = z.infer<typeof ProjectUpdateInput>;

export const createProjectInput = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string(),
  fastDescription: z.string(),
  overview: z.string(),
});

export type ICreateProject = z.infer<typeof createProjectInput>;
