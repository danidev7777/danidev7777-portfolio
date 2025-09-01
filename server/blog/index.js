import express from "express"
import blogCreate from "./blogCreate.js"
import blogGetAll from "./blogGetAll.js"
import blogGetOne from "./blogGetOne.js"
// import blogUpdate from"./blogUpdate.js"
// import blogDelete from "./blogDelete.js"

const blogRouter = express.Router()

// Create blog API
blogRouter.post("/", blogCreate)
// Read all blogs
blogRouter.get("/", blogGetAll)
// get One blog details 
blogRouter.get("/:id", blogGetOne)
// update one blog
// blogRouter.put("/:id", blogUpdate)

// blogRouter.delete("/:id", blogDelete)






export default blogRouter
