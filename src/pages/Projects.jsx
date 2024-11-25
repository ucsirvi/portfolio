import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import RadhaKrishnaVaani from "../assets/images/RadhaKrishnaVaani.jpeg";
import OptiwiseCV from "../assets/images/OptiwiseCV.jpeg";
import Portfolio from "../assets/images/Portfolio.jpeg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const portfolio_codelink = import.meta.env.VITE_PORTFOLIOcodeLink;
  const portfolio_deployedlink = import.meta.env.VITE_PORTFOLIOdeployedLink;
  const radhakrishnavaani_codelink = import.meta.env
    .VITE_RADHAKRISHNAVAANIcodeLink;
  const radhakrishnavaani_deployedlink = import.meta.env
    .VITE_RADHAKRISHNAVAANIdeployedLink;
  const optiwisecv_codelink = import.meta.env.VITE_OptiWiseCVcodeLink;
  const optiwisecv_deployedlink = import.meta.env.VITE_OptiWiseCVdeployedLink;

  useEffect(() => {
    const fetchedProjects = [
      {
        id: 1,
        title: "Umesh's Portfolio",
        image: Portfolio,
        codeLink: portfolio_codelink,
        deployedLink: portfolio_deployedlink,
        description:
          "A personal portfolio website showcasing my skills, projects, and achievements.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
      },
      {
        id: 2,
        title: "RadhaKrishnaVaani",
        image: RadhaKrishnaVaani,
        codeLink: radhakrishnavaani_codelink,
        deployedLink: radhakrishnavaani_deployedlink,
        description:
          "The RadhaKrishna Vaani project is a website that provides easy access to the Bhagavad Gita's 700 verses across 18 chapters, making spiritual wisdom more accessible.",
        techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
      },
      {
        id: 3,
        title: "OptiwiseCV",
        image: OptiwiseCV,
        codeLink: optiwisecv_codelink,
        deployedLink: optiwisecv_deployedlink,
        description:
          "OptiWiseCV is a web application designed to help users create and manage their professional resumes,",
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      },
    ];

    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="container mx-auto px-6 py-2">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-700">
          Explore my work and the technologies behind each project
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
