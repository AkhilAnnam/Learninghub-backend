const express = require('express');
const app = express();

const mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient;
app.use(express.json());
let update = express.Router().put('/:name  ', (req, res) => {



    mongoClient.connect('mongodb://localhost:27017/login', (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection('freecards').updateOne({ 'name': req.params.name }, { $set: { 'video': req.body.video } }, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.send("data updated succcessfully");
                }
            })

        }
    });

})
module.exports = update;

// synchronous and asynchronous
// Promises
// app.get and app.use difference
// how to fs
// http methods
// what is npm how it is used in node.js
// purpose of require in node.js
// explain the eventdriven arcitecuture in node.js 
