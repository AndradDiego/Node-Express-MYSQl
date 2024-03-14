const database = require("../database")
const create = async (req, res) => {
    const { nome, cpf, email, password } = req.body
    try {
        await database.query(`insert into pessoas (nome,cpf,email,password) values('${nome}','${cpf}','${email}','${password}')`)
        res.status(201).json({ status: `usuario criado!!` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: `Nao cadastrado` })
    }
}
module.exports = { create }

