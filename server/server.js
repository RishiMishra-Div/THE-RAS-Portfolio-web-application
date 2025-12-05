const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');

// app setup
const app = express();



// require routes
const adminRouter = require('./routes/adminRouter');
const contactRouter = require('./routes/contactRouter')
const projectRouter = require("./routes/projectRouter");



//  middelewares
app.use(cookieParser());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  (process.env.CLIENT_URL || "").replace(/\/+$/, "")
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (mobile apps, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));



// Serve static frontend assets
// Serve CSS folder
app.use("/css", express.static(path.join(__dirname, "../client/css")));
// Serve JS folder
app.use("/js", express.static(path.join(__dirname, "../client/js")));


console.log("__dirname:", __dirname);
console.log("Resolved CSS path:", path.join(__dirname, "../client/css"));
console.log("Resolved JS path:", path.join(__dirname, "../client/js"));

// call db
const db = require('./config/mongodbConnection');



// use routes
app.use('/api/admin' , adminRouter);
app.use('/api/contact' , contactRouter);
app.use('/api/projects', projectRouter);


app.get('/', (req, res) => {
  res.send('server is running');
});


// get admin page
app.get("/getadmin", isAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, "./protected_views/admin.html"));
});

// app listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
