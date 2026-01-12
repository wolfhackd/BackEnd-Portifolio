import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { fastifyCookie } from "@fastify/cookie";
import { env } from "./config/env.js";
import { authRoute } from "./modules/auth/auth.route.js";

// Create a Fastify instance
const app = Fastify();

//server Config
app.register(fastifyCors, { origin: `${process.env.FRONTEND_URL}`, credentials: true });
app.register(fastifyCookie, {
  secret: env.COOKIE_SECRET!
});


//Routes
app.register(authRoute);
// app.register(me);
// app.register(logoutRoute);
// app.register(technologiesRoutes);
// app.register(projectRoutes);
// app.register(categoryRoutes);

export default app;