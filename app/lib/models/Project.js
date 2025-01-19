import mongoose from "mongoose";
const { model, Schema } = mongoose;

const projectsSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    scope: {
      type: String,
      require: true,
    },
    objective: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// Use a singleton pattern to avoid overwriting the model
export const Project =
  mongoose.models.Project || model("Project", projectsSchema);
