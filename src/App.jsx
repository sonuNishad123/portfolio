import { RiMenu2Line } from "react-icons/ri";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";
import About from "./Components/Navbar/About/About";
import Experience from "./Components/Navbar/Experience/Experience";
import ProjectCard from "./Components/Navbar/Projects/ProjectCard";
import Footer from "./Components/Navbar/Footer/Footer";

function App(){
  return (
  <div className="bg-gray-900 h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <ProjectCard />
    <Footer />
    </div>
  );
}
export default App;
