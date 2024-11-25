import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MainLayout = ({ children }) => {
  const GITHUB = import.meta.env.VITE_GITHUB;
  const LINKEDIN = import.meta.env.VITE_LINKEDIN;
  const TWITTER = import.meta.env.VITE_TWITTER;
  return (
    <div className="min-h-screen text-white transition-all duration-300 ease-in-out">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-lg p-4 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold text-gold">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Umesh Choudhary
            </Link>
          </div>

          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mt-20 container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-16">
        {children}
      </main>

      <footer className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 py-6 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start text-sm md:text-base">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-3xl font-bold text-yellow-300 mb-2">
                Umesh's Portfolio
              </h3>
              <p className="text-lg mb-4">
                Thank you for visiting my personal portfolio website. Connect
                with me over socials.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-all duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Quick Links
              </h3>
              <ul>
                <li>
                  <Link to="/" className="hover:text-yellow-300">
                    ➤ Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-300">
                    ➤ About
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="hover:text-yellow-300">
                    ➤ Education
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-yellow-300">
                    ➤ Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-300">
                    ➤ Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Contact Info
              </h3>
              <ul>
                <li>📞 +91 7742965799</li>
                <li> ✉️ umeshchoudharywork@gmail.com</li>
                <li>📍 Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4 text-sm">
            <p>
              Designed With ❤️ By <strong>Umesh Choudhary</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
