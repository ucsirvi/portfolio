import school1 from "../assets/education/school1.jpg";
import school2 from "../assets/education/school2.jpg";
import college from "../assets/education/college.jpg";

const Education = () => {
  const educationData = [
    {
      image: college,
      institution: "Dayananda Sagar College Of Engineering",
      degree: "Bachelor Of Engineering in Electrical and Electronics",
      duration: "2021-2025 | Pursuing",
      place: "Bangalore, Karnataka",
    },
    {
      image: school2,
      institution: "Emmanuel Mission Sr. Sec. School",
      degree: "Senior Secondary (12th)",
      duration: "2020 | Completed",
      place: "Pali, Rajasthan",
    },
    {
      image: school1,
      institution: "Central Academy School",
      degree: "High School (10th)",
      duration: "2018 | Completed",
      place: "Pali, Rajasthan",
    },
  ];

  return (
    <section className=" from-blue-500 to-purple-600 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">
          <span className="text-blue-600">Education</span> Journey
        </h1>
        <p className="text-gray-600 text-lg mt-2">
          Take a look at my academic achievements and milestones.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 lg:px-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-sm font-medium bg-blue-600 px-3 py-1 rounded-lg shadow-md">
                {edu.degree}
              </h3>
            </div>

            <div className="p-6 text-center">
              <h2 className="text-lg font-semibold text-white mb-2">
                {edu.institution}
              </h2>
              <p className="text-white text-sm mb-3">{edu.duration}</p>
              <p className="text-white text-sm">{edu.place}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-16">
        <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Education;
