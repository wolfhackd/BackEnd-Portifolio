import type { FastifyReply, FastifyRequest } from 'fastify';
import type { editedProject, Params, Project } from '../project.controller.js';
import prisma from '../../lib/prisma.js';

export const editProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.params as Params;
    const {
      title,
      description,
      link,
      fastDescription,
      overview,
      images,
      technologies,
      // challenges,
    } = req.body as editedProject;

    await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
        link,
        fastDescription,
        overview,
        images,
        technologies: {
          set: technologies.map((techId) => ({ id: techId })),
        },
      },
      include: {
        technologies: true,
      },
    });

    reply.status(200).send('Projeto editado com sucesso');
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};
