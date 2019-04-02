const { Transaction } = require("../models")

class TransactionController {
  static getAllTransactions(req, res) {
    let objSearch = {}
    Transaction.find(objSearch)
    .populate("member")
    .populate("booklist")
    .then(transactions => {
      res.status(200).json(transactions)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createATransaction(req, res) {
    let newTransaction = {
      member: req.body.member,
      in_date: req.body.in_date,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      booklist: req.body.booklist.split(",")
    }
    Transaction.create(newTransaction)
    .then(createdTransaction => {
      res.status(201).json(createdTransaction)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteATransaction(req, res) {
    Transaction.deleteOne({
      _id: req.body._id
    })
    .then(() => {
      res.status(200).json({
        message: `Successfully deleted transaction with id ${req.body._id} from database`
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePutATransaction(req, res) {
    console.log("wey");
    if (req.body.field === "booklist") {
      req.body.value = req.body.value.split(",")
    }
    console.log(req.body.value);
    Transaction.findOneAndUpdate({
      _id: req.body._id
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedTransaction => {
      res.status(200).json({
        message: `Successfully updated transaction with id ${req.body._id} from database`,
        updatedTransaction
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePatchATransaction(req, res) {
    if (req.body.field === "booklist") {
      req.body.value = req.body.value.split(",")
    }
    Transaction.findOneAndUpdate({
      _id: req.body._id
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedTransaction => {
      res.status(200).json({
        message: `Successfully updated transaction with id ${req.body._id} from database`,
        updatedTransaction
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = TransactionController