
const { mysqlconection } = require("../database")

const verifyemail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const query = await mysqlconection.execute(`SELECT * FROM pessoas WHERE email ='${email}'`)
        console.log(query[0])
        if (query[0] == []) {
            res.status(409).json({ status: `email ja cadastrado` })
        } else {
            next();
        }

    } catch (error) {

        res.status(500).json({ status: `error` })
    }
}

module.exports = { verifyemail }
