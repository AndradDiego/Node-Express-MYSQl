
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const detail = async (req, res) => {
    const { email } = req.body
    try {
<<<<<<< HEAD
        const result = await mysqlconection.execute(`SELECT nome,email,cpf FROM pessoas WHERE email='${email}'`)
        if (result[0] == '') {
            return res.status(500).json({ status: `usuario nao encontrado` })

        }
        return res.status(200).json(result[0])
=======
        const result = await prisma.pessoas.findUnique({
            where: {
                email,
            }
        })
        if (!result) {
            return res.status(500).json({ status: `usuario nao encontrado` })

        }
        return res.status(200).json(result)
>>>>>>> f541b338d64edf2981309a810b4523b35d3597a3

    } catch (error) {
        res.status(500).json({ status: `usuario nao encontrado` })

    }

}

module.exports = { detail }