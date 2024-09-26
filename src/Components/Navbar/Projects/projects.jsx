import React from 'react'

const projects = () => {

  return (
    <div id="projects" className="p-10 md:p-24  flex justify-center items-center text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
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
  )
}

export default projects