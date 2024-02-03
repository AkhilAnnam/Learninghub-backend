const express = require('express');
const app = express();

const mongodb = require('mongodb');
let mongoClient = mongodb.MongoClient;

let fetch = express.Router().get('/',(req,res)=>{
    mongoClient.connect('mongodb://localhost:27017/Allcourses',(err,db)=>{
        if (err) {
            throw err;
        }else{
            db.collection('music').find({}).toArray((err,array)=>{
                if(err){
                    throw err;
                }else{
                    res.send(array);
                }
            })
            // res.send('mongodb connection Successful.....')
        }
    });

})
module.exports=fetch;