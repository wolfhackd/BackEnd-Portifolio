import jwt from 'jsonwebtoken';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.token;
  if (!token) return reply.status(401).send({ error: 'Token ausente' });

  try {
    const secretKey = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secretKey);
    (req as any).user = decoded;
  } catch {
    return reply.status(401).send({ error: 'Token inválido' });
  }
}
