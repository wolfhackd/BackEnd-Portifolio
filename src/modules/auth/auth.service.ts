import type { FastifyReply, FastifyRequest } from "fastify";
import { JwtService } from "../../shared/jwtService.js";
import { CookieService } from "../../shared/cookie-service.js";
import type { GitHubAuthService } from "../providers/github.service.js";

export class AuthService {
  public constructor(
    private readonly githubService: GitHubAuthService,
    private readonly jwtService: JwtService,
  ) {}

  public login = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { code } = req.body as { code: string };

      if (!code) {
        return reply.status(400).send({ error: "Missing Code" });
      }

      const accessTokenUrl = await this.githubService.getAccessTokenUrl(code);
      if (accessTokenUrl) {
      }
      const userData = await this.githubService.getUserData(accessTokenUrl);
      if (userData) {
      }
      const isUserValid = await this.githubService.verifyUser(userData);
      if (isUserValid) {
      }

      if (!isUserValid) {
        return reply.status(401).send({ error: "Invalid User" });
      }

      const token = this.jwtService.sign({ userId: userData.id.toString() });

      if (!token) {
        return reply.status(500).send({ error: "Could not generate token" });
      }

      CookieService.setAuthCookie(reply, token);
      return reply.status(200).send({ message: "Authentication Successful" });
    } catch (error) {
      console.error("Error during GitHub authentication:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  };

  public logout = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      CookieService.clearAuthCookie(reply);
    } catch (e) {
      console.error("Error during GitHub authentication:", e);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  };

  public me = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const signedToken = req.cookies.token;

      if (!signedToken) {
        return reply.status(401).send({ error: "Token not found" });
      }

      const { valid, value } = req.unsignCookie(signedToken);

      if (!valid || !value) {
        return reply.status(401).send({ error: "Cookie signature invalid" });
      }

      const decoded = this.jwtService.verify(value);

      if (!decoded) {
        return reply.status(401).send({ error: "Token invalid or expired" });
      }

      return reply.status(200).send({
        message: "User authenticated",
        user: decoded,
      });
    } catch (e) {
      console.error("Error during authentication check:", e);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  };
}
