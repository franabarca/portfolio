
import 'react-tooltip/dist/react-tooltip.css';
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    falabella,
    shopify,
    threejs,
    python,
    postgresql,
    django,
    dockerr,
    javascriptt,
    portafolio,
    astronauta,
    francisco,
    petcuy,
    angular,
    java,
    oracle,
    mysql
  } from "../assets";

  export const imagenes = [francisco, astronauta
  ];

  export const navLinks = [
    {
      id: "sobre-mi",
      title: "Sobre mí",
    },
    {
      id: "experiencia",
      title: "Experiencia",
    },
    {
      id: "contacto",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Diseñador Web",
      icon: web,
    },
    {
      title: "Mentalidad Ágil",
      icon: mobile,
    },
    {
      title: "Desarrollador FullStack",
      icon: backend,
    },
    {
      title: "Gestor de Bases de Datos",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      description:"HTML5-Nivel-Intermedio"
    },
    {
      name: "CSS 3",
      icon: css,
      description:"CSS3-Nivel-Intermedio"
    },
    {
      name: "JavaScript",
      icon: javascript,
      description:"JavaScript-Nivel-Intermedio"
    },
    {
      name: "TypeScript",
      icon: typescript,
      description:"TypeScript-Nivel-Intermedio"
    },
    {
      name: "Python",
      icon: python,
      description:"TypeScript-Nivel-Intermedio"
    },
    {
      name: "Django",
      icon: django,
      description:"Django-Nivel-Intermedio"
    },
    {
      name: "Angular",
      icon: angular,
      description:"Angular-Nivel-Intermedio"
    },
    {
      name: "Java",
      icon: java,
      description:"Java-Nivel-Intermedio"
    },
    {
      name: "Mysql",
      icon: mysql,
      description:"Mysql-Nivel-Intermedio"
    },
    {
      name: "Oracle",
      icon: oracle,
      description:"Oracle-Nivel-Avanzado"
    },
    {
      name: "Postgresql",
      icon: postgresql,
      description:"Postgresql-Nivel-Intermedio"
    },
    {
      name: "React JS",
      icon: reactjs,
      description:"React JS-Nivel-Intermedio"
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      description:"Redux Toolkit-Nivel-Básico"
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      description:"Tailwind CSS-Nivel-Intermedio"
    },
    {
      name: "Node JS",
      icon: nodejs,
      description:"Node JS-Nivel-Intermedio"
    },
    {
      name: "Three JS",
      icon: threejs,
      description:"Three JS-Nivel-Básico"
    },
    {
      name: "git",
      icon: git,
      description:"Git-Nivel-Intermedio"
    },
    {
      name: "figma",
      icon: figma,
      description:"Figma-Nivel-Intermedio"
    },
    {
      name: "docker",
      icon: docker,
      description:"Docker-Nivel-Básico"
    },
  ];
  
  const experiences = [
    {
      title: "Desarrollador FullStack",
      company_name: "Banco Falabella",
      icon: falabella,
      iconBg: "#015231",
      date: "Enero 2023 - Abril 2023",
      points: [
        "Diseñé una aplicación web desde cero, la aplicación obtenía los datos(excel) de distintas plataformas utilizadas por los colaboradores de Banco, unificandolos dentro de una base de datos.",
        "Con solo escribir el rut del colaborador, se podía obtener de manera fácil y rápida todas las cuentas de usuario que tenía operativas ese colaborador.",
        "De esta manera, se agilizaba el proceso de eliminación de cuentas de usuario cuando el colaborador era dado de baja.",
        "Utilicé la librería pandas para obtener dataframes de estos archivos y así poder unificarlos y enviarlos a la base de datos.",
        "Tecnologías utilizadas: Django, Python, JavaScript, HTML5, CSS3, Bootstrap, PostgreSQL, y Docker"
      ],
      techs:[python,postgresql,django,dockerr,javascriptt]

    },

  
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },

  ];
  
  const projects = [
    {
      name: "Portafolio",
      description:
        "Aplicación web para demostrar un poco sobre mis conocimientos y mi trabajo como programador.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portafolio,
      source_code_link: "https://github.com/franabarca/portfolio",
    },
    {
      name: "Pet Cuy",
      description:
        "Aplicación móvil enfocada en reportar la perdida de mascotas, utilizando google maps y variados servicios en la nube.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "cloudinary",
          color: "pink-text-gradient",
        },
      ],
      image: petcuy,
      source_code_link: "https://github.com/franabarca/pet-cuy",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };