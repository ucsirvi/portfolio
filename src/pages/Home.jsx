import { Link } from "react-router-dom";
import umesh from "../assets/images/Umesh.jpeg";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center text-center py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full w-full animate-gradient blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8">
          <img
            src={umesh}
            alt="Umesh Choudhary"
            className="w-full h-full rounded-full object-cover shadow-lg border-4 border-blue-500"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white transition-all duration-500">
          Hello, I'm <span className="text-blue-500">Umesh Choudhary</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          I'm a passionate{" "}
          <span className="font-semibold text-blue-500">Web Developer</span>{" "}
          focused on building modern and scalable web applications.
        </p>
      </div>

      <div className="relative mt-16">
        <p className="text-lg text-gray-300">
          Feel free to explore my work and get in touch!
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
};

export default Home;
