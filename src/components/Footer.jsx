
const Footer = () => {

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

  return (
    <footer className="bg-[#080711] border-t border-purple-500/15">

      <div className="container mx-auto px-6 py-10">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-1">
              Faisal<span className="text-purple-400">.</span>
            </h2>

            <p className="text-sm text-gray-400">
              Frontend Developer | Creative Thinker
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            Back to top
            <span className="text-lg">↑</span>
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/15 pt-6">

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Faisal Siddiqui.
            All rights reserved.
          </p>

          <p className="text-center text-xs text-gray-600 mt-2">
            Designed & Built with passion and code.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
