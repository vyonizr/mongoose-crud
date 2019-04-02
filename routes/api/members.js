const router = require("express").Router()
const MemberController = require("../../controllers/memberController")

router.get("/", MemberController.getAllMembers)
router.post("/", MemberController.createAMember)
router.delete("/", MemberController.deleteAMember)
router.put("/", MemberController.updatePutAMember)
router.patch("/", MemberController.updatePatchAMember)

module.exports = router