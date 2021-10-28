import functions = require('firebase-functions');
import express = require('express');
import cors = require('cors');
import admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const app = express();
require('dotenv').config()

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const corsAllowed = process.env.CORS;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(cors())


app.get('/api', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.json({bongs: 'BONG '.repeat(hours)});
});

app.post('/contactForm', async (req, res, next) => {

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  
  try{
    await admin.firestore().collection('mail').add({to: 'antheismaxenn@outlook.com',template: {name: 'welcome_to_me',data: {email: email,from: name,message: message}}})
    .then(() => res.status(200).send())
  }catch{
    res.status(500).send({message: "There was an error on the server."});   
  }
  
  try{
    await admin.firestore().collection('mail').add({to: email,template: {name: 'welcome_to_them', data: {from: name}}})
    .then(() => res.status(200).send())
  }catch{
    res.status(500).send({message: "There was an error on the server."});   
  }

})

exports.app = functions.https.onRequest(app);

  
