const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const modelo = require('./City.js');
const modelo2 = require('./Itinerary.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const url = "mongodb+srv://marianodemolli:mariano123@cluster0-dxbxd.mongodb.net/MYTINERARY-PROYECT?retryWrites=true&w=majority"

mongoose.connect(url,{useUnifiedTopology: true})
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
app.get('/' , (req,res) => res.send("Hello World"));

app.get('/test',(req,res) => {
    res.send("Test Path");
});

app.get('/cities', cors(), async (req, res) => {

  if (res.status(200)){
      modelo.find({}).then (data => {
          console.log("datos por consola: " + data);
          res.json(data);
}).catch( err => {console.log("err: " + err);});
}
});
app.post('/', (req, res) => {
  const newCity = new cityModel({
      name: req.body.name,
      country: req.body.country
  })
  newCity.save()
    .then(city => {
    res.send(city)
    })
    .catch(err => {
    res.status(500).send("Server error")}) 
});
app.get('/itineraries/:city', function (req, res) {
  res.send('Solicitaste ver un itinerario de la ciudad ' +req.params.city);
});

app.listen(port, () => console.log("Server running on port "+port));

