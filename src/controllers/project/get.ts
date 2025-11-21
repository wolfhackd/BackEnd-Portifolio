import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export const getProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        technologies: true,
        challenges: true,
      },
    });

    if (!project) {
      return reply.status(404).send({ error: 'Projeto não encontrado' });
    }

    reply.status(200).send(project);
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
