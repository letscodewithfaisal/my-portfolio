
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const skills = [
  { name: 'HTML5', color: 'hover:text-orange-400 hover:border-orange-400/50 hover:bg-orange-400/10' },
  { name: 'CSS3', color: 'hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10' },
  { name: 'JavaScript (ES6+)', color: 'hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-yellow-400/10' },
  { name: 'React.js', color: 'hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10' },
  { name: 'Tailwind CSS', color: 'hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10' },
  { name: 'Responsive Design', color: 'hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10' },
  { name: 'REST API Integration', color: 'hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10' },
  { name: 'Git & GitHub', color: 'hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/10' },
];

const floatAnimation = (duration, delay = 0) => ({
  y: [0, -8, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 sm:px-10 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="text-purple-400 font-semibold tracking-[0.25em] uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Faisal Siddiqui
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-4">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            I build clean, responsive, and user-friendly web experiences
            using modern frontend technologies. I enjoy turning ideas
            into meaningful digital experiences through thoughtful design
            and development.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
            {skills.map((skill) => (
  <motion.span
    key={skill.name}
    whileHover={{ scale: 1.06, y: -3 }}
    whileTap={{
      scale: 1.08,
      y: -3,
      backgroundColor: "rgba(255, 255, 255, 0.12)",
    }}
    transition={{ duration: 0.15 }}
    className={`px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium cursor-pointer transition-colors duration-200 ${skill.color}`}
  >
    {skill.name}
  </motion.span>
))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-9">
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-pink-500 hover:opacity-80 transition duration-200 shadow-lg shadow-purple-500/20"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download="Faisal-Siddiqui-Resume.pdf"
              className="px-7 py-3 rounded-lg font-semibold text-white border border-purple-400/50 hover:bg-purple-900/40 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-75 h-85 sm:w-97.5 sm:h-105 md:w-112.5 md:h-117.5 flex items-center justify-center">

            {/* STATIC OUTER RING */}
            <div className="absolute w-65 h-65 sm:w-85 sm:h-85 md:w-97.5 md:h-97.5 rounded-full border border-purple-500/20" />

            {/* STATIC INNER RING */}
            <div className="absolute w-57.5 h-57.5 sm:w-75 sm:h-75 md:w-86.25 md:h-86.25 rounded-full border border-pink-400/20" />

            {/* PROFILE IMAGE */}
            <div className="relative z-10 w-51.25 h-51.25 sm:w-66.25 sm:h-66.25 md:w-75 md:h-75 rounded-full p-2 bg-linear-to-br from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
              <img
                src={profileImg}
                alt="Faisal Siddiqui"
                className="w-full h-full rounded-full object-cover border-4 border-[#10101c]"
              />
            </div>

            {/* PROJECTS CARD */}
            <motion.div
              animate={floatAnimation(4)}
              className="absolute z-20 top-0 left-1/2 -translate-x-1/2"
            >
              <div className="bg-[#17172a]/95 backdrop-blur-md border border-purple-400/30 rounded-xl px-4 py-3 shadow-xl shadow-purple-500/10 whitespace-nowrap">
                <p className="text-xl font-bold text-purple-300">20+</p>
                <p className="text-xs text-gray-400">Projects Done</p>
              </div>
            </motion.div>

            {/* TECHNICAL BLOGS CARD */}
            <motion.div
              animate={floatAnimation(4.5, 0.5)}
              className="absolute z-20 right-0 top-1/2 -translate-y-1/2"
            >
              <div className="bg-[#17172a]/95 backdrop-blur-md border border-pink-400/30 rounded-xl px-4 py-3 shadow-xl shadow-pink-500/10">
                <p className="text-xl font-bold text-pink-300">67</p>
                <p className="text-xs text-gray-400">Technical Blogs</p>
              </div>
            </motion.div>

            {/* CODE EDITOR CARD */}
            <motion.div
              animate={floatAnimation(3.8, 0.8)}
              className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2"
            >
              <div className="bg-[#17172a]/95 backdrop-blur-md border border-blue-400/30 rounded-xl px-4 py-3 shadow-xl shadow-blue-500/10 whitespace-nowrap">
                <p className="text-sm font-semibold text-blue-300">
                  &lt;Code /&gt;
                </p>
                <p className="text-xs text-gray-400">Building Ideas</p>
              </div>
            </motion.div>

            {/* REACT SYMBOL */}
            <motion.div
              animate={floatAnimation(3.5, 0.3)}
              className="absolute z-20 top-10 left-2 sm:left-0 text-cyan-400 text-4xl sm:text-5xl"
            >
              ⚛
            </motion.div>

            {/* CODE SYMBOL */}
            <motion.div
              animate={floatAnimation(4.2, 1)}
              className="absolute z-20 bottom-12 right-2 sm:right-0 text-purple-400 text-3xl sm:text-4xl font-bold"
            >
              {'</>'}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
