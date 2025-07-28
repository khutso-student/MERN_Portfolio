import aboutBG from '../assets/about-bg.png';
import about from '../assets/About.png';
import { Typewriter } from 'react-simple-typewriter';
import { RiShapeLine } from "react-icons/ri";


export default function About() {
    return(
        <main className="w-full h-screen bg-black "
        style={{ backgroundImage: `url(${aboutBG})` }} >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full h-full bg-[#00000091] pt-5">
                <RiShapeLine className='absolute text-[80px] text-[#0228388c] mb-50 animate-ping' />
                <div className='flex flex-col justify-center w-full sm:w-1/2 h-auto p-4'>
                    <div className='flex px-4 items-center bg-[#070911] w-55 h-12 border border-[#028BC5] rounded-r-full mb-5'>
                        <h1 className='text-[#028BC5] text-[25px] sm:text-[30px] font-semibold '>
                            ABOUT <span className='text-white font-light'>ME</span>
                        </h1>
                    </div>

                    <h2 className='text-white font-light text-md sm:text-lg mb-5'>
                        <Typewriter
                        words={['I am a Full-Stack MERN Developer', 'UX/UI Designer', 'I love coding']}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={200}
                        deleteSpeed={80}
                        delaySpeed={1000}
                        />
                    </h2>

                    <p className='text-white text-xs sm:text-sm font-light mb-2'>I'm a dedicated Full-Stack <span className='text-[#028BC5] font-bold'>MERN</span> Developer, trained at the PowerLearn Project (PLP) Academy, where I mastered the MERN stack — MongoDB, Express.js, React, and Node.js.</p>

                    <p className='text-white text-xs sm:text-sm font-light mb-2'>I also bring strong front-end skills in HTML, CSS, JavaScript, and a solid grasp of MySQL and basic Python. I actively use Git and GitHub for version control and collaboration.</p>

                    <p className='text-white text-xs sm:text-sm font-light mb-2'>Driven by curiosity and purpose, I focus on building efficient, maintainable, and scalable web applications that improve lives and solve problems.
                    I specialize in building robust, user-friendly web applications and turning ideas into scalable digital solutions.
                    With a strong foundation in both front-end and back-end development, I’ve built real-world projects that solve real-world problems.

                    Let’s build the future, one line of code at a time.
                    </p>

                    <div className='flex w-full mt-4 '>
                        <a href=""
                        className='bg-[#070911] text-[#028BC5] text-sm py-2 px-4 border border-[#028BC5] rounded-lg mr-4 hover:border-white hover:text-white duration-300'>
                            Download Cv
                        </a>

                        <a href="#project"
                        className='bg-[#070911] text-[#fff] text-sm py-2 px-4 border border-[#fff] rounded-lg mr-4 hover:border-[#028BC5] hover:text-[#028BC5] duration-300'>
                            View Projects
                        </a>
                    </div>
                </div>

                <div className="hidden sm:flex justify-center items-center w-100 h-100">
                    <div className='bg-transparent border-3 border-[#028BC5] w-60 h-85 rounded-full'>
                        <img src={about} alt="About Image" 
                        className='flex relative bottom-6 right-3'/>
                    </div>
                </div>
            </div>
        </main>
    )
}