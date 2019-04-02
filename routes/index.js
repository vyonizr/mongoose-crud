const router = require("express").Router()
const APIRoute = require("./api")

router.use("/api", APIRoute)

module.exports = router