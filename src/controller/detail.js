const database = require("../database")
const detail = (req, res) => {
    const { email } = req.params;
    database.forEach((item) => {
        if (item.email == email) {
            res.status(200).json({ status: `usuario encontrado`, data: item })
        }
    })
    res.status(400).json({ status: `email nao encontrado` })
}
module.exports = { detail }