import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-6 md:px-12 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Sonu Nishad
          </h2>
          <p className="text-xs">
            © {currentYear} Sonu Nishad. All rights reserved.
          </p>
        </div>

        {/* Right Section: Socials */}
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              href="mailto:sonu0132001@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <MdOutlineEmail size={20} />
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              href="https://www.linkedin.com/in/sonu-nishad-582274321/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <CiLinkedin size={20} className="stroke-1" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105"
              href="https://github.com/sonuNishad123"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;