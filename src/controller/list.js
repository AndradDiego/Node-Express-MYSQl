const database = require("../database")
const list = async (req, res) => {
    const result = await database.query(`SELECT nome,cpf,email FROM pessoas`)
    res.status(200).json(result.rows)
}
module.exports = { list }