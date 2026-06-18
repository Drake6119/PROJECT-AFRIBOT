import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

import API from "../utils/api";
import { useAuth } from "../context/authContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      console.log(
        "LOGIN RESPONSE:",
        res.data
      );

      // Save user in AuthContext + localStorage
      login(res.data);

      // Redirect based on role
      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10  mb-10 p-8 bg- white  text- black">
     
        <div className="flex- grow">
          <section>
            <div className="bg- white ">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-black font-serif">
                  AFRI<span className="text-red-600">BOT</span>
                </h1>

                <p className="text-black mt-2 font-fantasy">
                  Sign in to continue
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="relative mb-5">
                  <FaEnvelope className="absolute top-4 left-3 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="relative mb-6">
                  <FaLock className="absolute top-4 left-3 text-gray-400" />

                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-serif transition"
                >
                    Login
                </button>

              </form>

               <p className="text-center mt-6 text-black">
                  Don't have an account?
                    <Link
                      to="/register"
                      className="text-red-600 font-serif ml-1"
                    >
                      Register
                    </Link>
                </p>

            </div>
          </section>
        </div>
    
    </div>
    
    

    
  );
}

export default Login;




 









