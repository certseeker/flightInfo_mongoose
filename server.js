require('dotenv').config();
const express = require("express");
const app = express();
//Process jsx
app.set('view engine', "jsx");
app.engine('jsx' , require('express-react-views').createEngine());
const methodOverride = require('method-override');

const mongoose = require('mongoose');

//?what does this do?
const MONGO_URI = process.env.MONGO_URI;

//app can convert input into json
app.use(express.urlencoded({extended:false}));

//?what is this for?
app.use(methodOverride('_method'));


//connect Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


// INDUCES

app.get("/" , (req , res) => {
  res.send("<h1>Flight Information</h1>")
})

//*Index
app.get('/flightinfo' , (req, res) => {
  Flight.find({})
  .then((allFlights) => {
    res.render('Index', {
      flight: allFlights
    })
  })
  .catch(error => {
    console.error(error)
  })
})

//New
app.get('/flights/new', ( req, res ) => {
  res.render('New');
});

//Delete

//Update

//Create

//Edit

//Show
app.get('flight/show/id' , (req,res) => {
  Flight.findOne({ _id: req.params.id })
  .then((foundFlight) => {
    res.render('Show' , {
      flight: foundFlight
    })
  })
  .catch(error => {
    console.error(error)
  })
})

app.listen(3000, () => {
  console.log("Listening on Port 3000")
})