import { FaReact, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";

// Add, remove or reorder badges here. They spread evenly around the ring.
const badges = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "Git", Icon: FaGitAlt, color: "#f05032" },
];

/*
  A dashed ring around the profile photo with tech badges orbiting it.
  The ring spins (animate-orbit) and every badge spins the opposite way
  (animate-orbit-reverse) so the icons always stay upright.
  Place it inside the same `relative` wrapper as the photo.
*/
const OrbitBadges = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-5 lg:-inset-12"
    >
      <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-purple-300/40">
        {badges.map(({ name, Icon, color }, i) => {
          const angle = (i / badges.length) * 2 * Math.PI;
          return (
            <div
              key={name}
              className="absolute"
              style={{
                left: `${50 + 50 * Math.sin(angle)}%`,
                top: `${50 - 50 * Math.cos(angle)}%`,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2">
                <div className="flex animate-orbit-reverse items-center gap-2 rounded-full border border-purple-500/60 bg-[#14121c]/90 p-2 text-sm text-purple-50 shadow-[0_0_14px_rgba(168,85,247,0.35)] lg:px-3 lg:py-1.5">
                  <Icon style={{ color }} className="text-lg" />
                  <span className="hidden lg:inline">{name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitBadges;
