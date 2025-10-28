import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

// Create a Fastify instance
const app = Fastify({
  logger: true,
});

// Declare a route
// fastify.get('/', async function handler(request, reply) {
//   return { hello: 'world' };
// });

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

//Server Listneer
try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
