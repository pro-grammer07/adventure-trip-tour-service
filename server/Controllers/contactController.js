import { sendContactEmail } from "../utils/index.js";
import Contact from "../Models/contactModel.js";

export const createContact = async (req, res, next) => {
  const { cname, phone, email, message } = req.body;

  if (!(cname && phone && email && message)) {
    next("Provide required fields");
    return;
  }

  try {
    const contact = await Contact.create({
      cname,
      phone,
      email,
      message,
    });
    // send message as email to us
    sendContactEmail(contact, res);
  } catch (error) {
    console.log("Error in contact controller:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    res.status(200).json({
      success: true,
      message: "successfully",
      data: contact,
    });
  } catch (error) {
    console.log(error);
    res.status.json({ message: error.message });
  }
};
