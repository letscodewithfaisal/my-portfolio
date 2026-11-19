
const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  demo = "#",
  github = "#",
}) => {
  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={() => openLink(demo)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLink(demo);
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`View live demo of ${title}`}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a24] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="p-6">

        <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
          {title}
        </h3>

        <p className="mb-5 text-sm leading-7 text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-md hover:shadow-purple-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20"
          >
            View Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 rounded-lg border border-purple-500 px-4 py-2.5 text-center text-sm font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
          >
            View Code
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
