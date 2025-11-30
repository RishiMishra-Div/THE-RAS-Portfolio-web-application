const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');

// app setup
const app = express();
port = 3000;


//  middelewares
app.use(express.static(path.join(__dirname , '../client')));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // or your frontend URL
  credentials: true
}));


// call db
const db = require('./config/mongodbConnection');



// require routes
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter')



// use routes
app.use('/api/admin' , adminRouter);
app.use('/api/contact' , contactRouter);



// serve static files

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/client/projects' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/projects.html'))
})

app.get('/client/login' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/login.html'))
})




// app listener
app.listen(port, (re,res)=>{
    console.log(`server running on ${port}`);
});