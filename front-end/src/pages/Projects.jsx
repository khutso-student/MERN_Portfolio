import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import worksync from '../assets/worksync.png';
import Designs from '../components/Designs';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ image, title, demoLink, githubLink, category, index }) => {
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="flex flex-col bg-[#0E1019] w-full h-auto border border-[#52555e] rounded-lg p-2 hover:shadow-lg hover:shadow-[#028BC5]/30 transition-shadow duration-300">
                <div className="w-full h-36 sm:h-40 md:h-48 bg-[#3A3C43] rounded-md mb-2 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}/>
                <div className="flex justify-between items-center w-full mb-1">
                    <p className="text-white text-sm">{title}</p>
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#161820] hover:bg-[#2c2f3d] text-xs text-white px-4 py-2 rounded-md duration-300"
                    >
                        Live Demo
                    </a>
                </div>
                <div className="flex w-full items-center gap-2">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        <FaGithub />
                    </a>
                    <p className="text-xs text-white">{category}</p>
                    <h1 className="text-[#028BC5] font-bold">{index}</h1>
                </div>
            </div>
        </motion.div>
    );
};


export default function Projects() {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="flex justify-center items-center w-full pt-20 pb-5 px-2 bg-[#06080F]">
            <div className="flex flex-col w-full max-w-4xl  p-2 h-auto">
                {/* Heading */}
                <motion.div
                    className="flex items-center  bg-[#070911] w-50 h-12  mb-5"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }} >
                    <div className='flex justify-center items-center mr-4 animate-ping bg-[#032D3F] w-8 h-8 rounded-full'>
                        <p className='text-[#028BC5] font-bold'>MY</p>
                    </div>
                    <h1 className="text-[#fff] text-[25px] sm:text-[30px] font-light">
                        PROJECTS 
                    </h1>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-5 py-2 text-sm font-light rounded-sm transition-all duration-200 ${
                            activeTab === 'projects'
                                ? 'bg-[#090A12] text-[#028BC5]'
                                : 'bg-[#1E1E1E] text-white hover:bg-[#090A12]'
                        }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('designs')}
                        className={`px-5 py-2 text-sm font-light rounded-sm transition-all duration-200 ${
                            activeTab === 'designs'
                                ? 'bg-[#090A12] text-[#028BC5]'
                                : 'bg-[#1E1E1E] text-white hover:bg-[#090A12]'
                        }`}
                    >
                        Designs
                    </button>
                </div>

                {/* Content */}
               <div className="w-full  rounded-sm">
                    {activeTab === 'projects' && (
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <ProjectCard
                            image={worksync}
                            title="WorkSync"
                            demoLink="https://work-sync-nine.vercel.app/"
                            githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Software"
                            index="01"
                        />

                         <ProjectCard
                            image={worksync}
                            title="QueueCare"
                            demoLink="https://work-sync-nine.vercel.app/"
                            githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Software"
                            index="02"
                        />
                         <ProjectCard
                            image={worksync}
                            title="Wise ShopKeeper"
                            demoLink="https://price-wise-shopkeeper.vercel.app/"
                            githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Software"
                            index="03"
                        />
                         <ProjectCard
                            image={worksync}
                            title="clinic-queue-hero"
                            demoLink="https://work-sync-nine.vercel.app/"
                            githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Software"
                            index="04"
                        />
                          <ProjectCard
                            image={worksync}
                            title="SmartBiz Digital"
                            demoLink="https://www.smartbizdigital.co.za/"
                            // githubLink="https://github.com/khutso-student?tab=repositories"
                            category="Website Live"
                            index="05"
                        />
                        </motion.div>
                    )}

                   {activeTab === 'designs' && (
                    <div className="w-full">
                        <Designs />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
