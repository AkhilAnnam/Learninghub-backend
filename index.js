const express = require('express');
const app = express();
let fs = require('fs');

let rawData = fs.readFileSync('./Data/emp.json','utf-8')
let data = JSON.parse(rawData);

app.get('/',(req,res)=>{
    res.send("welcome to ExpressJs")
})

app.get('/getAllEmployees',(req,res)=>{
     res.send(data.employees)
})

app.get('/getEmployee/:index',(req,res)=>{
    res.send(data.employees[req.params.index]) 
})

app.get("/getEmployeesId/:empId",(req,res)=>{
    console.log(typeof(req.params.empId));
    let employees = data.employees.find(emp => emp.empId === parseInt(req.params.empId));
    if (employees){
        res.send(employees)
    }else{
        res.send("no record found")
    }
})

app.get('/greetbyname/:name',(req,res)=>{
    res.send(`<h1>Good Morning --${req.params.name}.</h1>`)
})





app.listen(3000,()=>{
    console.log("server is Running")
})