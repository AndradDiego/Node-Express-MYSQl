const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const bcrypt = require('bcrypt')

const create = async (req, res) => {
    const { nome, cpf, email, password } = req.body
    try {
        const saltRounds = 1;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await prisma.pessoas.create({
            data: {
                nome,
                password: hashedPassword,
                email,
                cpf
            }
        })
        res.status(201).json({ status: `Usuario criado` })



    } catch (error) {
        res.status(500).json({ status: `Nao cadastrado` })
    }
}
module.exports = { create }

