const database = require("../database")
const create = (req, res) => {
    const { nome, email, senha, idade } = req.body;
    database.forEach((item) => {
        if (item.email == email) {
            res.status(409).json({ status: `Email ja cadastrado` })
        }
    })
    database.push({ nome, email, senha, idade })
    res.status(201).json({ status: `usuario criado!!` })
}
module.exports = { create }

