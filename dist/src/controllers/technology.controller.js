import { createTechnology } from './technology/create.js';
import { listTechnology } from './technology/list.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
export const technologiesRoutes = (app) => {
    app.post('/technologies', { preHandler: authMiddleware }, createTechnology);
    app.get('/technologies', listTechnology);
};
//# sourceMappingURL=technology.controller.js.map