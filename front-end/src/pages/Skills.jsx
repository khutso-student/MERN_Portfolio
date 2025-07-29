import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


import skillBG from '../assets/skills.png'
import M from '../assets/M.png';
import E from '../assets/E.png';
import R from '../assets/R.png';
import N from '../assets/N.png';
import { useInView } from 'react-intersection-observer';


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { RiShapeLine } from "react-icons/ri";



// components/SkillCard.jsx

const SkillCard = ({ bgImage, Icon, title, description }) => {
  return (
    <div
      className="flex flex-col justify-center bg-[#090b15d7] w-full md:w-45 h-auto md:h-50 border border-[#65666D] rounded-lg p-3 bg-center  bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center bg-[#028bc518] mb-3 w-8 h-8 rounded-full">
        <Icon className="text-[#028BC5] text-[23px]" />
      </div>
      <h1 className="text-white font-semibold mb-1">{title}</h1>
      <p className="text-[#ffffff91] text-xs font-light">{description}</p>
    </div>
  );
};


const Percent = ({ Icon, title, percentage }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(percentage);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start <= target) {
          setCount(start);
        } else {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className='flex justify-between items-center bg-[#0a1621e1] w-full h-12 rounded-lg p-2 mb-2'>
      <div className='flex items-center gap-2'>
        <div className='flex justify-center items-center w-8 h-8 bg-[#028bc51e] rounded-full'>
          <Icon className='text-[#028BC5] text-xl' />
        </div>
        <h1 className='text-white text-sm font-light'>{title}</h1>
      </div>
      <h1 className='text-[#028BC5] font-bold'>{count}%</h1>
    </div>
  );
};



export default function Skills() {
    return(
      <div className="w-full h-auto sm:h-screen bg-transparent bg-cover bg-center "
        >
        <div className="flex flex-col items-center w-full h-auto md:h-screen bg-[#000000af] pt-20 pb-4 px-2 md:pb-1">
            <div className="flex flex-col w-full h-auto md:h-screen max-w-[1000px]">
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
                <div className="flex flex-col md:flex-row  gap-4 w-full h-auto py-2">
                    {/* Left - Skill Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full  md:w-auto">
                    <SkillCard
                        bgImage={M}
                        Icon={SiMongodb}
                        title="MongoDB"
                        description="Stores application data in flexible"
                    />
                    <SkillCard
                        bgImage={E}
                        Icon={SiExpress}
                        title="Express.js"
                        description="Handles routing and server-side logic."
                    />
                    <SkillCard
                        bgImage={R}
                        Icon={FaReact}
                        title="React"
                        description="Handles the front-end view layer"
                    />
                    <SkillCard
                        bgImage={N}
                        Icon={FaNode}
                        title="Node.JS"
                        description="Allows running JavaScript on the server side."
                    />
                    </div>

                    {/* Right - Percent Bars */}
                    <div className="flex flex-col w-full md:w-1/3 bg-[#0c0e16d0] border border-[#65666D] rounded-lg p-3">
                    <Percent Icon={FaHtml5} title="Html & CSS" percentage="80%" />
                    <Percent Icon={DiJavascript1} title="JavaScript" percentage="75%" />
                    <Percent Icon={FaReact} title="React" percentage="70%" />
                    <Percent Icon={SiMongodb} title="MongoDB" percentage="77%" />
                    <Percent Icon={DiMysql} title="MYSQL" percentage="69%" />
                    <Percent Icon={FaNode} title="Node.JS" percentage="70%" />
                    <Percent Icon={FaGithub} title="Git/GitHub" percentage="78%" />
                    </div>
                </div>
            </div>
                <RiShapeLine className='absolute text-[80px] text-[#0228388c] mt-100  animate-spin' />
            
        </div>
</div>

    )
}