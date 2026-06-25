const nodemailer = require("nodemailer");
const dns = require("dns");
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   connectionTimeout: 10000,
// });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  family: 4, // force IPv4
});

const sendEmail = async (email, otp) => {
  try {
    console.log("Verifying SMTP...");

    await transporter.verify();

    console.log("SMTP ready");
    console.log("Sending email...");

    const result = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      html: `
        <h2>Your OTP Code</h2>
        <h1>${otp}</h1>
        <p>OTP valid for 5 minutes.</p>
      `,
    });

    console.log("Email sent:", result.messageId);
  } catch (error) {
    console.error("Nodemailer error:", error);
    throw error;
  }
};

module.exports = sendEmail;
