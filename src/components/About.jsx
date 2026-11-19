
import { aboutInfo } from '../assets/assets';
import profileImg from '../assets/profile.jpeg';
import { FaLightbulb } from 'react-icons/fa';

const About = () => {
  const extraCard = {
    icon: FaLightbulb,
    title: 'Design Thinking',
    description: 'Combining creativity and problem-solving to build meaningful digital experiences.'
  };

  const cards = [...aboutInfo.slice(0, 3), extraCard];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-10 md:py-12 bg-[#05040b]/40"
    >
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 text-sm">
            Get to know more about my background and passion.
          </p>
        </div>

        {/* Image + Journey */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Profile Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/10 bg-dark-300">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-auto max-h-105 object-contain"
              />
            </div>
          </div>

          {/* My Journey */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              My Journey
            </h3>

            <p className="text-gray-300 text-sm leading-7 mb-4">
              My journey in web development began with curiosity and a
              passion for creating things on the web. I've been learning
              HTML, CSS, JavaScript, and React, turning ideas into
              responsive and interactive user experiences.
            </p>

            <p className="text-gray-300 text-sm leading-7">
              I'm always eager to learn, build, and improve. My goal is
              to grow as a developer, gain real-world experience, and
              create digital experiences that make an impact.
            </p>
          </div>

        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">

          {cards.map((data, index) => {
            const Icon = data.icon;

            return (
              <div
                key={index}
                className="bg-dark-300 rounded-xl p-5 border border-white/5
                transition-all duration-300 hover:-translate-y-1
                hover:border-purple-500/40"
              >
                <div className="text-purple-500 text-3xl mb-3">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {data.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  {data.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default About;
