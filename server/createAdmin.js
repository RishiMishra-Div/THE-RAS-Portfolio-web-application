const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const Admin = require("./models/adminModel");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const passwordHash = await bcrypt.hash("theras96@#", 10);
  await Admin.create({ email: "admin@gmail.com", password: passwordHash });
  console.log("Admin created!");
  process.exit();
});

module.exports = mongoose.Connection;