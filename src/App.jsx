import { RiMenu2Line } from "react-icons/ri";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";
import About from "./Components/Navbar/About/About";
import Experience from "./Components/Navbar/Experience/Experience";
import ProjectCard from "./Components/Navbar/Projects/ProjectCard";
import Footer from "./Components/Navbar/Footer/Footer";
import Contact from "./Components/Contact";
import Projects from "./Components/Navbar/Projects/projects";


function App(){
  return (
  <div className="bg-gray-700 h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <h1 className="text-center text-2xl md:text-4xl text-white font-bold">Projects</h1>

    <Projects/>
    <Contact />
    <Footer />
    </div>
  );
}
export default App;
