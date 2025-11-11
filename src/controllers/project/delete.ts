import type { FastifyReply, FastifyRequest } from 'fastify';
import prisma from '../../lib/prisma.js';

export const deleteProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.body as { id: string };

    const project = await prisma.project.delete({
      where: { id },
    });

    reply.status(200).send({ message: 'Projeto deletado com sucesso', project });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Erro interno do servidor' });
  }
};
