const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

const app = express()
const port = 4545

app.use(morgan('dev'))
app.use(express.urlencoded({extend: true}))
app.use(express.json())

app.get('/', (req, res ) => {
    res.json({
    message : " I am route"})
}
)

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{
    app.listen(4545)
  })
  .catch(e => {
    console.log(e)
  })


// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${port}`);
// });
