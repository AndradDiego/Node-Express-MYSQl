const database = require("../database")

const verifyemail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const result = await database.query(`SELECT * FROM pessoas WHERE email ='${email}'`)
        console.log(result[0])
        if (result[0]) {
            res.status(409).json({ status: `email ja cadastrado` })
        } else {
            next();
        }

    } catch (error) {

        res.status(500).json({ status: `error` })
    }
}

module.exports = { verifyemail }
