import dotenv from "dotenv";
import path from "node:path";
import z from "zod";

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";

dotenv.config({
  path: path.resolve(process.cwd(), envFile),
});

export const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1, "Database URL is required"),
  PORT: z.coerce.number().default(3000),

  GITHUB_CLIENT_ID: z.string().min(1, "GitHub client ID is required"),
  GITHUB_CLIENT_SECRET: z.string().min(1, "GitHub client secret is required"),

  COOKIE_SECRET: z.string().min(1, "Cookie secret is required"),

  JWT_SECRET: z.string().min(1, "JWT secret is required"),
  JWT_EXPIRES_IN_MINUTES: z.coerce.number().default(60),
  JWT_ALGORITHM: z.enum(["HS256", "HS384", "HS512"]).default("HS256"),

  FRONTEND_URL: z.string().default("http://localhost:5173"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
