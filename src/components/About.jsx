import umesh2 from "../assets/images/umesh2.jpeg";

const About = () => {
  const resume = import.meta.env.VITE_RESUME_URL;
  const resumewithphoto = import.meta.env.VITE_RESUMEWITHPHOTO_URL;

  return (
    <section className="relative flex flex-col items-center text-center py-20 px-6 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full w-full animate-gradient blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center mb-8 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img
              src={umesh2}
              alt="Umesh Choudhary"
              className="w-full h-full rounded-full object-cover shadow-xl border-8 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Hi, I'm{" "}
            <span className="text-blue-500 font-bold">Umesh Choudhary</span>, a{" "}
            <span className="text-purple-500 font-semibold">
              MERN Stack Developer
            </span>{" "}
            based in Bangalore, India. I specialize in building modern web
            applications and enhancing user experiences through clean and
            efficient code.
          </p>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Contact</h2>
            <p className="text-lg text-gray-300 mb-2">
              <strong>Email:</strong>{" "}
              <span className="text-blue-500">
                umeshchoudharywork@gmail.com
              </span>
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <strong>Location:</strong>{" "}
              <span className="text-blue-500">Bangalore, India</span>
            </p>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
            >
              Resume
            </a>
            <br />
            <a
              href={resumewithphoto}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
            >
              Photo Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
