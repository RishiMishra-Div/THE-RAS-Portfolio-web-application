const express = require('express');
const router = express.Router();
const path = require('path')
const {adminLogin} = require('../controllers/authController');
const {isAdmin} = require('../middlewares/isAdmin')

router.get('/' , isAdmin , (req,res)=>{
    res.sendFile(path.join(__dirname, '../../client/admin.html'))
})

router.post('/adminLogin', adminLogin);

router.get('/isAdmin', isAdmin, (req, res) => {
  res.json({
    success: true,
    message: `Welcome admin: ${req.admin.email}`
  });
});


module.exports = router;