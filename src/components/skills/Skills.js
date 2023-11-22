import React from "react";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiCplusplus,
  SiPostgresql,
  SiOcaml,
  SiKeras,
  SiPandas,
  SiLinux,
  SiGnubash,
  SiApacheairflow,
  SiFlask,
  SiDjango,
  SiOpencv,
  SiC,
  SiRos,
} from "react-icons/si";
import Title from "../layouts/Title";

const Skills = () => {
  return (
    <section className="mb-2 text-left">
      <Title
        title="Tools, Languages, Libraries, and Frameworks I've Used in Projects or School"
        des="Skills"
      />
      <div>
        <div className="mb-4">
          <h3 className="text-sm uppercase font-titleFont mb-2">Languages</h3>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiOcaml />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiC />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm uppercase font-titleFont mb-2">
            Libraries/Frameworks
          </h3>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTensorflow />
            </span>
            <span className="bannerIcon">
              <SiPytorch />
            </span>
            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm uppercase font-titleFont mb-2">Tools</h3>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiRos />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
            <span className="bannerIcon">
              <SiLinux />
            </span>
            <span className="bannerIcon">
              <SiGnubash />
            </span>
            <span className="bannerIcon">
              <SiApacheairflow />
            </span>
            <span className="bannerIcon">
              <SiPandas />
            </span>
            <span className="bannerIcon">
              <SiKeras />
            </span>
            <span className="bannerIcon">
              <SiOpencv />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
