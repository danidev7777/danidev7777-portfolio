import blogModel from "./blogModel.js"

const blogGetAll = async (req, res) => {
  // Validation goes here
  const blogs = await blogModel.find()
  // console.log("blogs", blogs)
  res.status(200).json({ "message": "Success!", "blogs": blogs })
}

export default blogGetAll