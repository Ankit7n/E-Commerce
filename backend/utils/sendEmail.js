// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// // run once
// transporter
//   .verify()
//   .then(() => console.log("SMTP ready"))
//   .catch((err) => console.log("SMTP error:", err));

// const sendEmail = async (email, otp) => {
//   try {
//     console.log("Sending email...");

//     const result = await transporter.sendMail({
//       from: `"Ecommerce App" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: "OTP Verification",
//       html: `
//         <h2>Your OTP Code</h2>
//         <h1>${otp}</h1>
//         <p>OTP valid for 5 minutes.</p>
//       `,
//     });

//     console.log("Email sent:", result.messageId);
//   } catch (error) {
//     console.error("Nodemailer error:", error);
//     throw error;
//   }
// };

// module.exports = sendEmail;

const SibApiV3Sdk = require("sib-api-v3-sdk");

const sendEmail = async (email, otp) => {
  try {
    console.log("Sending email via Brevo API...");

    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = {
      to: [{ email }],
      sender: { email: "yourverifiedemail@gmail.com", name: "Your App" },
      subject: "Your OTP Code",
      htmlContent: `<h2>Your OTP is ${otp}</h2>`,
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent:", result);
  } catch (error) {
    console.log("Email error:", error);
  }
};
module.exports = sendEmail;
