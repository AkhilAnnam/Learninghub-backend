const express = require('express');
const app = express();

let home = app.get('/',(req,res)=>{
    res.send("Welcome To Express - Home Page")
});

module.exports = home;