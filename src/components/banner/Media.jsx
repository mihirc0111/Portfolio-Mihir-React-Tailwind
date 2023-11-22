import React from 'react';
import { FaLinkedinIn} from "react-icons/fa";
import { SiGithub, SiGmail} from "react-icons/si";

const Media = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/ben-jamming" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="mailto:benhepditch@gmail.com">
                <SiGmail />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/ben-hepditch/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
