import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Dog Lover. 🐕", "Competitive Programmer. 🖥️", "Travel Fanatic. 📸","Bookworm. 📘", "Amatuer Gamer. 🎮"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Namaste 👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Archita Singh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a Indian-American high school senior from Houston, Texas. At highschool, I lead the computer science club and math honors society and am eager to learn anything related to these two fields. I also love to compete in or host SMASH tournaments, read, travel, and spend time with family. I adore my dog, Milo, who was named after the popular drink! Feel free to reach out to me at jsrarchita@gmail.com for potential collaborations or to chat about anything from coding to our shared love for dogs.         </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner