const { Router } = require("express");
const route = Router();
const { create } = require("../controller/create")
const { deletes } = require("../controller/deletes")
const { detail } = require("../controller/detail")
const { list } = require("../controller/list")
const { update } = require("../controller/update")
const { verifyemail } = require("../middleware/verifyemail")
const { verifyCadastro } = require("../middleware/verifyCadastro")

route.post("/create", verifyemail, create);
route.delete("/delete/:email", verifyCadastro, deletes);
route.patch("/update/:email", verifyCadastro, update);
route.get("/read/:email", verifyCadastro, detail);
route.get("/list", list)
module.exports = { route };