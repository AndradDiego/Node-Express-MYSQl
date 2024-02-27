const database = require("../database")
const list = (req, res) => {
    res.status(200).json({ status: `Usuarios encontrados`, data: database })
}
module.exports = { list }