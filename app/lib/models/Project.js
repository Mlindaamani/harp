import mongoose from "mongoose";
const { model, Schema } = mongoose;

const projectsSchema = Schema(
  {
    name: {
      type: String,
      required: false,
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

// I am using a Singleton pattern to avoid overwriting the Project Model.
export const Project =
  mongoose.models.Project || model("Project", projectsSchema);
