import Enrollment from "../models/Enrollment.js";

export const createEnrollment = async (
  req,
  res
) => {
  try {

    const { courseId } = req.body;

    const enrollment =
      await Enrollment.create({
        user: req.user._id,
        course: courseId,
      });

    res.status(201).json(enrollment);

  } catch (error) {

    res.status(400).json({
      message: error.message,
    });

  }
};

export const getEnrollments = async (
  req,
  res
) => {
  try {

    const enrollments =
      await Enrollment.find()
        .populate("user", "name email")
        .populate("course", "title");

    res.json(enrollments);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};