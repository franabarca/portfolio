import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
    <div className="w-full flex justify-between items-center max-w7x1 mx-auto">
      <Link to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}>

        <img src={logo} alt="logo" className="hover:animate-ping hover:animate-ease-in w-11 h-11 object-cotain animate-ping animate-once animate-reverse  "/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex animate-fade-right animate-once animate-duration-[3000ms] ">
          <span className="hover:animate-rotate-y hover:animate-thrice hover:animate-ease-in">Francisco&nbsp;</span>
           <span className="md:block hidden hover:animate-rotate-x hover:animate-thrice hover:animate-ease-in">|&nbsp;Desarrollador FullStack</span>
           </p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((link) => (
   <li
   key={link.id}
   className={`${
     active === link.title
       ? "border-x-4 border-indigo-800 rounded ease-in-out delay-150 bg-indigo-800 "
       : ""
   } ${
     link.title === "Contacto"
       ? "animate-bounce animate-infinite animate-duration-1000 animate-ease-in-out shadow-lg hover:shadow-indigo-500/50 border-x-4 border-transparent rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300"
       : "shadow-lg hover:shadow-indigo-500/50 border-x-4 border-transparent rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300"
   } text-[18px] font-medium`}
   onClick={() => setActive(link.title)}
 >
    <a href={`#${link.id}`} style={{ whiteSpace: "nowrap" }}>
      {link.title}
    </a>
  </li>
))}

      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
           alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
             onClick={() => setToggle(!toggle)}  />

          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) =>(
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} 
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                } }>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

      </div>
    </div>
    </nav>
  )
}

export default Navbar