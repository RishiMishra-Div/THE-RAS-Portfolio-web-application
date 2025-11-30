const express = require('express');
const app = express();
port = 3000;

const path = require('path');

// call db
const db = require('./config/mongodbConnection');


// serve static file middelewares
app.use(express.static(path.join(__dirname , '../client')))

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/client/projects' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/projects.html'))
})


app.get('/client/login' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/login.html'))
})


app.get('/client/admin' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/admin.html'))
})



app.listen(port, (re,res)=>{
    console.log(`server running on ${port}`);
});