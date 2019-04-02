const router = require("express").Router()
const booksRoute = require("./books")
const membersRoute = require("./members")
const transactionsRoute = require("./transactions")

router.use("/books", booksRoute)
router.use("/members", membersRoute)
router.use("/transactions", transactionsRoute)

module.exports = router