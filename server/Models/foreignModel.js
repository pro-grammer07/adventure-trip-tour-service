import mongoose, { Schema } from "mongoose";

const foreignSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Name is required"],
    },
    location: {
      type: String,
      required: [true, "Project Title is required:"],
    },
    days: {
      type: String,
      required: [true, "Package is required:"],
    },
    description: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: true }
);

const Foreign = mongoose.model("Foreign", foreignSchema);

export default Foreign;