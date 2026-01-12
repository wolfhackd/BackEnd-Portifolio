import 'dotenv/config.js';
import z from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1, 'Database URL is required'),
  PORT: z.number().default(3000),

  GITHUB_CLIENT_ID: z.string().min(1, 'GitHub client ID is required'),
  GITHUB_CLIENT_SECRET: z.string().min(1, 'GitHub client secret is required'),

  COOKIE_SECRET: z.string().min(1, 'Cookie secret is required'),
  
  jWT_SECRET: z.string().min(1, 'JWT secret is required'),
  JWT_EXPIRES_IN_MINUTES: z.number().default(60),
  JWT_ALGORITHM: z.enum(['HS256', 'HS384', 'HS512']).default('HS256'),
});

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data