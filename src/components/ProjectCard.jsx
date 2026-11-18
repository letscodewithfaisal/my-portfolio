
const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  demo = "#",
  github = "#",
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a24] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50">

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

        <h3 className="mb-3 text-xl font-semibold text-white">
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
              className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
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
            className="flex-1 rounded-lg bg-purple-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-purple-700"
          >
            View Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-purple-500 px-4 py-2.5 text-center text-sm font-medium text-purple-300 transition hover:bg-purple-500/10"
          >
            Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
