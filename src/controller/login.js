const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    try {
        const { email, password } = req.body
<<<<<<< HEAD
        const [rows] = await mysqlconection.execute(`SELECT password FROM pessoas WHERE email = ?`, [email]);
        const { password: hashedPassword } = rows[0]
=======
        const rows = await prisma.pessoas.findMany({
            where: {
                email: email
            },
            select: {
                password: true,
                nome: true,
                cpf: true

            }
        })
        const hashedPassword = rows[0].password
>>>>>>> f541b338d64edf2981309a810b4523b35d3597a3
        const checkHashe = await bcrypt.compare(password, hashedPassword)
        console.log(password)
        console.log(hashedPassword)

        if (checkHashe) {
            const token = jwt.sign({
                data: {
                    nome: rows[0].nome,
                    email: rows[0].email,
                    cpf: rows[0].cpf
                }
            }, '5d242b5294d72df332ca2c492d2c0b9b7', { expiresIn: 86000 });
            return res.status(200).json({ status: `sucesso`, token })

        }
        res.status(500).json({ status: `Login ou Senha nao confere` })

    } catch (error) {
        console.log(error)

    }

}
module.exports = { login }
