const { Member } = require("../models")

class MemberController {
  static getAllMembers(req, res) {
    Member.find({})
    .then(members => {
      res.status(200).json(members)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createAMember(req, res) {
    let newMember = {
      name: req.body.name,
      address: req.body.address,
      zipcode: req.body.zipcode,
      email: req.body.email,
      phone: req.body.phone
    }
    Member.create(newMember)
    .then(createdMember => {
      res.status(201).json(createdMember)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteAMember(req, res) {
    Member.deleteOne({
      _id: req.body._id
    })
    .then(() => {
      res.status(200).json({
        message: `Successfully deleted a member with id ${req.body._id} from database`
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePutAMember(req, res) {
    Member.findOneAndUpdate({
      _id: req.body._id
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedMember => {
      res.status(200).json({
        message: `Successfully updated a member with id ${req.body._id} from database`,
        updatedMember
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePatchAMember(req, res) {
    Member.findOneAndUpdate({
      _id: req.body._id
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedMember => {
      res.status(200).json({
        message: `Successfully updated a member with id ${req.body._id} from database`,
        updatedMember
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = MemberController