import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[85%] h-[85%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>


      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => {
          if (point.includes('COPEC') || point.includes('Clínica INDISA') || point.includes('Bice Vida')) {
            return (
              <div
                key={`experience-point-${index}`}
                className='text-purple-600 text-[14px] pl-1 font-bold'
              >
                {point}
              </div>
            );
          } else {
            return (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            );
          }
        })}
      </ul>
      
      <span className="mt-6 inline-grid grid-cols-5 gap-4 pl-8 pt-2">
  {experience.techs &&
    experience.techs.map((tech, index) => (
      <img
        key={`experience-tech-${index}`}
        src={tech}
        className="rounded-full border-black border-4 min-w-[50px] min-h-[50px] xl:min-w-[80px] xl:min-h-[80px] bg-white"
      />
    ))}
</span>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Mundo laboral
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiencia
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col text-justify'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experiencia");