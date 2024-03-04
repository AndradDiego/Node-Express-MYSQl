const database = require("../database")

const deletes = (req, res) => {
    database.splice(res.locals.data.posicao, 1)
    res.status(200).json({ status: `Usuario Deletado` })
}
module.exports = { deletes }