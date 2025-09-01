import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  fullName: String,
  email: String,
  budget: String,
  message: String,
});

export default contactSchema;
