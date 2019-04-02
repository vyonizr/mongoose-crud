const express = require("express")
const mongoose = require("mongoose")
const app = express()
const route = require("./routes")
const port = 4000

mongoose.connect('mongodb://localhost:27017/mongoose-crud', { useNewUrlParser: true });
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", route)

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
})