
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const verifyemail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const query = await prisma.pessoas.findUnique({
            where: {
                email,
            }
        })
        if (query) {
            res.status(409).json({ status: `email ja cadastrado` })
        } else {
            next();
        }

    } catch (error) {

        res.status(500).json({ status: `error` })
    }
}

module.exports = { verifyemail }
