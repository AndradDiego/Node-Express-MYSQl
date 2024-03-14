const database = require("../database")

const verifyCadastro = async (req, res, next) => {
    const { email } = req.params
    try {
        const result = await database.query(`SELECT * FROM pessoas WHERE email ='${email}'`)
        if (result) {
            return next();
        }
        res.status(401).json({ status: `Usuario nao encontrado!` })
    } catch (error) {
        res.status(500).json({ status: `error` })
    }
}
module.exports = { verifyCadastro }