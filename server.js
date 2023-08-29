const express = require("express");
const app = express();
//!this allows express/node to read the jsx files, if you don't this and have jsx, it will cause and error and not render page
app.set('view engine', "jsx");

//!DO NOT FORGET to put the () after createEngine !!!
app.engine('jsx' , require('express-react-views').createEngine());


//connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


// INDECES

app.get("/" , (req , res) => {
  res.send("<h1>Flight Information</h1>")
})



app.listen(3000, () => {
  console.log("Listening on Port 3000")
})