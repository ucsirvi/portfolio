import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGithub,
  FaHtml5,
  // TbBrandCpp,
  // SiStrapi,
  // SiCloudinary,
} from "react-icons/fa";

import { TbBrandCpp } from "react-icons/tb";
import { SiStrapi, SiCloudinary } from "react-icons/si";

const skills = [
  {
    name: "ReactJS",
    icon: <FaReact />,
    bgColor: "bg-gradient-to-r from-pink-500 to-yellow-500",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
    bgColor: "bg-gradient-to-r from-green-400 to-blue-500",
  },
  {
    name: "ExpressJS",
    icon: <FaNodeJs />,
    bgColor: "bg-gradient-to-r from-teal-400 to-green-500",
  },
  {
    name: "Redux",
    icon: <FaReact />,
    bgColor: "bg-gradient-to-r from-purple-500 to-blue-600",
  },
  {
    name: "Material UI",
    icon: <FaReact />,
    bgColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    name: "TailwindCSS",
    icon: <FaCss3Alt />,
    bgColor: "bg-gradient-to-r from-blue-300 to-teal-600",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },

  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    bgColor: "bg-gradient-to-r from-yellow-500 to-orange-400",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    bgColor: "bg-gradient-to-r from-green-600 to-blue-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    bgColor: "bg-gradient-to-r from-gray-400 to-black",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    bgColor: "bg-gradient-to-r from-purple-600 to-pink-500",
  },
  {
    name: "JQuery",
    icon: <FaReact />,
    bgColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    name: "C++",
    icon: <TbBrandCpp />,
    bgColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    name: "Strapi",
    icon: <SiStrapi />,
    bgColor: "bg-gradient-to-r from-yellow-500 to-orange-400",
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary />,
    bgColor: "bg-gradient-to-r from-teal-400 to-green-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br #1a202c py-5 text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#C21460]">
          Skills & Abilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-6 px-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-110 ${skill.bgColor}`}
            >
              <div className="text-5xl text-white mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold text-gray-900">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
