import React from "react";
import bannerImg from "../../../../public/project.jpg";

const ProjectCard = ({ title, main, tags = [], demoLink = "#", codeLink = "#" }) => {
  return (
    <div className="flex flex-col w-full sm:w-[340px] rounded-2xl glass overflow-hidden hover-glow transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Project Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={bannerImg}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-100 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {main}
          </p>
        </div>

        {/* Tech Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-accent-solid/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-accent-solid hover:opacity-90 text-white transition-all duration-300 transform hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

