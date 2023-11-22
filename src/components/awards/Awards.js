import React from "react";

const AwardCard = ({ name, organization, date, description }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="flex flex-col gap-2">
        <h3 className="text-base uppercase text-designColor font-normal">{name}</h3>
        <p className="text-sm text-gray-300">{organization}</p>
        <p className="text-xs text-gray-400">{date}</p>
        <p className="text-sm tracking-wide mt-2 hover:text-gray-100 duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Awards = ({ awards }) => {
  return (
    <section className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-8">
        <h2 className="text-xl uppercase font-bold text-designColor">Awards & Honors</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            name={award.name}
            organization={award.organization}
            date={award.date}
            description={award.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Awards;
