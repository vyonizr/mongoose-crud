const mongoose = require("mongoose")
const { Schema } = mongoose

const transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: "Member"
  },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
  }]
})

transactionSchema.post("findOneAndUpdate", function(transaction) {
  const oneDay = 24*60*60*1000;
  const in_date = new Date(transaction.in_date);
  const due_date = new Date(transaction.due_date);

  const diffDays = Math.round(((in_date.getTime() - due_date.getTime())/(oneDay)));
  if (diffDays > 0) {
    transaction.fine = diffDays * 1000
  }
  else {
    transaction.fine = 0
  }
  transaction.save()
})

const Transaction = mongoose.model("Transaction", transactionSchema)

module.exports = Transaction