import projectModel from "./projectModel.js";

const projectCreate = async (req, res) => {
  const {
    //  add fields
    projectName,
    description,
    technologies,
    details,
    homeImg,
    projectLink,
  } = req.body;
  // Validation goes here
  const project = await projectModel.create({
    // add fields
    projectName,
    description,
    technologies,
    details,
    homeImg,
    projectLink,
  });
  console.log("project", project);
  res.status(200).json({ success: true, project: project });
};

export default projectCreate;
