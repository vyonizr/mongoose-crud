const router = require("express").Router()
const BookController = require("../../controllers/bookController")

router.get("/", BookController.getAllBooks)
router.post("/", BookController.createABook)
router.delete("/", BookController.deleteABook)
router.put("/", BookController.updatePutABook)
router.patch("/", BookController.updatePatchABook)

module.exports = router