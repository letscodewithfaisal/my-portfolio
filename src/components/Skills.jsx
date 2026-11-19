import { motion } from "framer-motion";
import { skills as skillCategories } from "../assets/assets";
import { FaCode, FaLayerGroup, FaServer, FaTools } from "react-icons/fa";

const categoryIcons = [
  FaCode,
  FaLayerGroup,
  FaServer,
  FaTools,
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 size-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Technical Expertise
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Skills & <span className="text-purple-400">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Technologies and tools I use to build responsive,
            interactive and user-friendly web applications,
            along with the backend fundamentals I am learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index] || FaCode;

            return (
              <motion.div
                key={category.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 md:p-8 ${
                  category.featured
                    ? "border-purple-500/40 bg-purple-500/7"
                    : "border-white/10 bg-white/3"
                }`}
              >
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                <div className="relative z-10">

                  {/* Card Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-400">
                      <Icon />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-gray-600">
                      {category.number}
                    </span>
                  </div>

                  {/* Category Information */}
                  <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mb-7 text-sm leading-7 text-gray-400">
                    {category.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">
            Always learning, improving and exploring new technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;