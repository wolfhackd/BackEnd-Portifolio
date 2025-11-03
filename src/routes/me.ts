import type { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import { env } from 'process';

export async function me(app: FastifyInstance) {
  app.get('/me', async (req, reply) => {
    const token = req.cookies.token;
    if (!token) return reply.status(401).send({ error: 'Token ausente' });

    try {
      const secretKey = env.JWT_SECRET as string;
      const decoded = jwt.verify(token, secretKey);
      (req as any).user = decoded;
      reply.send(200);
    } catch {
      return reply.status(401).send({ error: 'Token inválido' });
    }
  });
}
