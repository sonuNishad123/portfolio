import React from "react";
import AboutImg from "../../../../public/profile.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl mb-6 text-center font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col  md:flex-row items-center">
          <img className="md:h-80 mr-10" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  "It probably helps actually get used to staying in hotels a
                  lot of the time and spending long periods of time away from
                  home but I wouldn't change my upbringing for anything else.
                </p>
              </span>
            </div>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default About;
