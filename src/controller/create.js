const database = require("../database")
const create = (req, res) => {
    const { nome, email, senha, idade } = req.body;
    database.push({ nome, email, senha, idade })
    res.status(201).json({ status: `usuario criado!!` })
}
module.exports = { create }

