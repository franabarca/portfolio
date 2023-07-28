import { motion } from 'framer-motion'
import { SectionWrapper } from "../hoc";
import { styles } from '../style';
import { HerosCanvas, StarsCanvas } from './canvas';
import { imagenes } from "../constants";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto pt-[6rem]'>
      <div className="container flex flex-col items-center justify-center gap-5 mx-auto">
     

  <div className="animate-fade-left animate-once animate-duration-[3000ms]">
  
    <h1 className={`${styles.heroHeadText}`}>Hola, soy 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 ml-4">
        Francisco
      </span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100 animate-typing inline-block`}>
      Desarrollo aplicaciones web FullStack 🧑‍💻
    </p>
  </div>
  <div className="flex justify-center mx-auto">
  
  <div class="relative w-full max-w-lg">
    <div class="absolute top-1 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">

    <img className=" animate-fade animate-duration-1000" src={imagenes[1]} alt="Francisco" />

    </div>
  </div>

  </div>
</div>



      <div className="absolute xs:bottom-10 botton-32 w-full flex justify-center items-center">
        <a href="#sobre-mi">
          <div className="w-[35px] h-[64px] rounded-full border-4 border-indigo-500 flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-indigo-500/100 mb-1"
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  )
}
export default SectionWrapper(Hero, "");
