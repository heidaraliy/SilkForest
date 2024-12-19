import Mailgun from "mailgun.js";
import FormData from "form-data";

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY!,
  url: "https://api.mailgun.net",
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const data = {
    from: "verification@silkforest.xyz",
    to: email,
    subject: "SilkForest Verification Code",
    text: `Your verification code is: ${token}`,
    html: `<strong>Your verification code is: ${token}</strong>`,
  };

  try {
    mg.messages.create(process.env.MAILGUN_DOMAIN!, data);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};
