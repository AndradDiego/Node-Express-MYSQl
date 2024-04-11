const { mysqlconection } = require("../database")

const detail = async (req, res) => {
    const { email } = req.body
    try {
        const result = await mysqlconection.execute(`SELECT nome,email,cpf FROM pessoas WHERE email='${email}'`)
        if (result[0] == '') {
            return res.status(500).json({ status: `usuario nao encontrado` })

        }
        return res.status(200).json(result[0])

    } catch (error) {
        res.status(500).json({ status: `usuario nao encontrado` })

    }

}

module.exports = { detail }