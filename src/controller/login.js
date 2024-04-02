const { mysqlconection } = require("../database")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    try {
        const { nome, password } = req.body
        const [rows] = await mysqlconection.execute(`SELECT password FROM pessoas WHERE nome = ?`, [nome]);
        const { password: hashedPassword } = rows[0]
        const checkHashe = await bcrypt.compare(password, hashedPassword)
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
