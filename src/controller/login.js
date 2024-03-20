const { mysqlconection } = require("../database")
const bcrypt = require('bcrypt')
const login = async (req, res) => {
    const { email } = req.params
    try {
        const { nome, password } = req.body
        const [rows] = await mysqlconection.execute(`SELECT password FROM pessoas WHERE nome = ?`, [nome]);
        const { password: hashedPassword } = rows[0]
        const checkHashe = await bcrypt.compare(password, hashedPassword)
        if (checkHashe) {
            res.status(200).json({ status: `LOGIN` })
        }
        res.status(500).json({ status: `Login ou Senha nao confere` })

    } catch (error) {
        console.log(error)

    }

}
module.exports = { login }
