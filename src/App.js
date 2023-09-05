import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Interests from "./components/about/Features";

import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Interests />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
