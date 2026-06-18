import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import API from "../utils/api";
import { useAuth } from "../context/authContext";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

     login(res.data);

    navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10  mb-10 p-8 bg- white  text- black">
     
        <div className="flex- grow">
          <section>
            <div className="bg- white ">
        

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">
            AFRI<span className="text-red-600">BOT</span>
          </h1>

          <p className="text-black mt-2">
            Create your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="relative mb-4">
            <FaUser className="absolute top-4 left-3 text-gray-400" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-10"
            />
          </div>

          <div className="relative mb-4">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-10"
            />
          </div>

          <div className="relative mb-4">
            <FaLock className="absolute top-4 left-3 text-gray-400" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-10"
            />
          </div>

          <div className="relative mb-6">
            <FaLock className="absolute top-4 left-3 text-white" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full border rounded-lg py-3 pl-10"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-black">
          Already have an account?

          <Link
            to="/login"
            className="text-red-500 font-semibold ml-1"
          >
            Login
          </Link>
        </p>

      </div>
      
  <div className="mt-10 mb-0">
        
      </div>

    </section>
      </div>
    </div>
  );
}

export default Register;




