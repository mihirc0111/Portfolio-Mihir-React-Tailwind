import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part one - Courses */}
      <div className="flex flex-col w-full md:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Academics</h2>
        </div>
        <div className="py-2 lgl:py-4 font-titleFont flex flex-col gap-1">
          <p className="text-sm text-designColor tracking-[4px]">Advanced Coursework</p>
        </div>
        <div className="mt-2 lgl:mt-4 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-2 p-2">
          <ResumeCard
            title="AP Human Geography"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Computer Science Principles"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Biology"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Computer Science A"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP World History"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Statistics"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Calculus BC"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Calculus AB"
            result="5"
            des=""
          />
          <ResumeCard
            title="AP Chemistry"            
            result="5"
            des=""
          />
          <ResumeCard
            title="AP English Language and Composition"
            result="5"
            des=""
          />
        </div>
      </div>

      {/* Part Two - Test Scores */}
      <div className="flex flex-col w-full md:w-7/12">
        <div className="py-2 lgl:py-4 font-titleFont flex flex-col gap-1">
          <p className="text-sm text-designColor tracking-[4px]">Test Scores and GPA:</p>
        </div>
        <div className="mt-1 lgl:mt-2 flex flex-col gap-1">
          <p>Rank: 1 out of 692</p>
          <p>Unweighted GPA: 4.00 out of 4.00</p>
          <p>Weighted GPA: 6.93 out of 7.00</p>
          <p>SAT: 1560/1600</p>
        </div>
        <div className="mt-2 lgl:mt-4 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-2 p-2">
        <ResumeCard
            title="AP Physics II"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="AP English Literature and Composition"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="AP Spanish Language & Culture"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Computer Science 1 Honors"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Computer Science 2 Honors"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Computer Science 3 Honors"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Dual Enrollment Multivariable Calculus"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Dual Enrollment Linear Algebra"
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title="Dual Enrollment Discrete Mathematics"
            subTitle=""
            result=""
            des=""
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
