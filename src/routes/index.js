const { Router } = require("express");
const route = Router();
const { create } = require("../controller/create")
const { deletes } = require("../controller/deletes")
const { detail } = require("../controller/detail")
const { list } = require("../controller/list")
const { update } = require("../controller/update")
const { verifyemail } = require("../middleware/verifyemail")
const { Verify } = require("../middleware/verify")


route.post("/create", verifyemail, create);
route.delete("/delete/:email", Verify, deletes);
route.patch("/update/:email", Verify, update);
route.get("/read/:email", Verify, detail);
route.get("/list", list)
module.exports = { route };