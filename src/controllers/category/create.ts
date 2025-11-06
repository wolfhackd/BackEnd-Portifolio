import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';
import type { Project } from '../project.controller.js';
import type { Category } from '../category.controller.js';

export const createCategory = async (
  req: FastifyRequest<{ Body: Category }>,
  reply: FastifyReply,
) => {
  try {
    const { name } = req.body;

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    reply.status(201).send({ message: 'Categoria criada com sucesso', category });
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
