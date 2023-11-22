import React from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import Robotics from "./components/robotics/Robotics";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        < Skills />
        <Projects />
        <Robotics />
        <Experience />
        <Resume />
      </div>
    </div>
  );
}

export default App;
