import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export type Project = {
  title: string;
  description: string;
  link: string;
  fastDescription: string;
  overview: string;
};

export const createProject = async (
  req: FastifyRequest<{ Body: Project }>,
  reply: FastifyReply,
) => {
  try {
    const { title, description, link, fastDescription, overview } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        link,
        fastDescription,
        overview,
      },
    });

    reply.status(201).send({ message: 'Projeto criado com sucesso', project });
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
