const express = require('express');
const app = express();

const mongodb = require('mongodb');
let mongoClient = mongodb.MongoClient;

// Fetch items from the cart
let fetchCartItems = express.Router().get('/', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/CARTS', (err, client) => {
    if (err) {
      res.status(500).send('Error connecting to the database');
    } else {
      const db = client.db('CARTS'); // Replace 'yourDatabase' with your database name

      // Access the 'cart' collection
      const cartCollection = db.collection('cart');

      // Fetch all items from the 'cart' collection
      cartCollection.find({}).toArray((err, items) => {
        if (err) {
          res.status(500).send('Error fetching cart items');
        } else {
          res.status(200).send(items);
        }
      });
    }
  });
});

module.exports = fetchCartItems;