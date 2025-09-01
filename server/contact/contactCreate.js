import contactModel from "./contactModel.js";

const contactCreate = async (req, res) => {
  const {
    //  add fields
    fullName,
    email,
    budget,
    message
  } = req.body;
  // Validation goes here
  const contact = await contactModel.create({
    // add fields
    fullName,
    email,
    budget,
    message
  });
  console.log("contact", contact);
  res.status(200).json({ success: true, contact: contact });
};

export default contactCreate;
