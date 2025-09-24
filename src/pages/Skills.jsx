import React from "react";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import react from "../assets/images/react.svg";
import typescript from "../assets/images/typescript.svg";
// import redux from "../assets/images/redux.svg";
import tailwind from "../assets/images/tailwindcss.svg";
import Mui from "../assets/images/material-ui.svg";
import javaScript from "../assets/images/javascript.svg";
import  Go from "../assets/images/Go.svg";
import mySql from "../assets/images/mysql.svg"
import kafka from "../assets/images/kafka.svg"
import nodeJs from "../assets/images/nodejs.svg"
import mongoDb from "../assets/images/mongodb.svg"
import postman from "../assets/images/postman.svg"
import Html5 from "../assets/images/html-5.svg"
import css3 from "../assets/images/css-3.svg"
import git from "../assets/images/github.svg";
import redux from "../assets/images/redux.svg"
import antd from "../assets/images/antdesign.svg"
import postgres from "../assets/images/postgresql.svg"
import Divider from "../components/Divider";

const Skills = () => {
  const usingNowSkills = [
    { icon: react, title: "React" },
    { icon: typescript, title: "TypeScript" },
    { icon: redux, title: "Redux" },
    { icon: tailwind, title: "Tailwind CSS" },
    {icon: antd , title: "Antdesign"},
    {icon: Mui , title: "Mui"},
    {icon: javaScript , title: "JavaScript"},
    { icon: git, title: "Git" },  
  ];

  const learningSkills = [
    { icon: Go, title: "Go lang" },
    { icon: mySql, title: "MySQL" },
    { icon: kafka, title: "kafka" },
  ];

  const otherSkills = [
    { icon: nodeJs , title: "Node js", subtitle: "C1/C2" },
    { icon: mongoDb, title: "Mongo DB", subtitle: "B1/B2" },
    { icon: postman, title: "Postman" },
    {icon: postgres, title: "Postgresql"},
    { icon: Html5, title: "Html 5" },
    { icon: css3, title:"css3"},
  ];

  return (
    <section id="skills" className="bg-gray-200 py-20 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Skills Heading */}
        <SectionHeading title="SKILLS" className="mb-16" />

        {/* Using Now Section */}
        <div className="mb-16">
          <h3 className="text-lg font-bold tracking-wider text-black mb-8">
            USING NOW:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {usingNowSkills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mb-16">
          <h3 className="text-lg font-bold tracking-wider text-black mb-8">
            LEARNING:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {learningSkills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>

        {/* Other Skills Section */}
        <div>
          <h3 className="text-lg font-bold tracking-wider text-black mb-8">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium tracking-wider text-black">
                  {skill.title}
                </span>
                {skill.subtitle && (
                  <span className="text-xs text-gray-600 mt-1">
                    {skill.subtitle}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;
