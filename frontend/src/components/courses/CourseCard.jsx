import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import { useAuth } from "../../context/authContext";

function CourseCard({
  _id,
  title,
  description,
  duration,
  level,
  price,
}) {

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleEnroll = async () => {

    try {

      await API.post(
        "/enrollments",
        {
          courseId: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      alert(
        `Successfully enrolled in ${title}`
      );

    } catch (error) {

      alert(
        error.response?.data?.message ||
          "Enrollment failed"
      );

    }
  };

  return (
    <div
      className="
      bg-white
      border
      rounded-2xl
      p-5
      hover:border-black
      transition-all
      duration-300
      "
    >
      <span
        className="
        bg-red-700
        text-white
        text-xs
        px-3
        py-1
        rounded-full
        "
      >
        {level}
      </span>

      <h3 className="text-2xl font-bold text-black mt-3">
        {title}
      </h3>

      <p className="text-black mt-2">
        {description}
      </p>

      <div className="text-black mt-3">
        {duration}
      </div>

      <div className="font-bold text-black mt-2">
        Ksh {price.toLocaleString()}
      </div>

      {!user ? (
        <button
          onClick={() => navigate("/login")}
          className="
          mt-4
          bg-gray-700
          text-white
          px-5
          py-2
          rounded-lg
          "
        >
          Login To Enroll
        </button>
      ) : (
        <button
          onClick={handleEnroll}
          className="
          mt-4
          bg-red-700
          text-white
          px-5
          py-2
          rounded-lg
          hover:bg-red-800
          "
        >
          Enroll Now
        </button>
      )}
    </div>
  );
}

export default CourseCard;