const database = require("../database")
const deletes = require("../controller/deletes");
const data = require("../database");
const detail = require("../controller/detail")

const Verify = (req, res, next) => {

    const { email } = req.params;
    const item = database.findIndex((item) => item.email == email);
    if (item !== -1) {
        res.locals.data = { posicao: item }
        return next();
    }
    res.send(`usuario nao encontrado`)

}

module.exports = { Verify }