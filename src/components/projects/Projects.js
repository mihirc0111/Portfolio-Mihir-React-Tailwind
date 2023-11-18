import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Rate My Fit"
          des=" A web-based machine learning tool for rating outfits."
          src={projectOne}
          githubLink="https://github.com/antoinedang/McHacks2023"
          websiteLink="https://github.com/antoinedang/McHacks2023"
          chips={["Python","PyTorch","Flask","HTML","CSS","JavaScript","Computer Vision"]}
        />
        <ProjectsCard
          title="Intelligent Schedule Builder"
          des="A free web app to help McGill students plan their course load from freshman to senior year."
          src={projectTwo}
          githubLink="https://github.com/ben-jamming/Intelligent-Schedule-Builder"
          websiteLink="https://github.com/ben-jamming/Intelligent-Schedule-Builder"
          chips={["React", "Python", "MongoDB","NextJS", "TailwindCSS","TypeScript"]}
        />
        <ProjectsCard
          title="Inverted Pendulum Balancing"
          des="Self-balancing pole agent using computer vision and control theory."
          src={projectThree}
          githubLink="https://github.com/ben-jamming/COMP-417-"
          websiteLink="https://github.com/ben-jamming/COMP-417-"
          chips={["Python", "OpenCV", "Kalman Filter", "Q-Learning", "PID Controller"]}
        />
      </div>
    </section>
  );
}

export default Projects