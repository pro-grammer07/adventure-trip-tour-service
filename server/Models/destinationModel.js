import mongoose, { Schema } from "mongoose";

const destinationSchema = new mongoose.Schema(
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
    availability: {
      type: String,
      required: [true, "Availability is required:"],
    },
    price : {
      type: Number,
      required: [true, "Price is required:"],
    },
    description: {
      type: String,
      // required: [true, "Name is required"],
    },
  },
  { timestamps: true }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
