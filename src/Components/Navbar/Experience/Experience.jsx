import React from "react";
import {
  FaAmazon,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb, SiRedis } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={100} />
             <span className="text-white">HTML5</span>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center flex-col rounded-2xl">
            <FaCss3 color="#1572b6" size={100} />
            <span className="text-white">CSS3</span>
          </span>
          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaReact color="#61DAF8" size={100} />
            <span className="text-white">React js</span>
          </span>
          <span className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl">
            <FaJs color="#F70F1E" size={100} />
            <span className="text-white">Javascript</span>
          </span>
          
        </div>

        
      </div>
    </div>
  );
};

export default Experience;
