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
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="IPL-Win-Predictor"
          des=" A ML project using logistic regression to find out the win probability of the chasing team in an IPL match. Used Kaggle dataset from 2008-2019."
          src={projectOne}
          githubLink="https://github.com/mihirc0111/IPL-Predictor-Mihir"
          websiteLink="https://mihirc0111-ipl-predictor-mihir-app-8s1ct4.streamlit.app/"

        />
        <ProjectsCard
          title="Mi-Blog-Van"
          des=" This is a blog website have a EJS, Node & Express as backend and Mongoose & MongoDB database."
          src={projectTwo}
          githubLink="https://github.com/mihirc0111/Mi-Blog-Van"
          websiteLink="https://mihirs-blog-website.onrender.com/"
        />
        <ProjectsCard
          title="Secret Sharing Website"
          des=" This is a website for posting secrets anonymously with an authentication system ."
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
        <ProjectsCard
          title="After School Diaries"
          des=" To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!"
          src={projectFour}
          githubLink="https://github.com/mihirc0111/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website"
          websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
        />
        <ProjectsCard
          title="Weather Website"
          des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
          src={projectFive}
          githubLink="https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js"
          websiteLink="https://mihirs-weather-website.onrender.com/"
        />
        <ProjectsCard
          title="Face Detection"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects