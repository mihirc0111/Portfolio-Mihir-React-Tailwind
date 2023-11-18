import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["McGill Computer Science Student",
       "Project Manager for McGill Robotics", 
       "Software Engineer",
       "Avid Skier, Hiker, and Adventurer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    const email = "benhepditch@gmail.com";
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ben Hepditch</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a computer science student at McGill University with a passion for machine learning, quantitative trading, and robotics.
          When I'm not building robots or developing software, I love shredding the slopes of Whistler, playing basketball, and exploring the outdoors. 
          You can contact me here: <a href={`mailto:${email}`} className="text-designColor underline">benhepditch@gmail.com</a>
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner