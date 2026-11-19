import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full z-50 border-b border-purple-500/10 bg-[#07060d]/75 backdrop-blur-md py-4 px-8 shadow-lg">

      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div>
          <a href="#home" className="text-3xl font-bold text-white">
            Faisal
            <span className="text-purple-500">Siddiqui</span>
          </a>
        </div>

        {/* Desktop Menu (HUD corner borders, see .hud-link in index.css) */}
        <div className="hidden lg:flex items-center gap-3">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-active={active === id}
              className="hud-link"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={showMenu ? "Close menu" : "Open menu"}
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden text-2xl cursor-pointer text-white"
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setShowMenu(false)}
              className={`transition duration-300 p-3 rounded-lg hover:text-purple-500 hover:bg-purple-500/10 active:text-purple-500 active:bg-purple-500/20 ${
                active === id ? "text-purple-500" : "text-white/80"
              }`}
            >
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
