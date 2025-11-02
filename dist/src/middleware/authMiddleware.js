import jwt from 'jsonwebtoken';
export async function authMiddleware(req, reply) {
    const token = req.cookies.token;
    if (!token)
        return reply.status(401).send({ error: 'Token ausente' });
    try {
        const secretKey = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
    }
    catch {
        return reply.status(401).send({ error: 'Token inválido' });
    }
}
//# sourceMappingURL=authMiddleware.js.map