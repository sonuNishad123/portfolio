import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projectsData = [
    {
      title: "Bukmuk",
      main: "A responsive subscription, payment, and inventory management application designed with reusable UI screens, custom validations, dynamic forms, and API interceptors.",
      tags: ["Angular", "TypeScript", "SCSS", "Material UI"],
      demoLink: "https://github.com/sonuNishad123/Bukmuk",
      codeLink: "https://github.com/sonuNishad123/Bukmuk",
    },
    {
      title: "News App",
      main: "A real-time news application featuring categorized content filters. Built with optimized page rendering (memoization, API throttling), loading states, and robust error boundaries.",
      tags: ["React.js", "JavaScript", "REST APIs", "CSS3"],
      demoLink: "https://github.com/sonuNishad123/news-app",
      codeLink: "https://github.com/sonuNishad123/news-app",
    },
    {
      title: "Premium Dev Portfolio",
      main: "A gorgeous, responsive, glassmorphic portfolio displaying skills, experience timeline, and project details with smooth animations and glowing accents.",
      tags: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
      demoLink: "#Home",
      codeLink: "https://github.com/sonuNishad123/portfolio",
    },
  ];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((project) =>
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-accent-gradient inline-block">
          Recent Projects
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          A showcase of application development and interactive fullstack designs.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-3 mb-12">
        {["All", "React", "Angular"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`py-2 px-5 font-semibold text-xs rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none cursor-pointer ${
              filter === tab
                ? "bg-accent-solid text-white scale-105 accent-glow-bg"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 min-h-[350px]">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            tags={project.tags}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;



