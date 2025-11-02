import prisma from '../../lib/prisma.js';
export const createTechnology = async (req, reply) => {
    try {
        const { name, color, icon } = req.body;
        const technology = await prisma.technology.create({ data: { name, color, icon } });
        return reply.status(201).send(technology);
    }
    catch {
        return reply.status(500).send({ error: 'Internal Server Error' });
    }
};
//# sourceMappingURL=create.js.map