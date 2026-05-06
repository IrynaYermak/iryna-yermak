import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    techStack: [String],
    description: { type: String, required: true },
    fullDescription: { type: String, required: true },
    features: { type: [String], required: true },
    challenges: { type: String, required: true },
    solutions: { type: String, required: true },
    imageUrl: String,
    githubUrl: String,
    liveUrl: String,
  },
  {
    timestamps: true,
  }
);

// const Project = models.Project || model("Project", ProjectSchema);

if (models.Project) {
  delete models.Project;
}
const Project = model("Project", ProjectSchema);
export default Project;
