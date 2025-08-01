import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Details from '../components/Details';
import LOG from '../assets/Logo.svg';

import mainBG from '../assets/MainBG.png'

import { GoHome } from "react-icons/go";
import { BiBookContent } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { MdWorkspacesOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SlEnvolope } from "react-icons/sl";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useSate } from 'react'
import { useState } from 'react';

export default function MainPage() {

    const [sideNav, setSideNav] = useState(false);
    const [chat, setChat] = useState(false);

    return(
        <div className="w-full h-auto md:h-screen "
        style={{ backgroundImage: `url(${mainBG})` }}>
            <button onClick={() => setSideNav(!sideNav)}
                className="fixed top-5 right-5 z-20 bg-[#032d3f] hover:bg-[#032d3fa8] text-white text-[25px] cursor-pointer p-2 duration-300 rounded-full shadow-md "
                 >
                {sideNav ? <HiOutlineMenuAlt3 className='hover:rotate-180 duration-300' /> : <HiOutlineMenuAlt2 className='hover:rotate-180 duration-300' />}
            </button>

            <button onClick={() => setChat(!chat)}
                className='fixed top-5 right-20 z-20 bg-[#032d3f] hover:bg-[#032d3fa8] text-white cursor-pointer  text-[25px] p-2 duration-300 rounded-full'>
                {chat ? <SlEnvolope className='text-[#028BC5]' /> : <SlEnvolope className='text-white' /> }
            </button>
           
            {/* Header */}

            <div className={`fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out overflow-hidden ${
                    sideNav ? 'w-50' : 'w-0' }`}>

                <div className="flex flex-col items-center h-full bg-[#080a12fd] sm:bg-[#080a12e1] border-r border-[#032D3F] p-2">
                    
                    {/* Logo */}
                    <div className="flex flex-col justify-center items-center mb-4 h-20 w-full ">
                        <a href="">
                            <img src={LOG} className='w-30' alt="Logo" />
                        </a>
                        
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-col gap-3 w-full mb-4">
                        <a href="#home"
                            className="flex justify-start gap-2 text-white text-sm bg-[#032d3f91] rounded-md py-2 px-4 hover:bg-[#032d3f91] hover:border-[#028BC5]"
                            >
                            <GoHome className="text-[20px]" />
                            Home
                        </a>

                        <a href="#about"
                            className="flex justify-start gap-2 text-white text-sm bg-[#032d3f15] rounded-md py-2 px-4 hover:bg-[#032d3f91] hover:border-[#028BC5]"
                        >
                            <BiBookContent className="text-[20px]" />
                            About
                        </a>

                        <a href="#skills"
                            className="flex justify-start gap-2 text-white text-sm bg-[#032d3f15] rounded-md py-2 px-4 hover:bg-[#032d3f91] hover:border-[#028BC5]"
                        >
                            <IoApps className="text-[20px]" />
                            Skills
                        </a>

                        <a href="#project"
                            className="flex justify-start gap-2 text-white text-sm bg-[#032d3f15] rounded-md py-2 px-4 hover:bg-[#032d3f91] hover:border-[#028BC5]"
                        >
                            <MdWorkspacesOutline className="text-[20px]" />
                            Projects
                        </a>

                        <a href="#contact"
                            className="flex justify-start gap-2 text-white text-sm bg-[#032d3f15] rounded-md py-2 px-4 hover:bg-[#032d3f91] hover:border-[#028BC5]"
                        >
                            <MdOutlineLocalPhone className="text-[20px]" />
                            Contact
                        </a>
                    </nav>

                    {/* Download CV Button */}
                    <div className="bottom-2 w-full p-2 absolute ">
                        <div className='flex justify-center gap-2 w-full mb-4 '>
                            <a href="https://github.com/khutso-student"><FaGithub className='text-white' /></a>
                            <a href="https://www.linkedin.com/in/khutso-makunyane-5353b1329/"><FaLinkedinIn className='text-white' /></a>
                            <a href="https://www.facebook.com/khutso.makunyane.2025/"><FaFacebookF className='text-white' /></a>
                            <a href="https://www.instagram.com/mern_engineer/?next=%2F"><FaInstagram className='text-white' /></a>
                        </div>
                    <a href="#"
                        className="bg-[#032d3f60] hover:bg-[#032d3fa1] text-white text-xs sm:text-sm px-1.5 py-2  rounded-md block text-center"
                    >
                        Download CV
                    </a>

                      <footer className="w-full text-center py-4 text-white text-sm">
                         © {new Date().getFullYear()} K.Makunyane
                    </footer>
                    </div>

                  
                </div>
            </div>

            {chat && (
                <div onClick={() => setChat(false)}
                className='fixed top-0 z-50 left-0 w-full h-full bg-[#00000093]  p-2 flex justify-center sm:justify-center items-center'>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Details />
                    </div>
                </div>
            )}

            
            <div id='home'>
                <Home />
            </div>

            <div id='about' className='bg-transparent'>
                <About />
            </div>

            <div id='skills'>
                <Skills />
            </div>

            <div id='project'>
                <Projects />
            </div>

            <div id='contact'>
                <Contact />
            </div>

            <div className='flex justify-center items-center bg-[#0E1019] w-full h-18'>
                <footer className="w-full text-center py-4 font-light text-[#ffffff91] text-sm">
                         © {new Date().getFullYear()} K.Makunyane. All Rights Reserved.
                </footer>
            </div>
        </div>
    )
}