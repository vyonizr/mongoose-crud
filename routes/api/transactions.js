const router = require("express").Router()
const TransactionController = require("../../controllers/transactionController")

router.get("/", TransactionController.getAllTransactions)
router.post("/", TransactionController.createATransaction)
router.delete("/", TransactionController.deleteATransaction)
router.put("/", TransactionController.updatePutATransaction)
router.patch("/", TransactionController.updatePatchATransaction)

module.exports = router