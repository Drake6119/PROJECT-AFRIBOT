import {
  FaBook,
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaSignInAlt,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      top-0
      right-0
      w-72
      h-screen
      bg-black
      text-white
      border-l
      border-red-900
      z-50
      p-6
      "
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <h1 className="text-3xl font-bold">
          AFRI<span className="text-red-600">BOT</span>
        </h1>

        <button onClick={() => setIsOpen(false)}>
          <FaTimes size={22} />
        </button>

      </div>

      <div className="flex flex-col gap-6">

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <FaHome />
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <FaInfoCircle />
          About Us
        </Link>

        <Link
          to="/courses"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <FaBook />
          Courses
        </Link>

       

        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <FaSignInAlt />
          Sign In
        </Link>

        <Link
          to="/register"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <FaUserPlus />
          Sign Up
        </Link>

      </div>
    </div>
  );
}

export default MobileMenu;