import projectModel from "./projectModel.js";

const projectGetOne = async (req, res) => {
  const { projectId } = req.params;
  // const id = projectId
  // console.log("new id", id)
  console.log("server-side projectId: ", projectId);
  console.log("server-side projectId: ", typeof projectId);

  const project = await projectModel.findOne({ _id: projectId });
  console.log("server-side project", project);
  res.status(200).json(project);
};

export default projectGetOne;
