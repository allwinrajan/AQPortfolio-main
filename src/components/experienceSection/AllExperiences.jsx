import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Degree in Computer Science",
    company: "MAM School Of Engineering",
    date: "2020 - 2024",
    responsibilities: [
      "Developed a strong foundation in computer science principles.",
      "Worked on hands-on projects in cloud computing.",
      "Gained expertise in DevOps fundamentals.",
    ],
  },
  {
    job: "DevOps Trainee",
    company: "Jspider Institute",
    date: "2024 - 2025",
    responsibilities: [
      "Assisted in teaching DevOps fundamentals, including CI/CD, containerization, and cloud deployment.",
      "Helped students set up and troubleshoot DevOps pipelines using Jenkins, Docker, and Kubernetes.",
      
    ],
  },
  {
    job: "DevOps Engineer",
    company: "Agnoshin Technologies",
    date: "2025 - Present",
    responsibilities: [
      "Designed and implemented CI/CD pipelines to automate deployment processes.",
      "Implemented monitoring and logging solutions to ensure high availability and proactive issue resolution.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
