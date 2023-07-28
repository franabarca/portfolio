import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { imagenes } from "../constants";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="sm:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid grid-rows-2 md:grid-flow-col gap-3 md:items-center ">
        <div className="row-span-2 lg:col-span-2">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Presentación</p>
            <h2 className={styles.sectionHeadText}>Sobre mí</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] col-span-2... leading-[30px] indent-8 text-justify mt-7"
          >
            Soy{" "}
            <a
              className="underline decoration-purple-800/80 hover:decoration-purple-500 decoration-2 font-bold"
              href="https://www.linkedin.com/in/francisco-abarca-programmer/"
              target="_blank"
            >
              Francisco Abarca
            </a>
            , egresado de la carrera{" "}
            <a
              className="underline decoration-indigo-500/50 hover:decoration-indigo-400 decoration-2 font-bold"
              href="https://www.duoc.cl/carreras/analista-programador-computacional/?gclid=Cj0KCQjw_O2lBhCFARIsAB0E8B9QONm_1KUDOvzOWkfwklrALYBDdUpLSEu9DeJ_m3MWNRdwa9LpY7QaAqwoEALw_wcB"
              target="_blank"
            >
              Analista en Programación Computacional
            </a>{" "}
            &nbsp;en Duoc UC Viña del Mar. Me apasiona la programación y el continuo
            aprendizaje de nuevas tecnologías. Cuento con experiencia en el uso de
            diversos lenguajes de programación, motores de bases de datos y la
            aplicación de metodologías ágiles. Además, tengo conocimientos en la
            creación y manejo de APIs, así como familiaridad con algunos aspectos de
            los comandos shell. Aprendo rápido y mi enfoque principal y mayor
            interés radican en el desarrollo FullStack, abarcando desde el diseño
            hasta la implementación.
          </motion.p>
        </div>
        <div className="mx-auto row-span-3 max-w-[300px] xl:mt-20 lg:mt-20 lg:mr-8 lg:ml-5 min-w-[300px]  rounded-full items-center  ">
          <img src={imagenes[0]} alt="Descripción de la imagen" className="animate-fade animate-once animate-duration-[2000ms] rounded-full border-4 border-violet-500" />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard index={index} {...service} key={service.title} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "sobre-mi");
