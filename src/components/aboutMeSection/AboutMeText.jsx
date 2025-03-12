import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Alvin, a DevOps engineer specializing in building efficient, secure, and scalable infrastructures. I help businesses automate workflows, optimize cloud environments, and streamline deployments to ensure reliability and performance.

        With expertise in CI/CD, cloud (AWS), containerization, and security best practices, I design solutions that reduce downtime, improve efficiency, and accelerate software delivery. My goal is to simplify complex systems and create seamless operations that support business growth.

        Need to enhance your DevOps strategy, secure cloud infrastructure, or automate deployments? Let’s build a solution that works for you.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
