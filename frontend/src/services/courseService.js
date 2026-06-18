import API from "../utils/api";

export const getCourses = async () => {
  const response =
    await API.get("/courses");

  return response.data;
};

export const createCourse = async (
  courseData,
  token
) => {
  const response =
    await API.post(
      "/courses",
      courseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};