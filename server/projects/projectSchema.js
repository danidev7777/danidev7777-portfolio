import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: String,
  description: String,
  technologies: [],
  homeImg:String,
  projectLink: String,
  details: {
    detailImgs:[],
    overview: String,
    video:String,
    projectGoals: String,
    techStack: String,
    completed: String,
    features: [
      {
        feat: {
          featName: String,
          featDetails:String
        },
      }
      
    ],
    challenges: String,
    takeaways: String
  },
});

export default projectSchema;
