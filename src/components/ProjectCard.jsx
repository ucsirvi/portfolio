const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-bold py-2 px-4">
          {project.title}
        </div>
      </div>

      <div className="p-4">
        {project.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
        )}

        <div className="flex justify-between items-center">
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black text-sm font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition"
          >
            View
          </a>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-sm font-semibold py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Code &lt;/&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
