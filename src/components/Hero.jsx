import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { imagenes } from '../constants';
import React, { useEffect, useState } from "react";
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const Hero = () => {


  return (
    <>
      <div className='container flex flex-col items-center justify-center gap-5 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-4'>
        <div className='animate-fade-left animate-once animate-duration-[3000ms]'>
          <h1 className={`${styles.heroHeadText}`}>
            Hola, soy
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 ml-4'>
              Francisco
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 inline-block`}>
            Desarrollo aplicaciones web FullStack
          </p>
        </div>

        <div className='flex justify-center mx-auto relative'>
          <div className='w-full max-w-lg'>
            <div className='absolute top-1 -left-4 w-36 h-36 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div className='absolute top-0 -right-4 w-36 h-36 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div className='absolute -bottom-8 left-20 w-36 h-36 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>

            <img
              className='animate-shake animate-infinite animate-duration-[3000ms] animate-ease-linear'
              src={imagenes[1]}
              alt='Francisco'
            />

            {/* Cambiamos el div con onClick a un botón */}

            <a href={`#sobre-mi`}
              style={{
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
              className="z-90 animate-bounce absolute bottom-[-30px] left-[45%] transform -translate-x-1/2 xs:bottom-[-50px] bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-violet-500 flex justify-center"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hero, '');

