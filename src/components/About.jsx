
import { aboutInfo } from '../assets/assets';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden py-20 bg-dark-200"
    >
      <div className="container relative z-10 mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple-500"> Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profileImg}
              alt="Profile"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="rounded-2xl p-8">

              <h3 className="text-2xl font-semibold mb-6">
                My Journey
              </h3>

              <p className="text-gray-300 mb-6">
                My journey in web development began with curiosity and a
                passion for creating things on the web. I've been learning
                HTML, CSS, JavaScript, and React, turning ideas into
                responsive and interactive user experiences.
              </p>

              <p className="text-gray-300 mb-12">
                I'm always eager to learn, build, and improve. My goal is
                to grow as a developer, gain real-world experience, and
                create digital experiences that make an impact.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {aboutInfo.map((data, index) => {
                  const Icon = data.icon;

                  return (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                    >
                      <div className="text-purple-500 text-4xl mb-4">
                        <Icon />
                      </div>

                      <h3 className="text-xl font-semibold mb-3">
                        {data.title}
                      </h3>

                      <p className="text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
