import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export const deleteCategory = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.body as { id: string };

    const category = await prisma.category.delete({
      where: {
        id,
      },
    });

    reply.status(201).send({ message: 'Categoria deletada com sucesso', category });
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
