const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');

// app setup
const app = express();


//  middelewares
app.use(express.static(path.join(__dirname , '../client')));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_UR ||'http://localhost:3000', // or your frontend URL
  credentials: true
}));


// call db
const db = require('./config/mongodbConnection');



// require routes
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter')
const projectRouter = require("./routes/projectRouter");



// use routes
app.use('/api/admin' , adminRouter);
app.use('/api/contact' , contactRouter);
app.use('/api/projects', projectRouter);



// serve static files

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/client/projects' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/projects.html'))
})
app.get('/client/projectDetail' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/projectDetail.html'))
})


app.get('/client/login' , (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/login.html'))
})




// app listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
