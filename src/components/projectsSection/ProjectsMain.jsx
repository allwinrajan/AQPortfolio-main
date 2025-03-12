import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Secure Three Tier App Deployment on AWS Beanstalk with CodePipeline",
    year: "Jan 2024",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "CICD Using GitHub Actions to AWS ECR and ECS monitoring with CloudWatch",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Revolutionizing Text-to-Speech with AWS Polly and S3",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Image Analysis with Amazon Rekognition & AWS S3 ",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "Implemented System Monitoring with Prometheus, Node Exporter, and Grafana",
    year: "May2024",
    align: "right",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "Automating Deployment Made with GitHub, Jenkins, Docker, and Automation on CICD",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "Implemented a Master-Slave architecture with Jenkins and integrated backups in AWS S3",
    year: "May2024",
    align: "right",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
