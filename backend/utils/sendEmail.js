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
      sender: { email: "ankitrawat7n@gmail.com", name: "OTP System" },
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
