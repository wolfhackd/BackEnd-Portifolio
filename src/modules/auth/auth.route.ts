import type { FastifyInstance } from "fastify/types/instance.js";
import { AuthService } from "./auth.service.js";
import { JwtService } from "../../shared/jwtService.js";
import { GitHubAuthService } from "../providers/github.service.js";

const githubService = new GitHubAuthService();
const jwtService = new JwtService();
const authService = new AuthService(githubService, jwtService);

export const authRoute = async (app: FastifyInstance) => {
  app.post("/auth/github", authService.login);
  app.post("/logout", authService.logout);
};
