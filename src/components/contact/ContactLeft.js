import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Archita Singh</h3>
        
        <p className="text-base text-gray-400 tracking-wide">
        I'm a Indian-American high school senior from Houston, Texas. At highschool, I lead the computer science club and math honors society and am eager to learn anything related to these two fields. I also love to compete in or host SMASH tournaments, read, travel, and spend time with family. I adore my dog, Milo, who was named after the popular drink! Feel free to reach out to me at jsrarchita@gmail.com for potential collaborations or to chat about anything from coding to our shared love for dogs.      
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/architasingh0825" target="_blank" rel="noopener noreferrer">
            <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="mailto:jsrarchita@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/archita-singh-b93414217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft