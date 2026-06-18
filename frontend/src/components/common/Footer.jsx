import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";



function Footer() {

  return (
    <footer
      className="
      border-t
      border-red-800
      bg-[#191515]
      "
    >
      <div
        className="
        max-w-8xl
        mx-auto
        px-6
        py-2
        "
      >
        <div
          className="
          grid
          md:grid-cols-4
          gap-10
          "
        >

          {/* Company */}

          <div>

            <h2
              className="
              text-2xl
              font-bold
              mb-2
              "
            >
              AFRI
              <span className="text-red-600">
                BOT
              </span>
            </h2>

            <p className="text-gray-400">
              Empowering all through
              robotics, AI and hands-on
              technology education.
            </p>

            <div className="flex gap-4 mt-2">

              <FaWhatsapp />

              <FaInstagram />

              <FaLinkedin />

              


            </div>

          </div>

          {/* Company Links */}

          <div>

            <h3 className="font-bold mb-2">
              COMPANY
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>About Us</li>

              <li>Courses</li>

              

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-bold mb-2">
              LEGAL
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>Privacy Policy</li>

              <li>Terms of Service</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold mb-2">
              CONTACT
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>info@afribot.africa</li>

              <li>+254 701 518 100</li>

              <li>Mombasa, Kenya</li>

            </ul>

          </div>

        </div>

        <div
          className="
          border-t
          border-red-950
          mt-8
          pt-3
          text-gray-500
          flex
          flex-col
          md:flex-row
          justify-between
          "
        >
          <span>
            © 2026 AFRIBOT.
          </span>

          <span>
            Where innovation meets opportunity.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;