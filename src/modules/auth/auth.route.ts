import type { FastifyInstance } from "fastify";
import { AuthService } from "./auth.service.js";
import { JwtService } from "../../shared/jwtService.js";
import { GitHubAuthService } from "../providers/github.service.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { authMiddlewareService } from "../../middleware/auth.service.js";

// Instâncias
const githubService = new GitHubAuthService();
const jwtService = new JwtService();
const authService = new AuthService(githubService, jwtService);

// Serviço de middleware
const authServiceMiddleware = new authMiddlewareService(jwtService);

export const authRoute = async (app: FastifyInstance) => {
  // rota pública (login via GitHub)
  app.post("/auth/github", authService.login);

  // rotas protegidas
  app.post(
    "/logout",
    { preHandler: authMiddleware(authServiceMiddleware) },
    authService.logout,
  );

  app.get(
    "/me",
    { preHandler: authMiddleware(authServiceMiddleware) },
    authService.me,
  );
};
