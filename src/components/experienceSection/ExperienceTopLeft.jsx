import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="22" text="Deployments" />
      </div>
      <p className="text-center">
      With 1 year of experience, I specialize in building scalable, secure, and high-performance solutions. I have a strong grasp of DevOps, cloud infrastructure, and automation, ensuring seamless deployments and optimized workflows. My expertise includes CI/CD, AWS, containerization, and infrastructure as code, all applied using best practices to enhance efficiency and reliability.
      </p>
      <ExperienceInfo number="$45 USD" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
