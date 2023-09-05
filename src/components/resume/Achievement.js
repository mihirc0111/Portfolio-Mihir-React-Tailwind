import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Awards</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NCWIT Affiliate Award Winner for Aspirations in Computing"
            subTitle="Greater Houston"
            des="This prestigious award celebrates individuals who have demonstrated exceptional skills, leadership, and a commitment to advancing diversity in technology."
          />
          <ResumeCard
            title="DECA Competitive Events Awards"
            subTitle="Entrepreneurship Innovation Plan Event & Marketing Communications Series"
            des="International finalist in Marketing Communications Series Event and state finalist in Entrepreneurship Innovation Plan Event. Presented a business solutions proposal to judges, placing in the top 20 of 200 students internationally."
          />
          <ResumeCard
            title="CyberStart America"
            subTitle="National Cyber Scholarship Semifinalist"
            des="Earned the distinction of National Cyber Scholar in the 2023 National Cyber Scholarship program, showcasing exceptional cybersecurity expertise. This rank is awarded to the highest achieving students nationally competing in the CyberStart America program.
            "
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="USA Computing Olympiad"
            subTitle="Gold Division"
            des="Placed in the top percentile of competitive programmers nationwide, signifying exceptional problem-solving and computational skills"
          />
          <ResumeCard
            title="AP Scholar with Distinction"
            subTitle="x2"
            des="The AP Scholar with Distinction Award is granted to students who receive an average score of at least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more of these exams."
          />
          <ResumeCard
            title="National Merit Semifinalist"
            subTitle="Texas"
            des="Honored as a National Merit Semifinalist in Texas, achieving this recognition places the recipient among the top 1% of high school students in the state based on their exceptional academic performance and PSAT scores. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
