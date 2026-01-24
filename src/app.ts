import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { fastifyCookie } from "@fastify/cookie";
import { env } from "./config/env.js";
import { authRoute } from "./modules/auth/auth.route.js";
import { categoryRoute } from "./modules/category/category.route.js";
import { technologyRoute } from "./modules/technology/technology.route.js";
import { projectRoute } from "./modules/project/project.route.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

// Create a Fastify instance
const app = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

//Zod config
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

//server Config
app.register(fastifyCors, {
  origin: `${env.FRONTEND_URL}`,
  credentials: true,
});
app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET!,
});
//Tem que transformar zod em json
app.register(fastifySwagger, {
  openapi: {
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

//Routes
app.register(authRoute);
app.register(categoryRoute);
app.register(technologyRoute);
app.register(projectRoute);

export default app;
