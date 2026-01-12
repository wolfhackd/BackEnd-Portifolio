// import type { FastifyReply, FastifyRequest } from 'fastify';
// import prisma from '../../lib/prisma.js';

// export const listTechnology = async (req: FastifyRequest, reply: FastifyReply) => {
//   try {
//     const technologyList = await prisma.technology.findMany({ include: { category: true } });

//     return reply.status(201).send(technologyList);
//   } catch {
//     return reply.status(500).send({ error: 'Internal Server Error' });
//   }
// };
