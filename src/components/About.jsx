import React, { useState, useRef, useEffect} from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ServiceCard = ({ index, title, icon, onClick }) => (
  <Tilt  className='sm:w-[250px] w-full' >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      onClick={() => onClick()}
      
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleModalOpen = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedService(null);
    setModalOpen(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
  };
  const modalStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.8)",
    
  };
  const modalRef = useRef();

useEffect(() => {
  const handleScroll = (e) => {
    const target = e.target;
    const modalContainer = modalRef.current;

    // Si el scroll ocurre fuera del contenedor del modal, cierra el modal
    if (modalContainer && !modalContainer.contains(target)) {
      handleModalClose();
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  
  // Efectos para la animación del modal
  const modalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const codeString= `                      import React, { useState } from "react";
                      import { motion } from "framer-motion";
                      import { Tilt } from "react-tilt";
                      import { fadeIn, textVariant } from "../utils/motion";

                      <Tilt className="sm:w-[250px] w-full">
                        <motion.div
                          variants={fadeIn("right","spring",selectedService.index * 0.5,0.75
                          )}
                          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                        >
                          <div
                            options={{max: 45,scale: 1,speed: 450,
                            }}
                            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                          >
                            <img
                              src={selectedService.icon} alt="web-development"className="w-16 h-16 object-contain"
                            />
                            <h3 className="text-white text-[20px] font-bold text-center">
                              {selectedService.title}
                            </h3>
                          </div>
                        </motion.div>
                      </Tilt>`
  const [copy, setCopy] = useState(false);
  return (
    <>
    <div className="grid grid-rows-2 md:grid-flow-col gap-3 md:items-center ">
    <div className="row-span-2 lg:col-span-2">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Presentación<nav></nav></p>
        <h2 className={styles.sectionHeadText}>Sobre mí
        </h2>
      </motion.div>
      
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-secondary text-[17px] col-span-2... leading-[30px] indent-8 text-justify mt-7"
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
      <div className="mx-auto row-span-3 max-w-[300px] xl:mt-20 lg:mt-20 lg:mr-8 lg:ml-5 min-w-[300px]  rounded-t-lg items-center  ">

      <img src="/src/assets/francisco.png" alt="Descripción de la imagen" className="animate-fade animate-once animate-duration-[2000ms] rounded-full border-double border-4 border-violet-500 "
      />
    </div>
    </div>


      <div className='mt-20 flex flex-wrap gap-10'>

      {services.map((service, index) => (
           
              <ServiceCard 
              index={index} {...service} 
              key={service.title} 
              onClick={() => handleModalOpen(service)} />


        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <motion.div
        ref={modalRef}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleModalClose}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        style={modalStyles}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleModalClose}>
          <div className="maxw-2x1 min-w[25rem] bg-[#3a404d] rounded-md overflow-hidden max-h-[600px]" onClick={stopPropagation}>
            <div className="flex justify-between px-4 text-white text-xs items-center">
              <p className="text-sm">Código utilizado</p>

              {copy ?(
                <button className="py-1 inline-flex items-center gap-1">
                <span className="text-base mt-1">
                <ion-icon name="checkmark-sharp" ></ion-icon>
                </span>
                Copiado!
              </button>

              ):(
              <button className="py-1 inline-flex items-center gap-1" onClick={() =>{{
                navigator.clipboard.writeText(codeString);
                setCopy(true)
                setTimeout
              }}}>
              <span className="text-base mt-1">
              <ion-icon name="clipboard-outline" ></ion-icon>
              </span>
              Copiar código
            </button>)}
              
            </div>
            <SyntaxHighlighter
        language="jsx"
        style={atomOneDark}
        customStyle={{ padding: "25px", wordWrap: "break-word", overflowY: "auto" }}
        wrapLongLines={true}
      >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(About, "sobre-mi");