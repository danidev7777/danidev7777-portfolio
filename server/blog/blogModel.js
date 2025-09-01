import mongoose, { mongo } from 'mongoose';
import blogSchema from './blogSchema.js'

blogSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret._v
    ret.date = new Intl.DateTimeFormat('en-US').format(new Date())
   
  }
})

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel