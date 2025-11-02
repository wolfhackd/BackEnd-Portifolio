import prisma from '../../lib/prisma.js';
export const createProject = async (req, reply) => {
    try {
        const { title, description, link, fastDescription, overview } = req.body;
        const project = await prisma.project.create({
            data: {
                title,
                description,
                link,
                fastDescription,
                overview,
            },
        });
        reply.status(201).send({ message: 'Projeto criado com sucesso', project });
    }
    catch {
        return reply.status(500).send({ error: 'Internal Server Error' });
    }
};
//# sourceMappingURL=create.js.map