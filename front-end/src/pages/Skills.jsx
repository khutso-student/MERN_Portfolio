import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';



import M from '../assets/M.png';
import E from '../assets/E.png';
import R from '../assets/R.png';
import N from '../assets/N.png';
import SQL from '../assets/SQL.png';
import JAVA from '../assets/JAVA.png';
import HC from '../assets/HC.png';
import PY from '../assets/PY.png';
import U from '../assets/U.png';
import W from '../assets/W.png';
import { useInView } from 'react-intersection-observer';


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RiShapeLine } from "react-icons/ri";
import { TbToolsOff } from "react-icons/tb";
import { RiWordpressFill } from "react-icons/ri";



// components/SkillCard.jsx

const SkillCard = ({ bgImage, Icon, title, description, percentage = 0 }) => {
      const [count, setCount] = useState(0);
      const { ref, inView } = useInView({ triggerOnce: true });

      useEffect(() => {
        if (inView) {
          let start = 0;
          let increment = Math.ceil(percentage / 80); 
          const interval = setInterval(() => {
            start += increment;
            if (start >= percentage) {
              setCount(percentage);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
          return () => clearInterval(interval);
        }
      }, [inView, percentage]);

      return (
        <motion.div
                ref={ref}
                className="flex flex-col justify-center bg-[#090b15d7] w-full md:w-45 h-auto md:h-55 border border-[#65666D] rounded-lg py-5 px-4 bg-center bg-cover shadow-md cursor-pointer"
                style={{ backgroundImage: `url(${bgImage})` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
            <div className="flex justify-center items-center bg-[#028bc518] mb-3 w-8 h-8 rounded-full">
                  <Icon className="text-[#028BC5] text-[23px]" />
            </div>
            <h1 className="text-white font-semibold mb-1">{title}</h1>
            <p className="text-[#ffffff91] mb-3 text-xs font-light">{description}</p>
            <motion.p
                  className="text-[#028BC5] font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                {count}%
            </motion.p>
        </motion.div>

      );
};


export default function Skills() {
    return(
      <div className="w-full h-auto sm:h-auto bg-transparent bg-cover bg-center "
        >
        <div className="flex flex-col items-center w-full h-auto md:h-auto bg-[#000000af] pt-10 pb-4 px-2 md:pb-1">
            <div className="flex flex-col w-full h-auto md:h-auto  max-w-[900px] py-5 px-2">
                {/* Section Heading */}
                  <motion.div
                        className="flex items-center  bg-[#070911] w-40 h-12  mb-5"
                         initial={{ scale: 0.9, opacity: 0 }}
                         whileInView={{ scale: 1, opacity: 1 }}
                         transition={{ delay: 0.2 }} >
                    <div className='flex justify-center items-center mr-4 animate-ping bg-[#032D3F] w-8 h-8 rounded-full'>
                         <p className='text-[#028BC5] font-bold'>MY</p>
                     </div>
                      <h1 className="text-[#fff] text-[25px] sm:text-[30px] font-light">
                          SKILLS 
                    </h1>
                </motion.div>

                {/* Main Skills Section */}
                <div className="flex flex-col  md:flex-row  gap-4 w-full h-auto py-2">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-4 gap-7 w-full md:w-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                          <SkillCard
                              bgImage={M}
                              Icon={SiMongodb}
                              title="MongoDB"
                              description="Stores application data in flexible."
                              percentage={75}
                            />

                            <SkillCard
                              bgImage={E}
                              Icon={SiExpress}
                              title="Express.js"
                              description="Handles routing and server-side logic."
                              percentage={72}
                            />

                            <SkillCard
                              bgImage={R}
                              Icon={FaReact}
                              title="React"
                              description="Handles the front-end view layer."
                              percentage={76}
                            />

                            <SkillCard
                              bgImage={N}
                              Icon={FaNode}
                              title="Node.JS"
                              description="Allows running JavaScript on the server side."
                              percentage={65}
                            />
                                          
                            <SkillCard bgImage={SQL} Icon={DiMysql} title="MYSQL" description="Design and manage structured." percentage={71} />
                            <SkillCard bgImage={JAVA} Icon={DiJavascript1} title="JavaScript" description="Building interactive front-end logic." percentage={68} />
                            <SkillCard bgImage={HC} Icon={FaHtml5} title="HTML & CSS" description="Craft semantic and Style responsive using Html & Css." percentage={80} />
                            <SkillCard bgImage={PY} Icon={AiOutlinePython} title="Python" description="Use Python for scripting and foundational programming concepts" percentage={58} />
                            <SkillCard bgImage={U} Icon={TbToolsOff} title="UX/UI Designer" description="Deisgning intuitive and user-friendly interfaces using Figma and Adobe XD" percentage={80} />
                            <SkillCard bgImage={W} Icon={RiWordpressFill} title="Wordpress" description="Building dynamic, responsive, and SEO-optimized websites" percentage={74} />

                    </motion.div>
                </div>
            </div>
                <RiShapeLine className='absolute text-[80px] text-[#0228388c] mt-100  animate-spin' />
            
        </div>
</div>

    )
}


