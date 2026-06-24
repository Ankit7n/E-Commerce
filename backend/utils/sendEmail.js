const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "OTP Verification",
    html: `
      <h2>Your OTP Code</h2>
      <h1>${otp}</h1>
      <p>OTP valid htmlFor 5 minutes.</p>
    `,
  });
};

module.exports = sendEmail;
