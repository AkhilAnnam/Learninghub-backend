const express = require('express');
const app = express();

const mongodb = require('mongodb');
let mongoClient = mongodb.MongoClient;

let login= express.Router().get('/:age/:salary',(req,res)=>{
    mongoClient.connect('mongodb://localhost:27017/employee',(err,db)=>{
        if (err) {
            throw err;
        }else{
            db.collection('employee  ').findOne({'age':req.params.age,'salary':req.params.salary}),((err,result)=>{
                if(err){
                    throw err;
                }else{
                    res.send(result);
                }
            })
            // res.send('mongodb connection Successful.....')
        }
    })

})
module.exports=login;