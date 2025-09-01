import express from "express"
import contactCreate from "./contactCreate.js"



const contactRouter = express.Router()

// Create contact API
contactRouter.post("/", contactCreate)




export default contactRouter