import projectModel from "./projectModel.js";

const projectGetAll = async (req, res) => {
  const project = await projectModel.find();
  console.log("project", project);
  res.status(200).json(project);
};

export default projectGetAll;
