import type { FastifyInstance } from 'fastify';
import jwt from 'jsonwebtoken';
import { env } from 'process';

export async function authRoute(app: FastifyInstance) {
  app.post('/auth/github', async (req, reply) => {
    const { code } = req.body as { code: string };

    if (!code) {
      return reply.status(400).send({ error: 'Missing Code' });
    }

    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData: any = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user: any = await userResponse.json();

    // Aqui você valida se é você está logando
    if (user.login !== 'wolfhackd') {
      return reply.status(401).send({ error: 'Unauthorized' });
    }

    // Pode criar um token JWT simples ou só devolver algo

    const secretKey = env.JWT_SECRET as string;

    const response = jwt.sign({ user }, secretKey, { expiresIn: '1d' });

    reply
      .setCookie('token', response, {
        path: '/',
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24,
      })
      .send({ message: 'Authenticated' });
  });
}
