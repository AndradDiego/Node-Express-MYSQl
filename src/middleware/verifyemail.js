const database = require("../database")
const create = require("../controller/create")

const verifyemail = (req, res, next) => {
    const { email } = req.body;
    for (item of database) {
        if (item.email === email) {
            return res.status(409).json({ status: `Email ja cadastrado` })
        }
    }
    next();
}


module.exports = { verifyemail }
