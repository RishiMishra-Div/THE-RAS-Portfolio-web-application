const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');

// app setup
const app = express();


//  middelewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL , // or your frontend URL
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


app.get('/', (req, res) => {
  res.send('server is running');
});

// app listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
