import type { FastifyReply, FastifyRequest } from 'fastify';
export type Technology = {
    name: string;
    color: string;
    icon: string;
};
export declare const createTechnology: (req: FastifyRequest<{
    Body: Technology;
}>, reply: FastifyReply) => Promise<never>;
//# sourceMappingURL=create.d.ts.map