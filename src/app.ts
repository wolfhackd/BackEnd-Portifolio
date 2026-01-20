import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { fastifyCookie } from "@fastify/cookie";
import { env } from "./config/env.js";
import { authRoute } from "./modules/auth/auth.route.js";
import { categoryRoute } from "./modules/category/category.route.js";
import { technologyRoute } from "./modules/technology/technology.route.js";

// Create a Fastify instance
const app = Fastify({ logger: true });

//server Config
app.register(fastifyCors, {
  origin: `${process.env.FRONTEND_URL}`,
  credentials: true,
});
app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET!,
});

//Routes
app.register(authRoute);
app.register(categoryRoute);
app.register(technologyRoute);
// app.register(me);
// app.register(logoutRoute);
// app.register(projectRoutes);

export default app;
