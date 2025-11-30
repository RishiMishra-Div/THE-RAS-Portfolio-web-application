const jwt = require('jsonwebtoken');

module.exports.isAdmin = async (req , res , next)=>{
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({ success: false, message: 'authorization denied' });
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        if(!decoded || !decoded.id || !decoded.email){
           return res.status(401).json({ success: false, message: 'authorization denied' });
        }
        req.admin = {
            id : decoded.id,
            email : decoded.email
        }
            
    } catch (error) {
        return res.status(401).json({ success: false, message: 'authorization denied' });
    }
}