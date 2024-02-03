const express = require('express');
const app = express();

let contact = app.get('/',(req,res)=>{
    res.send("9640499931 ,  akhilpatelannam@gmail.com")
});

module.exports = contact;