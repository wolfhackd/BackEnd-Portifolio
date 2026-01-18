import type { FastifyReply, FastifyRequest } from "fastify";
import type { authMiddlewareService } from "./auth.service.js";

export const authMiddleware = (authService: authMiddlewareService) => {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const token = req.cookies.token;

    if (!token) {
      return reply.status(401).send({ error: "Token not found" });
    }

    const decoded = await authService.verifyUser(token);

    if (!decoded) {
      return reply.status(401).send({ error: "Token invalid or expired" });
    }

    req.user = decoded;
  };
};
