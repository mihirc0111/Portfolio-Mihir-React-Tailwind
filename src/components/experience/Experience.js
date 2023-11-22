import React from 'react'
import Title from '../layouts/Title'
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data/experienceData';

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Overview of my Past Internships and Research"
          des="Experience"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            date={exp.date}
            position={exp.position}
            employer={exp.employer}
            description={exp.description}
            chips={exp.chips}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience
