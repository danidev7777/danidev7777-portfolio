import projectModel from "./projectModel.js";

const projectSearch = async (req, res) => {
  const { tech } = req.params;
  console.log("tech", tech)
     
   
    const projects = await projectModel.find({ "technologies": tech });
    res.status(200).json({ success: true, projects: projects });

};

export default projectSearch;