import SingleSkill from "./SingleSkill";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiSonarqube } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiApache } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    skill: "Terraform",
    icon: SiTerraform,
  },
  {
    skill: "CI/CD (Jenkins)",
    icon: SiJenkins,
  },
  {
    skill: "Prometheus",
    icon: SiPrometheus,
  },
  {
    skill: "Grafana",
    icon: SiGrafana,
  },
  {
    skill: "Ansible",
    icon: SiAnsible,
  },
  {
    skill: "GitHub Actions",
    icon: SiGithubactions,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
  {
    skill: "SonarQube",
    icon: SiSonarqube,
  },
  {
    skill: "Nginx",
    icon: SiNginx,
  },
  {
    skill: "Apache",
    icon: SiApache,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
