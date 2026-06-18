import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        Student Dashboard
      </h1>

      <h2 className="mt-6 text-2xl">
        Welcome {user?.name}
      </h2>

      

      <button
        onClick={logoutHandler}
        className="bg-red-600 text-white px-6 py-3 rounded-lg mt-6"
      >
        Logout
      </button>
    </div>
  );
}

export default StudentDashboard;