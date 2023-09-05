import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <motion.div
        className="flex-1"
        initial={{ width: "0%" }}
        animate={{ width: "50%", transition: { duration: 0.5 } }}
      >
        <div className="mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="President/Founder"
            subTitle="Computer Science Club"
            result="Cypress Falls High School"
            des={
              <>
                <div>• Coordinate team meetings and competitions as President</div>
                <div>• Help teach programming skills to over 25 members through interactive content. Self-published two textbooks used to prepare students.</div>
                <div>• Compete in various coding tournaments at the regional level</div>
              </>
            }
          />
          <ResumeCard
            title="President"
            subTitle="Math Honors Society"
            result="Cypress Falls High School"
            des={
              <>
                <div>• Provide overall leadership and guidance to the Mu Alpha Theta chapter.</div>
                <div>• Coordinate and oversee chapter activities, including math competitions, tutoring programs, and socials/fundraisers for over 50 members.</div>
                <div>• Uphold the values and mission of Mu Alpha Theta, promoting a passion for mathematics and its applications.</div>
              </>
            }
          />
          <ResumeCard
            title="President"
            subTitle="Key Club"
            result="Cypress Falls High School"
            des={
              <>
                <div>• Create engaging and successful club socials and fundraisers</div>
                <div>• Lead bi-monthly member meetings with over 200 attendees, promoting community service</div>
                <div>• Seek and share local volunteer opportunities with members through bi-monthly agendas</div>
              </>
            }
          />
        </div>
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ width: "0%" }}
        animate={{ width: "50%", transition: { duration: 0.5 } }}
      >
        <div className="mt-14 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Vice President"
            subTitle="DECA"
            result="Cypress Falls High School"
            des={
              <>
                <div>• Active leadership role, running meetings and events as Vice President</div>
                <div>• Help organize annual school-wide blood drive with over 80 donors each year</div>
                <div>• Tutor members in event selection in preparation from district to international level</div>
              </>
            }
          />
          <ResumeCard
            title="Academic Intern"
            subTitle="Research work under the guidance of Prof. Subhlok from the University of Houston. Currently working on publication for most recent work on evaluations of keyword identification algorithms."
            result="University of Houston"
            des=""
          />
          <ResumeCard
            title="Data Analytics Research Intern"
            subTitle=""
            result="MD Anderson Cancer Center"
            des="Intern at the local hospital under the guidance of Professor Antony Adair from Rice University. Previously presented research at the Ken Kennedy AI and Data Science Conference. Working on publication for research on noise reduction in Monte Carlo Dose Distributions."
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
