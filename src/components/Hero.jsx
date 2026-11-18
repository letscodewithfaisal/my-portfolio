
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="home"
      className="relative isolate min-h-screen flex items-center pt-20 pb-16 bg-[#111111] overflow-hidden"
    >

      {/* Animated Background */}
      <div className="hero-animated-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-purple"></div>
        <div className="hero-orb hero-orb-pink"></div>
        <div className="hero-orb hero-orb-blue"></div>
      </div>

      {/* Existing Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left side Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">

          <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
            Hi, I'm{" "}
            <span className="text-purple-300">
              Faisal Siddiqui
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white typewriter">
            Frontend Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I create stunning web experiences with modern technologies
            and innovative design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-6 py-3 bg-purple-400 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-300 text-white rounded-lg font-medium hover:bg-purple-500/20 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right side Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-400 to-pink-600 opacity-70">

              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
                src={profileImg}
                alt="profile"
              />

            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;
