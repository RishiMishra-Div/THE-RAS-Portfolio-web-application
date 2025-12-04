const express = require('express');
const router = express.Router();
const {adminLogin, adminLogout } = require('../controllers/authController');
const {isAdmin} = require('../middlewares/isAdmin')


// Admin login
router.post('/adminLogin', adminLogin);

// Admin logout
router.post('/adminLogout', adminLogout);

// Check if admin is logged in
router.get('/isAdmin', isAdmin , (req, res) => {
  res.json({
    success: true,
    message: `Welcome admin: ${req.admin.email}`
  });
});


module.exports = router;