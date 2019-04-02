const mongoose = require("mongoose")
const { Schema } = mongoose

const memberSchema = new Schema({
  name: String,
  address: String,
  zipcode: String,
  email: {
    type: String,
    validate: [{
      validator: function(email) {
        return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
      },
      message: "Email is not in a valid format"
    }, {
      validator: function(email) {
        return Member.findOne({
          id: {
            $ne: this.id
          },
          email
        })
        .then(foundUser => {
          if (foundUser) {
            return false
          }
        })
      },
      message: "Email is already exist"
    }]
  },
  phone: {
    type: String,
    validate: {
      validator: function(phone) {
        if (phone.length < 11 ||phone.length >13) {
          return false
        }
      },
      message: "Phone number must contain 11-13 characters"
    }
  }
})

const Member = mongoose.model("Member", memberSchema)

module.exports = Member