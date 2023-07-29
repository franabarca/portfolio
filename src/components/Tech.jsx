import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { Tooltip } from 'react-tooltip'; // Importar el componente Tooltip
import 'react-tooltip/dist/react-tooltip.css';

const Tech = () => {
  return (
    <div className="max-w-800 mx-auto border-purple-500 border rounded-lg p-8 animate-fade">
      {/* ... */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Conocimiento de
        </p>
        <h2 className={`${styles.sectionHeadText} text-center pb-10`}>
          Tecnologias
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 animate-jump-in animate-duration-[2000ms]
          ' key={technology.name}>
            {/* Icono con Tooltip */}
            <a data-tooltip-id="my-tooltip" data-tooltip-content={technology.description}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="rounded-full border-black border-4 min-w-[50px] xl:min-w-[80px]"
                data-event="mouseover" // Mostrar Tooltip al hacer hover
              />
            </a>
          </div>
        ))}
      </div>
      {/* Tooltip */}
      <Tooltip id="my-tooltip" /> 
    </div>
  );
};

export default SectionWrapper(Tech, "");





