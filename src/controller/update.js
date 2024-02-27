const database = require("../database")
const update = (req, res) => {
    const { email } = req.params
    const usuario = database.find(element => element.email == email)
    const posicao = database.indexOf(usuario)
    const att = req.body
    database[posicao] = { ...usuario, ...att }
    res.status(200).json({ status: `Usuario Atualizado!!!` })
}
module.exports = { update }
