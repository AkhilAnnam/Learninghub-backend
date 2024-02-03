const express = require('express');
const app = express();

const mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient;
app.use(express.json());
let register = express.Router().post('/', (req, res) => {
    let emp = {
        "name":req.body.name,
        "email": req.body.name,
        "message":req.body.message
        // "mail": empMail.body.value,
        // "password": empPassword.body.value
    } 
    

    mongoClient.connect('mongodb://localhost:27017/contactus', (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection('contact').insertOne(emp, (err, result) => {
                if (err) {
                    throw err;
                } else { 
                    res.send("data inserted succcessfully");
                }
            })
        
        }
    });

})
module.exports = register;