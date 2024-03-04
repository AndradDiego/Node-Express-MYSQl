
const database = require("../database")
const Verify = require("../middleware/verify")

const detail = (req, res) => {
    res.status(200).json({ status: `usuario encontrado`, usuario: database[res.locals.data.posicao] })
}

module.exports = { detail }