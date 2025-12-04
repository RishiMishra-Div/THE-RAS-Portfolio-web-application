const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

module.exports.adminLogin = async (req,res)=>{
    try {
        let {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }
        const admin = await adminModel.findOne({email});
        if(!admin){
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        };

        const isMatch = await bcrypt.compare(password, admin.password )

        if(!isMatch){
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }

        const token = jwt.sign({id: admin._id , email : admin.email}, process.env.JWT_SECRET, {expiresIn : "7d"})
        res.cookie('token', token , {
            httpOnly: true,
            secure: true, // required for SameSite=None in browsers
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

      
        return res.status(200).json({success : true , message:"admin loggedIn successfully"});
        

    } catch (error) {
        return res.status(500).json({success : false , message:error.message});
    }
}

// Admin Logout
module.exports.adminLogout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true, // required for SameSite=None in browsers
            sameSite: "none"
        });
        return res.status(200).json({ success: true, message: 'Admin logged out successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

