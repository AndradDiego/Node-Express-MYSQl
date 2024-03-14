
const database = require("../database")

const detail = async (req, res) => {
    const { email } = req.params
    try {
        const result = await database.query(`SELECT nome,email,cpf FROM pessoas WHERE email='${email}'`)
        res.status(200).json(result.rows)

    } catch (error) {
        res.status(500).json({ status: `error` })

    }
}

module.exports = { detail }