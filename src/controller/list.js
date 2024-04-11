const { mysqlconection } = require("../database")
const list = async (req, res) => {
    const result = await mysqlconection.execute(`SELECT nome,cpf,email FROM pessoas`)
    res.status(200).json(result[0])
}
module.exports = { list }