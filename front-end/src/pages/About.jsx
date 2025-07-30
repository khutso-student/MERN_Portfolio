import about from '../assets/About.png';
import { Typewriter } from 'react-simple-typewriter';
import { RiShapeLine } from "react-icons/ri";

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';


export default function About() {

        const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, 1], [15, -15]);
    const rotateY = useTransform(x, [0, 1], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const px = mouseX / rect.width;
        const py = mouseY / rect.height;

        x.set(px);
        y.set(py);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };


    return (
        <main
            className="w-full h-auto md:h-screen bg-transparent"
            
        >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full h-auto md:h-full bg-[#000000af] py-5 px-2 relative">
                {/* <RiShapeLine className="absolute text-[80px] text-[#0228388c] mb-50 animate-ping" /> */}

                {/* TEXT SECTION */}
                <motion.div
                    className="flex flex-col justify-center w-full  sm:w-1/2 h-auto p-2"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }} >
                    <motion.div
                        className="flex items-center  bg-[#070911] w-40 h-12  mb-5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-[#fff] text-[25px] sm:text-[30px] font-light">
                            ABOUT 
                        </h1>
                        <div className='flex justify-center items-center ml-4 animate-ping bg-[#032D3F] w-8 h-8 rounded-full'>
                            <p className='text-[#028BC5] font-bold'>ME</p>
                        </div>
                    </motion.div>

                    <motion.h2
                        className="text-white font-light text-md sm:text-lg mb-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Typewriter
                            words={['I am a Full-Stack MERN Developer', 'UX/UI Designer', 'I love coding']}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={200}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                    </motion.h2>

                    {[
                        "I'm a dedicated Full-Stack MERN Developer, trained at the PowerLearn Project (PLP) Academy, where I mastered the MERN stack — MongoDB, Express.js, React, and Node.js.",
                        "I also bring strong front-end skills in HTML, CSS, JavaScript, and a solid grasp of MySQL and basic Python. I actively use Git and GitHub for version control and collaboration.",
                        "Driven by curiosity and purpose, I focus on building efficient, maintainable, and scalable web applications that improve lives and solve problems. I specialize in building robust, user-friendly web applications and turning ideas into scalable digital solutions. With a strong foundation in both front-end and back-end development, I’ve built real-world projects that solve real-world problems. Let’s build the future, one line of code at a time."
                    ].map((text, i) => (
                        <motion.p
                            key={i}
                            className="text-white text-xs sm:text-sm font-light mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.2 }}
                        >
                            {text}
                        </motion.p>
                    ))}

                    {/* BUTTONS */}
                    <motion.div
                        className="flex w-full mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.a
                            href=""
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#070911] text-[#028BC5] text-sm py-2 px-4 border border-[#028BC5] rounded-lg mr-4 hover:border-white hover:text-white duration-300"
                        >
                            Download Cv
                        </motion.a>

                        <motion.a
                            href="#project"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#070911] text-[#fff] text-sm py-2 px-4 border border-[#fff] rounded-lg mr-4 hover:border-[#028BC5] hover:text-[#028BC5] duration-300"
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                        ref={containerRef}
                        className="hidden sm:flex justify-center items-center  w-70 h-100"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            perspective: 1000,
                        }} >
                    <motion.div
                        className="bg-transparent border-3 border-[#028BC5] w-60 h-85 rounded-full"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: 'preserve-3d',
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        >
                        <img
                            src={about}
                            alt="About Image"
                            className="flex relative bottom-6 right-3"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}


