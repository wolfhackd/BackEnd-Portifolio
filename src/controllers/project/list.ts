// import type { FastifyReply, FastifyRequest } from 'fastify';
// import prisma from '../../lib/prisma.js';
// import type { Project } from '../project.controller.js';

// export const listProjects = async (req: FastifyRequest, reply: FastifyReply) => {
//   try {
//     const projects = await prisma.project.findMany({
//       include: {
//         technologies: true,
//         challenges: true,
//       },
//     });

//     reply.status(201).send(projects);
//   } catch {
//     return reply.status(500).send({ error: 'Internal Server Error' });
//   }
// };
