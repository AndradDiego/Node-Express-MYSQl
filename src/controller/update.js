const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const update = async (req, res) => {
    const { email } = req.params
    const dados = req.body

    try {
        await prisma.pessoas.update({
            where: { email },
            data: dados


        })
        res.status(200).json({ status: `Usuario Atualizado` })

    } catch (error) {

        res.status(500).json({ status: `error` })
    }
}
module.exports = { update }
