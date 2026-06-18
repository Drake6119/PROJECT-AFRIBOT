import { Link } from "react-router-dom";
import { useState } from "react";

import { FaBars } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <nav
        className="
        flex
        justify-between
        items-center
        px-6
        py-5
        border-b
        border-red-950
        bg-red-950
        "
      >
        {/* Logo */}

        <Link to="/">
          <h1 className="text-2xl font-bold">
            AFRI
            <span className="text-red-600">
              BOT
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link to="/">Home</Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>

          <ThemeToggle />

        </div>

        {/* Mobile Controls */}

        <div className="flex md:hidden items-center gap-3">

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(true)}
          >
            <FaBars size={20} />
          </button>

        </div>

      </nav>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;