import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';
import { authRoute } from './routes/loginCallback.js';
import 'dotenv/config';
import cookie from '@fastify/cookie';
import { technologiesRoutes } from './controllers/technology.controller.js';
import { projectRoutes } from './controllers/project.controller.js';
import { me } from './routes/me.js';
import { categoryRoutes } from './controllers/category.controller.js';
import { logoutRoute } from './routes/logout.js';

// Create a Fastify instance
const app = Fastify();

//server Config
app.register(fastifyCors, { origin: `${process.env.FRONTEND_URL}`, credentials: true });
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
app.register(me);
app.register(logoutRoute);
app.register(technologiesRoutes);
app.register(projectRoutes);
app.register(categoryRoutes);

const port = Number(process.env.PORT || 3000);

//Server Listener
try {
  await app.listen({ port: port, host: '0.0.0.0' });
  console.log(`🚀 Server is running on http://localhost:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
