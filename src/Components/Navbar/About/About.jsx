import React from "react";
import AboutImg from "../../../../public/profile.jpg";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="About" className="py-20 px-6 md:px-12 max-w-6xl mx-auto text-white">
      <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-solid/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight inline-block text-accent-gradient">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Get to know me, my background, and what I do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-56 h-56 lg:w-72 lg:h-72">
              <div className="absolute inset-0 bg-accent-solid/10 rounded-2xl blur-lg transition-opacity duration-300"></div>
              <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900">
                <img
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                  src={AboutImg}
                  alt="Sonu Nishad About"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100">
              Passionate Fullstack Developer focused on building modern web applications
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              I am a Fullstack Developer with 2 years of hands-on experience in designing, building, and deploying responsive, scalable, and user-centric web applications. Currently based in India, I specialize in crafting clean and maintainable code architecture using modern javascript frameworks.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              My expertise spans across consuming complex REST APIs, creating reusable component libraries, optimizing page speeds, and implementing robust UI state management. I love turning complex wireframes into polished, pixel-perfect digital experiences.
            </p>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-accent/40 transition-colors">
                <h4 className="text-2xl font-black text-accent">2+</h4>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-accent/40 transition-colors">
                <h4 className="text-2xl font-black text-accent">B.Tech</h4>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Computer Science</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-accent/40 transition-colors">
                <h4 className="text-2xl font-black text-accent">2</h4>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Core Frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

