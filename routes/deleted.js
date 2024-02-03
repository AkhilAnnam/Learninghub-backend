const express = require('express');
const app = express();

const mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient;
app.use(express.json());
let deleted = express.Router().delete('/:age', (req, res) => {
    

    mongoClient.connect('mongodb://localhost:27017/student', (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection('student').deleteOne({'age':req.body.age}, (err, result) => {
                if (err) {
                    throw err;
                } else {
                    res.send( result +"data deleted succcessfully");
                }
            })
        
        }
    });
    
})
module.exports = deleted;