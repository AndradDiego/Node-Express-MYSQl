const database = require("../database")
const deletes = (req, res) => {
    const { email } = req.params
    const usuario = database.find(element => {
        return element.email == email
    })
    if (usuario == -1) {
        res.status(400).json({ status: `Usuario nao encontrado` })
    }
    const posicao = database.indexOf(usuario)
    database.splice(posicao, 1)
    res.status(200).json({ status: `Usuario Deletado` })
}
module.exports = { deletes }