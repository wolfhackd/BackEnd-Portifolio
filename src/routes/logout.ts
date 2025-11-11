import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export function logoutRoute(app: FastifyInstance) {
  app.get('/logout', async (req: FastifyRequest, reply: FastifyReply) => {
    reply.clearCookie('token');
    reply.send(200);
  });
}
