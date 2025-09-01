import express from "express"
import projectCreate from "./projectCreate.js"
import projectGetAll from "./projectGetAll.js"
import projectGetOne from "./projectGetOne.js"

import projectSearch from "./projectSearch.js"

const projectRouter = express.Router()

// Create project API
projectRouter.post("/", projectCreate)
// Read all projects
projectRouter.get("/", projectGetAll)
// Read one project
projectRouter.get("/:projectId", projectGetOne)
// Read all projects that match search
// projectRouter.get("/search/:tech", projectSearch)


export default projectRouter