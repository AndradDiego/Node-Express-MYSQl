const { Router } = require("express");
const route = Router();
const { create } = require("../controller/create")
const { deletes } = require("../controller/deletes")
const { detail } = require("../controller/detail")
const { list } = require("../controller/list")
const { update } = require("../controller/update")
const { verifyemail } = require("../middleware/verifyemail")
const { verifyCadastro } = require("../middleware/verifyCadastro")
const { login } = require("../controller/login")


route.post("/login", login)
route.post("/create", verifyemail, create);
route.delete("/delete/:email", verifyCadastro, deletes);
route.patch("/update/:email", verifyCadastro, update);
<<<<<<< HEAD
route.post("/detail", detail);
route.get("/list", list)
=======
route.get("/detail/:email", detail);
route.get("/list", list);


>>>>>>> f541b338d64edf2981309a810b4523b35d3597a3
module.exports = { route };