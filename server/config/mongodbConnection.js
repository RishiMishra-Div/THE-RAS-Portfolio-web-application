const mongoose = require('mongoose');
require('dotenv').config();

mongodbUri = process.env.MONGO_URI


connectToDb = async ()=>{
        try {
            await mongoose.connect(mongodbUri);
            console.log("🔥 MongoDB connected successfully!");
        } catch (error) {
            console.log(error.message)
        }
}

connectToDb();

module.exports = connectToDb;