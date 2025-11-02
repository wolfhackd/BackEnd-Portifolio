import prisma from '../../lib/prisma.js';
export const listTechnology = async (req, reply) => {
    try {
        const technologyList = await prisma.technology.findMany();
        return reply.status(201).send(technologyList);
    }
    catch {
        return reply.status(500).send({ error: 'Internal Server Error' });
    }
};
//# sourceMappingURL=list.js.map