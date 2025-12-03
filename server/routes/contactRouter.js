const express = require("express");
const router = express.Router();
const { submitMessage } = require("../controllers/contactController");
const contact = require("../models/contactModel");

// SUBMIT contact message

router.post("/", submitMessage);

// GET all contact messages
router.get("/", async (req, res) => {
   try {
           const message = await contact.find().sort({ createdAt: -1 });
           res.json(message);
       } catch (err) {
           res.status(500).json({ error: err.message });
       }
});


module.exports = router;
