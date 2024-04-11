const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const list = async (req, res) => {
    const allusers = await prisma.pessoas.findMany();
    res.status(200).json(allusers)
}
module.exports = { list }