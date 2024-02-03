const express = require('express');
const app = express();

const mongodb = require('mongodb');

let mongoClient = mongodb.MongoClient;
app.use(express.json());
let register = express.Router().post('/', (req, res) => {
    let emp = {

        "Id": req.body.Id,
        "name": req.body.name,
        "video": req.body.video,
        "title": req.body.title,
        "price": req.body.price,
        "Rating":req.body.Rating
        // "mail": empMail.body.value,
        // "password": empPassword.body.value
    } 
    

    mongoClient.connect('mongodb://localhost:27017/Allcourses', (err, db) => {
        if (err) {
            throw err;
        } else {
            db.collection('marketing1').insertOne(emp, (err, result) => {
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