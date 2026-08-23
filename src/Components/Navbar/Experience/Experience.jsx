import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiTypescript, SiAngular, SiSass, SiMaterialdesign } from "react-icons/si";

const Experience = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Angular", icon: <SiAngular className="text-red-600" /> },
        { name: "Material UI", icon: <SiMaterialdesign className="text-blue-400" /> },
        { name: "SCSS / Sass", icon: <SiSass className="text-pink-500" /> },
      ],
    },
    {
      title: "Tools & Soft Skills",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "npm", icon: <FaNpm className="text-red-500" /> },
        { name: "Requirement Analysis", icon: null },
      ],
    },
  ];

  const timelineData = [
    {
      type: "work",
      role: "Fullstack Developer",
      company: "Impulsive Web Pvt Ltd",
      duration: "Nov 2023 - Present",
      techs: ["Angular.js", "SCSS", "Material UI", "REST APIs"],
      bullets: [
        "Collaborated with backend teams to align data contracts, resolve integration issues, and deliver seamless features.",
        "Built reusable components, custom directives, and optimized UI workflows to improve overall efficiency.",
        "Integrated REST APIs with Angular services and interceptors, ensuring secure data flow and error handling.",
        "Worked on state management, routing, lazy loading, and performance optimization for faster load times.",
      ],
    },
    {
      type: "education",
      role: "Bachelor of Technology",
      company: "Computer Science Engineering",
      institution: "Shambhunath Institute of Engineering and Technology, Prayagraj, India",
      duration: "Oct 2020 - June 2024",
      techs: ["Data Structures", "Algorithms", "Software Engineering"],
      bullets: ["Completed B.Tech with focus on core CS subjects, software paradigms, and fullstack projects."],
    },
    {
      type: "education",
      role: "Intermediate - Mathematics",
      company: "Secondary Education",
      institution: "BS DR BR AIC Thathara Haisar bazar sant Kabir nagar",
      duration: "June 2019 - July 2020",
      techs: [],
      bullets: ["Focus on mathematics and analytical reasoning."],
    },
  ];

  return (
    <section id="Experience" className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-accent-gradient inline-block">
          Skills & Experience
        </h2>
        <p className="text-slate-400 mt-2 text-sm md:text-base">
          My technical expertise and professional growth timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Skills (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="text-xl md:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Technical Skills
          </h3>
          
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-accent">
                {category.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-900"
                  >
                    {skill.icon ? (
                      <span className="text-xl flex-shrink-0">{skill.icon}</span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-accent-solid flex-shrink-0"></span>
                    )}
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <h3 className="text-xl md:text-2xl font-bold border-b border-slate-800 pb-3 text-slate-200">
            Timeline
          </h3>

          <div className="relative border-l border-slate-800 ml-4 pl-6 md:pl-8 space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                    item.type === "work"
                      ? "bg-accent-solid border-accent group-hover:border-accent"
                      : "bg-slate-900 border-slate-700 group-hover:border-accent"
                  }`}
                ></div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-accent transition-colors">
                      {item.role}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {item.company} {item.institution && <span className="text-slate-400 font-normal">| {item.institution}</span>}
                  </p>

                  <ul className="list-disc list-outside ml-4 text-xs md:text-sm text-slate-400 space-y-1.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>

                  {item.techs.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

