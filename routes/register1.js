const express = require('express');
const app = express();

const mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient;
app.use(express.json());
let register = express.Router().post('/', (req, res) => {
    let emp = {

        "Id": req.body.Id,
        "name": req.body.name,
        "age": req.body.age,
        "email": req.body.email,
        "password": req.body.password
    } 
    

    mongoClient.connect('mongodb://localhost:27017/admin', (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection('register').insertOne(emp, (err, result) => {
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