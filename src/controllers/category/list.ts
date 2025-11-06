import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export const listCategory = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const category = await prisma.category.findMany();

    reply.status(201).send(category);
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
