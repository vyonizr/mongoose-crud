const { Book } = require("../models")

class BookController {
  static getAllBooks(req, res) {
    let objSearch = {}
    if (req.query.author && req.query.title) {
      objSearch.author = {
        $regex: req.query.author, $options: "i"
      }
      objSearch.title = {
        $regex: req.query.title, $options: "i"
      }
    }
    else if (req.query.author) {
      objSearch.author = {
        $regex: req.query.author, $options: "i"
      }
    }
    else if (req.query.title) {
      objSearch.title = {
        $regex: req.query.title, $options: "i"
      }
    }

    Book.find(objSearch)
    .then(books => {
      res.status(200).json(books)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static createABook(req, res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book.create(newBook)
    .then(createdBook => {
      res.status(201).json(createdBook)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static deleteABook(req, res) {
    Book.deleteOne({
      isbn: req.body.isbn
    })
    .then(() => {
      res.status(200).json({
        message: `Successfully deleted book with ISBN ${req.body.isbn} from database`
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePutABook(req, res) {
    Book.findOneAndUpdate({
      isbn: req.body.isbn
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedBook => {
      res.status(200).json({
        message: `Successfully updated book with ISBN ${req.body.isbn} from database`,
        updatedBook
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static updatePatchABook(req, res) {
    Book.findOneAndUpdate({
      isbn: req.body.isbn
    }, {
      [req.body.field]: req.body.value
    })
    .then(updatedBook => {
      res.status(200).json({
        message: `Successfully updated book with ISBN ${req.body.isbn} from database`,
        updatedBook
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = BookController