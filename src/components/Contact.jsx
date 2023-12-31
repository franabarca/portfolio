import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { wasap, linkedin, gmail } from "../assets";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rg3ihti',
        'template_zbxz1qb',
        {
          from_name: form.name,
          to_name: "Francisco Abarca",
          from_email: form.email,
          to_email: "f.abarcaprogramer@gmail.com",
          message: form.message,
        },
        'Z8WDcd56q8I5fot0y'
      )
      .then(
        () => {
          setLoading(false);
          alert("Muchas gracias. Me pondré en contacto con usted lo antes posible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Algo salió mal. Por favor, inténtelo de nuevo.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Póngase en contacto</p>
        <h3 className={styles.sectionHeadText}>Contactar</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cómo te llamas?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensaje</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Escriba su mensaje.'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <div className='flex justify-between items-center gap-4'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            <div className='flex space-x-4'>
              <img
                onClick={() => window.open("https://wa.me/56930930838", "_blank")}
                src={wasap}
                alt='source code'
                className='w-12 h-12 rounded-full border-blue-950 border-4 cursor-pointer'
              />
              <img
                onClick={() => window.open("https://www.linkedin.com/in/francisco-abarca-cock-programmer/", "_blank")}
                src={linkedin}
                alt='source code'
                className='w-12 h-12 rounded-full border-blue-950 border-4 cursor-pointer'
              />
              <img
                onClick={() => window.open("mailto:f.abarcaprogramer@gmail.com", "_blank")}
                src={gmail}
                alt='source code'
                className='w-12 h-12 rounded-full border-blue-950 border-4 cursor-pointer'
              />
            </div>
          </div>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contacto");