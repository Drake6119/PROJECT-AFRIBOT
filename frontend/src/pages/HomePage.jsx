import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
import {
  FaGraduationCap,
  FaMicrochip,
  FaRocket,
} from "react-icons/fa";


// import Footer from "../components/Footer";


import image from "../assets/image.png";
//import heroStudent from "../assets/hero-student.jpg";
//import heroRobot from "../assets/hero-robot.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="
      min-h-screen
      bg-white
      text-white
      "
    >
      

      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        "
      >
        <div
          className="
          grid
          md:grid-cols-2
          gap-12
          items-center
          "
        >
          {/* LEFT */}

          <div>

            <div
              className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-red-700
              text-white
              text-sm
              mb-6
              "
            >
              Afribot Skill Centre
            </div>

            <h1
              className="
              text-5xl
              md:text-7xl
              text-black
              font-bold
              leading-tight
              "
            >
              Building innovators
              <br />

              <span className="text-red-600">
                and Powering
              </span>

              <br />

              industries

              <br />

              one skill at a time
            </h1>

            <p
              className="
              text-black
              mt-8
              text-lg
              max-w-xl
              "
            >
              AFRIBOT trains young innovators
              in robotics, AI and engineering
              through world-class courses,
              real-world projects and a vibrant
              community.
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
              "
            >
              <button
                onClick={() => navigate("/courses")}
                className="
                bg-red-700
                hover:bg-red-800
                px-6
                py-3
                rounded-full
                "
              >
                Explore Courses
              </button>

              <button
                onClick={() => navigate("/about")}
                className="
                border
                border-gray-700
                bg-red-700
                px-6
                py-3
                rounded-full
                "
              >
                Learn More
              </button>
            </div>
            

          </div>
          

          {/* RIGHT */}

          <div>

            <img
              src={image}
              alt=""
              className="
              rounded-3xl
              w-full
              h-80
              object-cover
              "
            />

            <div
              className="
              grid
              grid-cols-2
              gap-4
              mt-4
              "
            >
              {/*
              <img
                src={heroStudent}
                alt=""
                className="
                rounded-3xl
                h-52
                object-cover
                w-full
                "
              />

              <img
                src={heroRobot}
                alt=""
                className="
                rounded-3xl
                h-52
                object-cover
                w-full
                "
              />
              */}

            </div>

          </div>

        </div>
      </section>

      <section
  className="
  max-w-4xl
  mx-auto
  px-6
  pb-24
  "
>

  <div
    className="
    bg-gradient-to-red-500
    from-red-900
    to-red-500
    rounded-3xl
    p-12
    text-center
    "
  >

    <h2
      className="
      text-4xl
      text-black
      font-bold
      mb-8
      "
    >
      Sign up to enroll in our courses.
    </h2>

    <div
      className="
      flex
      justify-center
      gap-4
      flex-wrap
      "
    >

      <button
        onClick={() => navigate("/register")}
        className="
        bg-red-700
        border
        text-white
        hover:bg-white
        hover:text-red-700
        px-8
        py-3
        rounded-full
        
        "
      >
        Sign Up
      </button>

      <button
        onClick={() => navigate("/login")}
        className="
        bg-red-700
        border
        text-white
        hover:bg-white
        hover:text-red-700
        px-8
        py-3
        rounded-full
        "
      >
        Sign In
      </button>

    </div>

   </div>

</section>


    </div>
  );
}

export default Home;