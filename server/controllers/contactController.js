const contactModel = require("../models/contactModel");
const transporter = require("../utils/email");

exports.submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    // Save message to DB
    await contactModel.create({ 
        name,
        email,
        message
     });

    // Send email notification TO YOU
    await transporter.sendMail({
      from: `"THE RAS Portfolio Contact Form" <${process.env.APPEMAIL}>`,
      to: process.env.APPEMAIL,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact via Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Auto reply to user
    await transporter.sendMail({
      from: `"THE RAS" <${process.env.APPEMAIL}>`,
      to: email,
      subject: "Message Received ✔",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me! I received your message and will get back to you shortly.</p>
        <br/>
        <p>Best Regards,<br>THE RAS</p>
      `
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
