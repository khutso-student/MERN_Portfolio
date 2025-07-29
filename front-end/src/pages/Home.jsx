import bg from '../assets/bg.png';
import profile from '../assets/Profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { BiShapeCircle } from "react-icons/bi";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Home() {

    const controls = useAnimation();
    const ref = useRef(null);

    const handleMouseEnter = () => {
      controls.start({
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 5,
          ease: 'linear',
        },
      });
    };

    const handleMouseLeave = () => {
      controls.stop(); // stops animation
      controls.set({ rotate: 0 }); // reset rotation
    };



  return (
    <div
      className="w-full h-screen bg-cover bg-center"
       >
        <BiShapeCircle className='absolute text-[80px] text-[#0228388c] left-10 top-20 mb-50 animate-spin'/>
        <div className='flex flex-col justify-center items-center  bg-[#000000af] w-full h-full'>
              <motion.div
                  ref={ref}
                  className='mt-10 w-fit'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animate={controls}
                >
                  <img src={profile} alt="profile image" className='w-40 sm:w-60' />
              </motion.div>
            <h1 className="text-[40px] sm:text-[100px] text-white font-semibold m-0 h-15 sm:h-30 mb-2">
            SOFT
            <span className="text-[#028BC5]">WARE</span>
            </h1>

            <h1 className='m-0 text-white text-2xl sm:text-3xl font-bold mb-2'>
                KHUTSO <span className='font-light'>MAKUNYANE</span>
            </h1>

            <h2 className='text-white'>
                 <Typewriter
                words={['Software Developer', 'Specializing in Full Stack MERN', 'UX/UI Designer']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={80}
                delaySpeed={1000}
            />
                {/* I am a Full-Stack <span className='text-[#028BC5]'>MERN</span> Developer */}
            </h2>
        <BiShapeCircle className='absolute text-[80px] text-[#0228388c] right-10 bottom-1  animate-bounce'/>
        </div>
    </div>
  );
}




