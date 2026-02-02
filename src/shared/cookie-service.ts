import type { FastifyReply } from "fastify";
import { env } from "../config/env.js";

export class CookieService {
  public static setAuthCookie(response: FastifyReply, token: string) {
    response.setCookie("token", token, {
      httpOnly: true,
      signed: true,
      secure: env.NODE_ENV === "production", // true só no Render/HTTPS
      path: "/",
      sameSite: "none",
      maxAge: 60 * 60 * 24,
    });
  }

  public static clearAuthCookie(response: FastifyReply) {
    response.clearCookie("token", {
      path: "/",
      secure: env.NODE_ENV === "production",
      sameSite: "none",
    });
  }
}
