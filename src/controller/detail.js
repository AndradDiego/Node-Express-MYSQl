
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const detail = async (req, res) => {
    const { email } = req.params
    try {
        const result = await prisma.pessoas.findUnique({
            where: {
                email,
            }
        })
        if (!result) {
            return res.status(500).json({ status: `usuario nao encontrado` })

        }
        return res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ status: `usuario nao encontrado` })

    }

}

module.exports = { detail }