const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extend: true}))
app.use(express.json())

app.get('/', (req, res ) => {
    res.json({
    message : " I am route"})
}
)

// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 4545
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
