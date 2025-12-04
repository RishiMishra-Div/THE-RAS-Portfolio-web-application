const express = require('express');
const router = express.Router();
const {adminLogin, adminLogout } = require('../controllers/authController');
const {isAdmin} = require('../middlewares/isAdmin')
const path = require('path');


// Admin login
router.post('/adminLogin', adminLogin);

// Admin logout
router.post('/adminLogout', adminLogout);

// Check if admin is logged in
router.get('/isAdmin', isAdmin , (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome admin: ${req.admin.email}`
  });
});

// get admin page
router.get("/getadmin", isAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, "protected_views", "admin.html"));
});

module.exports = router;