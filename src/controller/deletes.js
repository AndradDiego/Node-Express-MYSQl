const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const deletes = async (req, res) => {
    const { email } = req.params
    try {
        await prisma.pessoas.delete({
            where: {
                email
            }

        })
        res.status(200).json({ status: `Usuario Deletado` })
    } catch (error) {
        res.status(500).json({ status: `error` })

    }

}
module.exports = { deletes }