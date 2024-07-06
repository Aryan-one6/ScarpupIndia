const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    console.log(process.env.HOST);
    console.log(process.env.USERNAME);
    console.log(process.env.PASS);
    console.log(process.env.HOST);
    console.log(process.env.EMAIL_PORT);
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.USERNAME,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USERNAME,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent successfully");
  } catch (error) {
    console.log("email not sent!");
    console.log(error);
    return error;
  }
};
