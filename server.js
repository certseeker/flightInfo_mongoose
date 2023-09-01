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

//after require is the path
const Flight = require('./models/Flight')


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

//New , a form, that makes a post request and put it into an index
app.get('/flights/new', ( req, res ) => {
  res.render('New');
});

//Delete

//Update

//Create aka POST
//this connects to post bc this is the only post AND it has the same route as what is on the new 
app.post('/flightinfo' , (req, res) => {
  //req.body is just requesting all the requested values of the form that we are referring to. and then adding FlightNo, refers just that one item named on that form. 
  console.log(req.body)
  //random number: if this info named flightNo on the new.jsx. if flightNo is true (if it exists) and its requested, the
  if(req.body.flightNo){
    const randomFlightNo = Math.floor(Math.random() * 10000);
    res.body.flightNo = randomFlightNo 
  }
      //the create is what adds the gathered info into the index or database
  Flight.create(req.body)
    .then(() => {
    //after adding information, "redirecting" what the users sees to another page
      res.redirect('/flightinfo')
    })
    .catch(error => {
      console.error(error)
    })
  });


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