import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState("");

  const themes = [
    { name: "Indigo", class: "", color: "bg-indigo-500" },
    { name: "Emerald", class: "theme-emerald", color: "bg-emerald-500" },
    { name: "Rose", class: "theme-rose", color: "bg-rose-500" },
    { name: "Violet", class: "theme-violet", color: "bg-violet-500" },
    { name: "Amber", class: "theme-amber", color: "bg-amber-500" },
  ];

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "";
    setActiveTheme(savedTheme);
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  // Monitor scroll to apply sticky bg change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeChange = (themeClass) => {
    // Remove all theme classes
    themes.forEach((t) => {
      if (t.class) {
        document.documentElement.classList.remove(t.class);
      }
    });

    // Add new theme class
    if (themeClass) {
      document.documentElement.classList.add(themeClass);
    }

    setActiveTheme(themeClass);
    localStorage.setItem("portfolio-theme", themeClass);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-4 shadow-lg shadow-slate-950/20" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#Home" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-black tracking-wider text-accent-gradient group-hover:opacity-80 transition-opacity">
              SONU.DEV
            </span>
          </a>

          {/* Desktop Menu & Theme Picker */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 font-medium">
              {["About", "Experience", "projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-gradient hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Accent Switcher (Desktop) */}
            <div className="flex items-center gap-2 border-l border-slate-800/80 pl-6 ml-2">
              <span className="text-xs text-slate-400 font-semibold mr-1">Accent:</span>
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.class)}
                  title={`Switch to ${theme.name} Theme`}
                  className={`w-4 h-4 rounded-full ${theme.color} border transition-transform hover:scale-125 focus:outline-none ${
                    activeTheme === theme.class ? "border-white scale-110" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden text-white focus:outline-none p-1 z-50 hover:bg-slate-800/40 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine size={26} /> : <RiMenu2Line size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center text-xl font-semibold mb-12">
          {["About", "Experience", "projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200 hover:text-white transition-colors active:text-indigo-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Accent Switcher (Mobile) */}
        <div className="flex flex-col items-center gap-3 bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Choose Accent Theme</span>
          <div className="flex items-center gap-4">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => {
                  handleThemeChange(theme.class);
                  setMenuOpen(false);
                }}
                className={`w-6 h-6 rounded-full ${theme.color} border-2 transition-transform active:scale-95 focus:outline-none ${
                  activeTheme === theme.class ? "border-white scale-110" : "border-slate-850"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


