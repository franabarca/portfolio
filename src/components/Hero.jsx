import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { imagenes } from '../constants';
import React, { useEffect, useState } from "react";

const Terminal = () => {
  const [lines, setLines] = useState([]);
  
  const terminalContent = [
    { type: 'input', text: 'cat francisco.json' },
    { 
      type: 'output', 
      text: `{
  "nombre": "Francisco Abarca",
  "rol": "Desarrollador FullStack & Backend",
  "empresa": "Arq-IT",
  "stack": ["Java", "Spring Boot", "React", "SQL", "AWS", "Flutter"]
}`
    },
    { type: 'input', text: 'git status' },
    { type: 'output', text: 'On branch master\nYour branch is up to date.\n\nChanges to be committed:\n\tmodified:   skills.md\n\tmodified:   projects.md' },
    { type: 'input', text: 'echo "Listo para crear software increíble."' },
    { type: 'output', text: 'Listo para crear software increíble.' }
  ];

  useEffect(() => {
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let tempLines = [];

    const typeNextChar = () => {
      if (currentLineIndex >= terminalContent.length) return;

      const currentItem = terminalContent[currentLineIndex];

      if (currentItem.type === 'input') {
        if (currentCharIndex === 0) {
          tempLines.push({ type: 'input', text: '' });
          setLines([...tempLines]);
        }

        if (currentCharIndex < currentItem.text.length) {
          tempLines[tempLines.length - 1].text += currentItem.text[currentCharIndex];
          setLines([...tempLines]);
          currentCharIndex++;
          setTimeout(typeNextChar, 40); // Typing speed
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          setTimeout(typeNextChar, 250); // Pause before output
        }
      } else {
        tempLines.push({ type: 'output', text: currentItem.text });
        setLines([...tempLines]);
        currentLineIndex++;
        currentCharIndex = 0;
        setTimeout(typeNextChar, 500); // Pause before next input
      }
    };

    const timer = setTimeout(typeNextChar, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-black/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden font-mono text-[11px] sm:text-xs text-left shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 mt-6 mx-auto">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-white/40 text-[10px] sm:text-xs font-sans">bash - francisco@portfolio</div>
        <div className="w-10"></div>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 sm:p-5 h-[230px] overflow-y-auto space-y-2">
        {lines.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line.type === 'input' ? (
              <div className="flex">
                <span className="text-purple-400 mr-2 select-none">francisco@portfolio:~$</span>
                <span className="text-emerald-400">{line.text}</span>
              </div>
            ) : (
              <pre className="text-slate-300 leading-relaxed pl-4 border-l border-white/5 overflow-x-auto font-mono">
                <code>{line.text}</code>
              </pre>
            )}
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex items-center">
          <span className="text-purple-400 mr-2 select-none">francisco@portfolio:~$</span>
          <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {


  return (
    <>
      <div className='container flex flex-col items-center justify-center gap-6 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-20 mb-10 relative'>
        <div className='animate-fade-left animate-once animate-duration-[3000ms] text-center'>
          <h1 className={`${styles.heroHeadText}`}>
            Hola, soy
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 ml-4'>
              Francisco
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 inline-block`}>
            Especialista en backend y soluciones fullstack.
          </p>
        </div>
        
        <button
          onClick={() => window.open('/portfolio/cv/CV_Francisco_Abarca.pdf', '_blank')}
          className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 transition duration-300 hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-indigo-500/50"
        >
          Descargar CV
        </button>

        {/* Terminal interactiva */}
        <Terminal />

        {/* Flecha rebotando */}
        <div className='flex justify-center mx-auto mt-6'>
          <a href="#proyectos"
            style={{
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
            className="z-50 animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-200"
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
    </>
  );
};

export default SectionWrapper(Hero, '');


