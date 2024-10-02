import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-10 pt-3 md:p-24  flex justify-center items-center text-white">
      <div className="py-3 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="this is a bloggin website created in next js and used some component library"
        />
        <ProjectCard
          title="Youtube Clone"
          main="this is a bloggin website created in next js and used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a bloggin website created in next js and used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;

