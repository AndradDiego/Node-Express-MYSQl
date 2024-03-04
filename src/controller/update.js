const database = require("../database")
const update = (req, res) => {
    const att = req.body
    database[res.locals.data.posicao] = { ...database[res.locals.data.posicao], ...att }
    res.status(200).json({ status: `Usuario Atualizado!!!` })
}
module.exports = { update }
