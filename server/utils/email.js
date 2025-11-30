const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth :{
        user:process.env.APPEMAIL,
        pass:process.env.APPPASS
    }

})

module.exports = transporter;