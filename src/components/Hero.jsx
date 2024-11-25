import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Umesh Choudhary</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-6">
          Full-stack Developer | Passionate about creating interactive web
          experiences
        </p>

        <Link to="/projects">
          <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
