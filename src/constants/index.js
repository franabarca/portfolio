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
    petcuy
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
      name: "Python",
      icon: python,
    },
    {
      name: "Postgresql",
      icon: postgresql,
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
        "Aplicación móvil enfocada a la reportar la perdida de mascotas, utilizando google maps y variados servicios en la nube.",
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
      source_code_link: "https://github.com/franabarca/pet-cuy/tree/master",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };