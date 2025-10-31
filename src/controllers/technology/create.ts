import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export type Technology = {
  name: string;
  color: string;
  icon: string;
};

export const createTechnology = async (
  req: FastifyRequest<{ Body: Technology }>,
  reply: FastifyReply,
) => {
  try {
    const { name, color, icon } = req.body;
    const technology = await prisma.technology.create({ data: { name, color, icon } });

    return reply.status(201).send(technology);
  } catch {
    return reply.status(500).send({ error: 'Internal Server Error' });
  }
};
