import {
  useEffect,
  useState,
} from "react";

import CourseCard from "../components/courses/CourseCard";

import {
  getCourses,
} from "../services/courseService";

function Courses() {
  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchCourses =
      async () => {
        try {
          const data =
            await getCourses();

          setCourses(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading Courses...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-red-800 text-6xl mb-7 font-serif">
          COURSES
        </p>

        <h1 className="text-5xl text-red-500 mb-4">
          Learn by building.
        </h1>

        <p className="text-black mb-16">
          Every course ends with a real
          project you can showcase.
        </p>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >
          {courses.map(
            (course) => (
              <CourseCard
                key={course._id}
                {...course}
              />
            )
          )}
        </div>

      </section>

    </div>
  );
}

export default Courses;