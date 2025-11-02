import type { FastifyReply, FastifyRequest } from 'fastify';
export type Project = {
    title: string;
    description: string;
    link: string;
    fastDescription: string;
    overview: string;
};
export declare const createProject: (req: FastifyRequest<{
    Body: Project;
}>, reply: FastifyReply) => Promise<undefined>;
//# sourceMappingURL=create.d.ts.map