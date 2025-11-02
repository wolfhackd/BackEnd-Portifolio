import { createProject } from './project/create.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
export const projectRoutes = (app) => {
    app.post('/projects', { preHandler: authMiddleware }, createProject);
    // app.post<{ Body: Project }>('/projects', createProject);
};
//# sourceMappingURL=project.controller.js.map