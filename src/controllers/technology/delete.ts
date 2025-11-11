import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export const deleteTechnology = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.body as { id: string };

    const technology = await prisma.technology.delete({
      where: { id },
    });

    reply.status(200).send({ message: 'Tecnologia projeto com sucesso', technology });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro interno do servidor' });
  }
};
