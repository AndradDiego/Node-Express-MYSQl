const database = require("../database")

const deletes = async (req, res) => {
    const { email } = req.params
    try {
        await database.query(`DELETE FROM pessoas WHERE email = '${email}'`)
        res.status(200).json({ status: `Usuario Deletado` })
    } catch (error) {
        res.status(500).json({ status: `error` })

    }

}
module.exports = { deletes }