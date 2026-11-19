
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

import { FaEnvelope } from 'react-icons/fa6';
import { SiHashnode } from 'react-icons/si';

const FORMSPREE_ID = ''; // Add your Formspree ID here
const MY_EMAIL = 'faisalkhan843331@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    description: 'Explore my projects and code.',
    icon: FaGithub,
    url: 'https://github.com/letscodewithfaisal',
    color: '#6e5494',
  },
  {
    name: 'LinkedIn',
    description: 'Connect with me professionally.',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/faisal-siddiqui-b42980228',
    color: '#0A66C2',
  },
  {
    name: 'Twitter / X',
    description: 'Follow my thoughts and updates.',
    icon: FaTwitter,
    url: 'https://x.com/faisal4Sidd',
    color: '#64748b',
  },
  {
    name: 'Hashnode',
    description: 'Read my technical blogs.',
    icon: SiHashnode,
    url: 'https://hashnode.com/@faisalsiddiqui',
    color: '#2962FF',
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(
        `Portfolio Contact - ${form.name}`
      );

      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      window.location.href =
        `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;

      return;
    }

    try {
      setStatus('sending');

      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setStatus('success');

        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-[#080711] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 uppercase tracking-[4px] text-sm font-semibold mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Work <span className="text-purple-400">Together</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, an opportunity, or just want to connect?
            I'd love to hear from you. Let's create something meaningful together.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Let's Connect
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas,
                internship opportunities, and collaborations.
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${MY_EMAIL}`}
              className="flex items-center gap-5 p-5 rounded-2xl border border-purple-500/20 bg-white/3 hover:border-purple-400/60 hover:bg-purple-500/6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 text-xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Email Me</p>

                <p className="text-white font-medium break-all">
                  {MY_EMAIL}
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-5 p-5 rounded-2xl border border-purple-500/20 bg-white/3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>

                <p className="text-white font-medium">
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 text-gray-300">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />

              <span className="text-sm">
                Open to opportunities and collaborations
              </span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-3xl border border-purple-500/20 bg-white/3 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#100e1c] border border-purple-500/20 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#100e1c] border border-purple-500/20 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#100e1c] border border-purple-500/20 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message →'}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-green-400 text-sm">
                  <FaCheckCircle />
                  Your message has been sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Follow Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-purple-400 uppercase tracking-[3px] text-sm font-semibold mb-3">
              Find Me Online
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Follow <span className="text-purple-400">Me</span>
            </h3>

            <p className="text-gray-400 max-w-xl mx-auto">
              Connect with me on social platforms and explore what I'm building,
              learning, and sharing.
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: social.color,
                    backgroundColor: `${social.color}18`,
                  }}
                  style={{
                    '--brand-color': social.color,
                  }}
                  className="social-card group flex flex-col items-center text-center p-7 rounded-2xl border border-purple-500/15 bg-white/3 cursor-pointer"
                >
                  <div className="social-icon w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 text-3xl text-purple-400">
                    <Icon />
                  </div>

                  <h4 className="social-title text-lg font-semibold text-white mb-2">
                    {social.name}
                  </h4>

                  <p className="text-sm text-gray-400 mb-4">
                    {social.description}
                  </p>

                  <span className="social-action text-sm text-purple-400 font-medium">
                    Connect with me →
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
