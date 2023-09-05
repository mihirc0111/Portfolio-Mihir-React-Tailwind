import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Indexed Captioned Searchable Videos"
          des="Utilizes automatic video indexing, captioning, and search within and across recordings to transform a classroom lecture video into an interactive learning resource. Working on the implementation of document scanning to search through supplementary materials and lecture keyword identification. "
          src={projectOne}
          githubLink=""
          websiteLink=""

        />
        <ProjectsCard
          title="Denoising of Monte Carlo Dose Distributions"
          des="Currently developing Python program using Ski-Kit Learn that leverages the U-Net neural network to discern noise patterns inherent in Monte Carlo Dose distributions (a radiation treatment for cancer) based on a collection of reference images to create high-quality graphs in significantly less time."
          src={projectTwo}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Open-Data Driven Risk Assessment Metric for Covid-19 in Texas by County"
          des="Examined correlations between possible risk factors and Covid-19 infection and mortality. Implemented elementary unsupervised machine learning clustering analysis (k-means clustering, neural networks, etc). Presented poster at Rice University’s Ken Kennedy AI and Data Science Conference."
          src={projectThree}
          githubLink=""
          websiteLink="https://drive.google.com/file/d/1kE59xFsdYZKoMg0AGFiQs3ZhD_oxJ1kw/view?usp=sharing"
        />
        <ProjectsCard
          title="Medicine Manager"
          des="Created an application that reminds users of when and how to take their medications according to their prescription (including dosages) using Java in Google’s Android Studio and a MySQL Database."
          src={projectFour}
          githubLink=""
          websiteLink="https://drive.google.com/file/d/1eEZTkm6bdTsktaT8we5h_lRErrFq8VWt/view?usp=sharing"
        />
        <ProjectsCard
          title="AccessCode"
          des="Designed a website using React for nonprofit organization. Displays information of upcoming contests and resources, including access to three self-published textbooks on competitive programming."
          src={projectFive}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Houston & Harris County Animal Volunteers App"
          des="Currently designing an app for local shelter to help dogs at risk of euthanization find homes. Used Google's Flutter and Firebase to create the app, store user information, and store available dog information."
          src={projectSix}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects