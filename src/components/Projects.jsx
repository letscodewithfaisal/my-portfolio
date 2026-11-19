
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="bg-[#05040b]/40 px-6 py-20 text-white md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          A selection of my recent work, showcasing my skills
          and experience in frontend development.
        </p>

        {/* Project Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-purple-400 px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple-500/20"
          >
            <span>View More Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
