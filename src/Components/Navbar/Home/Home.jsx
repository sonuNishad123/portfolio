import React from "react";
import avatarImg from "../../../../public/profile.jpg";
const Home = () => {
  return (
    <div className="text-white flex  w-full justify-self-stretch  p-10 md:p-20">
      <div className="md:w-3/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl mb-4 font-bold flex leading-normal tracking-tighter bg-gradient-to-br from-yellow-400  to-red-500 bg-clip-text text-transparent">
          Hello, I am Sonu
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I'm a frontend web developer. Currently I am learning React js and I have completed some projects using HTML5, CSS3 and Javascript.
        </p>

        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-600 " ><a href="https://drive.google.com/file/d/16Dd76_K3-53cUDX5rg_at1CCwJij5Abg/view?usp=sharing" target="_blank">Download Resume</a>
          
        </button>
      </div>
      <div>
        <img className="w-1/3 ml-[400px]" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
