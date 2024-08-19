import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, MANAGER_EMAIL, APP_URL } = process.env;

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASSWORD,
  },
});

export const sendContactEmail = async (customer, res) => {
  const recEmail = MANAGER_EMAIL;
  const mailOptions = {
    from: AUTH_EMAIL,
    to: recEmail,
    subject: "AdventureTourTrip: New Customer Alert",

    html: `<pre>Congratulations! You received a message from Customer. Don't keep them waiting... 
        The details are as follows:</pre>
        <br>
                <h1>Customer Info:</h1>
                <h2>Name: ${customer.name}</h2>
                <h3>Phone: ${customer.phone}</h3>
                <h3>Email: ${customer.email}</h3>
                <p>Message: "${customer.message}"</p>`,
  };

  try {
    await transporter.sendMail(mailOptions).then(() => {
      res.status(201).send({
        success: "true",
        message: "Email has been sent",
      });
    });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ message: "Email could not be sent. Somthing went wrong" });
  }
};
