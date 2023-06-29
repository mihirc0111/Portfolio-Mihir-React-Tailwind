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
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MHT-CET Merit Ranker"
            subTitle="Entrance Exam for Engineering colleges in Maharashtra (2020)"
            result="153rd"
            des="Bagged a whooping 153rd Rank out of 1.74 Lakh students that registered for the exam. Got a 99.89 percentile in PCM! Got admission in VJTI, Mumbai - top BTechcollege in Maharashtra."
          />
          <ResumeCard
            title="SSC Merit Holder"
            subTitle="10th Std Exam conducted by Government of Maharashtra (2018)"
            result="94.20%"
            des="Bagged a whooping 94.20% in SSC exam. Awarded with a trophy by Mahesh Tutorials Coaching Institute!"
          />
          <ResumeCard
            title="Scholarship Holder"
            subTitle="7th Std Scholarship Exam conducted by Government of Maharashtra (2015)"
            result="206/300"
            des="Passed with good marks in the exam and also received scholarship money till the completion of 10th std. Rank:- 33/1617 who got the scholarship (all passed students are not given scholarship)."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="English Competency Analytical Test (ECAT)"
            subTitle="5th NELTAS ECAT GRAND FINALE (2015 - 2016)"
            result="80.5%"
            des="Certificate awarded for meritorious performance in the exam."
          />
          <ResumeCard
            title="The Bharat Scouts And Guides"
            subTitle=" Course during 9th and 10th Std (2016 - 2018)"
            result="A"
            des="Awarded 'A' grade certificate for successfully completing the course exams."
          />
          <ResumeCard
            title="Scholarship Exam"
            subTitle="4th Std Scholarship Exam conducted by Government of Maharashtra (2012)"
            result="230/300"
            des="Passed with good marks in the exam but not received scholarship. (all passed students are not given scholarship)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
