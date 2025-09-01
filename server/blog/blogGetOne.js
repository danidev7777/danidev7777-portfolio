import blogModel from "./blogModel.js"

const blogGetOne = async (req, res) => {
  const { id } = req.params
  console.log("id", id)

  const blog = await blogModel.find({ _id: id })
  console.log("blogs", blog)
  res.status(200).json({ "message": "Success!", "blog": blog })
}

export default blogGetOne