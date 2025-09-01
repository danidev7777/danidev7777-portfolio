
import blogModel from "./blogModel.js"

const blogDelete = async (req, res) => {

  // Get id value from params
  let { id } = req.params

  try {
    // Delete a record
    await blogModel.findByIdAndDelete({ _id:id })
    // API response
    res.status(200).json({ "message": "Success. Record Deleted." })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }

}


export default blogDelete