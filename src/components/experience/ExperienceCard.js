import React from "react";
import Chip from "@mui/material/Chip";

const ExperienceCard = ({ date, position, employer, description, chips }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base uppercase text-designColor font-normal">
                {position}
              </h3>
              <p className="text-sm text-gray-300">{employer}</p>
              <p className="text-xs text-gray-400">{date}</p>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {description}
          </p>
          <div className="mt-2">
            {chips && Array.isArray(chips) && chips.map((chip, index) => (
              <Chip key={index} label={chip} className="m-1" 
              sx={{
                color: "white",
                backgroundColor: "#3d3d3d",
                borderColor: "#202327",
                "&:hover": {
                  backgroundColor: "#202327",
                  borderColor: "#202327",
                },
              }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
