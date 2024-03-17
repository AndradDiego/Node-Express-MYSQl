const { mysqlconection } = require("../database")
const update = async (req, res) => {
    const { email } = req.params
    const keysName = Object.keys(req.body)
    const upd = req.body
    function setDynamicParams() {
        let aux = ''
        for (let element = 0; element < keysName.length; element++) {
            let tempString = `${keysName[element]}='${upd[keysName[element]]}'${element != keysName.length - 1 ? `,` : ``}`
            aux += tempString
        }
        return aux
    }

    try {
        await mysqlconection.execute(`UPDATE pessoas SET ${setDynamicParams()} WHERE email = '${email}'`)
        res.status(200).json({ status: `Usuario Atualizado` })

    } catch (error) {

        res.status(500).json({ status: `error` })
    }
}
module.exports = { update }
