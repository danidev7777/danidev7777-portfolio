import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  subTitle:String,
  author: String,
  body: String,
  image: String,
  date: String,
 
});

export default blogSchema;
