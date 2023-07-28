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
    javascriptt
  } from "../assets";
  
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
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Desarrollador FullStack",
      company_name: "Banco Falabella",
      icon: falabella,
      iconBg: "#015231",
      date: "Enero 2023 - April 2023",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };