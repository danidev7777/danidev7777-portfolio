import blogModel from "./blogModel.js"

const blogUpdate = async (req, res) => {
  let { id } = req.params
  let { title, subTitle, body } = req.body

  try {
    //Update to record
    const updateBlog = await blogModel.findByIdAndUpdate(id, { title, subTitle, body })
    console.log("updateBlog: ", updateBlog)
    const blog = { id: id, title:title, subTitle:subTitle, body: body }
    // API response
    res.status(200).json({ "status": "Success.", "blog": blog })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }

}

export default blogUpdate