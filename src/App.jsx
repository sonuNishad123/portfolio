import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";
import About from "./Components/Navbar/About/About";
import Experience from "./Components/Navbar/Experience/Experience";
import Projects from "./Components/Navbar/Projects/projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Navbar/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen w-full overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-accent-gradient z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Dynamic ambient background light gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Modern dark-themed toast notification provider */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15, 23, 42, 0.9)",
            color: "#f8fafc",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
          },
        }}
      />
    </div>
  );
}

export default App;


