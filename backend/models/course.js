import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    level: {
      type: String,
      default: "All Levels",
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model(
  "Course",
  courseSchema
);

export default Course;