const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (email, otp) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "OTP Verification",
      html: `
        <h2>Your OTP Code</h2>
        <h1>${otp}</h1>
        <p>Valid for 5 minutes.</p>
      `,
    });

    console.log("Email sent:", data);
  } catch (error) {
    console.log("Email error:", error);
    throw error;
  }
};

module.exports = sendEmail;
