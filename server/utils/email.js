const nodemailer = require("nodemailer");

const sendEmail = ({ to, subject, message }) =>
  new Promise(async (resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // TLS
        auth: {
          user: process.env.FROM_EMAIL,
          pass: process.env.EMAIL_PASS, // APP PASSWORD
        },
      });

      await transporter.verify(); // 🔥 auth test

      await transporter.sendMail({
        from: `"Support Team" <${process.env.FROM_EMAIL}>`,
        to,
        subject,
        html: message,
      });

      resolve(true);
    } catch (error) {
      console.error("Email Error:", error);
      reject(false);
    }
  });

module.exports = sendEmail;
