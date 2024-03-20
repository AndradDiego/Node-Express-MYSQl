const { mysqlconection } = require("../database")
const bcrypt = require('bcrypt')
const create = async (req, res) => {
    const { nome, cpf, email, password } = req.body
    try {
        const saltRounds = 1;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await mysqlconection.execute(`insert into pessoas (nome,cpf,email,password) values(?,?,?,?)`, [nome, cpf, email, hashedPassword]);
        res.status(201).json({ status: `usuario criado!!` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: `Nao cadastrado` })
    }
}
module.exports = { create }

