const express = require('express');
const app = express();

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let login1 = express.Router().post('/', (req, res) => {
  const { email, password } = req.body; // Extract email and password from the request body
    console.log(req.body)
  mongoClient.connect('mongodb://localhost:27017/admin', (err, db) => {
    if (err) {
      throw err;
    } else {
      // Find the user by email
      db.collection('register').findOne({ "email": email }, (err, user) => {
        if (err) {
          throw err;
        } else {
          if (user) {
            // User exists, check if password matches
            if (user.password === password) {
              // Password matches, send the user details
              res.send(user);
            } else {
              // Password doesn't match, send password incorrect message
              res.status(400).send("Password incorrect");
            }
          } else {
            // User doesn't exist, send user not found message
            res.status(400).send("User not found. Please register.");
          }
        }
      });
    }
  });

});

module.exports =login1;