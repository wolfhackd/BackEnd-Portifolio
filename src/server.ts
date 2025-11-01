import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';
import { authRoute } from './routes/loginCallback.js';
import 'dotenv/config';
import cookie from '@fastify/cookie';
import { technologiesRoutes } from './controllers/technology.controller.js';
import { projectRoutes } from './controllers/project.controller.js';

// Create a Fastify instance
const app = Fastify({
  logger: true,
});

//server Config
app.register(fastifyCors);
app.register(cookie, {
  secret: process.env.JWT_SECRET as string,
  parseOptions: {},
});

//Server Docs
app.register(swagger, {
  swagger: {
    info: {
      title: 'Portifolio Routes API',
      description: 'API Documentation for Portifolio Routes',
      version: '1.0.0',
    },
  },
});

app.register(swaggerUi, {
  routePrefix: '/docs',
});

//Routes
app.register(authRoute);
app.register(technologiesRoutes);
app.register(projectRoutes);

//Server Listener
try {
  await app.listen({ port: 3000 });
  console.log(`🚀 Server is running on http://localhost:3000`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
