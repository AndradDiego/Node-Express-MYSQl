const { Router } = require("express");
const route = Router();
const { create } = require("../controller/create")
const { deletes } = require("../controller/deletes")
const { detail } = require("../controller/detail")
const { list } = require("../controller/list")
const { update } = require("../controller/update")


route.post("/create", create);
route.delete("/delete/:email", deletes);
route.patch("/update/:email", update);
route.get("/read/:email", detail);
route.get("/list", list)
module.exports = { route };