const mongoose = require("mongoose")
const { Schema } = mongoose

const bookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
    validate: [{
      validator: function(isbn) {
        return Book.findOne({
          isbn
        })
        .then(foundUser => {
          if (foundUser) {
            return false
          }
        })
      },
      message: "ISBN is already registered to another book"
    }]
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book