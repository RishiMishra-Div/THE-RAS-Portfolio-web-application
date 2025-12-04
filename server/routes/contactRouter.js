const express = require("express");
const router = express.Router();
const { submitMessage } = require("../controllers/contactController");
const contact = require("../models/contactModel");
const { isAdmin } = require("../middlewares/isAdmin");

// SUBMIT contact message

router.post("/", submitMessage);

// GET all contact messages
router.get("/", isAdmin , async (req, res) => {
   try {
           const message = await contact.find().sort({ createdAt: -1 });
           res.json(message);
       } catch (err) {
           res.status(500).json({ error: err.message });
       }
});

// delete a contact message
router.delete("/:id", isAdmin , async (req, res) => {
    try {
        const deletedMessage = await contact.findByIdAndDelete(req.params.id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json({ message: "Message deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
