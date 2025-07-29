import contactBG from '../assets/contact.png';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from 'framer-motion';


const Details = ({ Icon, Info }) => (
  <div className='flex items-center gap-2 w-full mb-2'>
    <div className='flex justify-center items-center bg-[#0E1019] w-8 h-8 rounded-full border border-[#028BC5]'>
      <Icon className='text-[#028BC5]' />
    </div>
    <h1 className='text-white text-sm'>{Info}</h1>
  </div>
);

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (API call or EmailJS, etc.)
    alert("Form submitted");
  };

  return (
    <div
      className="w-full bg-transparent bg-cover bg-center"
      
    >
      <div className='flex justify-center items-center bg-[#000000af] w-full pt-20 pb-10 px-2'>
        <div className='flex flex-col md:flex-row gap-8 w-full max-w-5xl'>
          {/* Left Info Panel */}
          <div className='w-full md:w-1/2  p-5 rounded-lg'>
              <motion.div
                  className="flex items-center  bg-[#070911] w-50 h-12  mb-5"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }} >
                <h1 className="text-[#fff] text-[25px] sm:text-[30px] font-light">
                  CONTACT 
                </h1>
                <div className='flex justify-center items-center ml-4 animate-ping bg-[#032D3F] w-8 h-8 rounded-full'>
                    <p className='text-[#028BC5] font-bold'>ME</p>
                </div>
              </motion.div>
            <h1 className='text-white font-light mb-4 text-sm sm:text-base'>
              I’m currently open to full-time opportunities, freelance work, or developer roles where I can contribute and grow.
            </h1>

            <Details Icon={CiLocationOn} Info="South Africa, Pretoria" />
            <Details Icon={MdOutlineMailOutline} Info="khutsomakunyane1@gmail.com" />
            <Details Icon={MdLocalPhone} Info="064 857 1755" />

            <p className='text-white mt-4 mb-2 font-light'>Follow Me</p>
            <div className='flex items-center gap-3'>
              <a href="https://github.com/khutso-student" target="_blank"><FaGithub className='text-white hover:text-[#028BC5]' /></a>
              <a href="https://www.linkedin.com/in/khutso-makunyane-5353b1329/" target="_blank"><FaLinkedinIn className='text-white hover:text-[#028BC5]' /></a>
              <a href="https://www.facebook.com/khutso.makunyane.2025/" target="_blank"><FaFacebookF className='text-white hover:text-[#028BC5]' /></a>
              <a href="https://www.instagram.com/mern_engineer/?next=%2F" target="_blank"><FaInstagram className='text-white hover:text-[#028BC5]' /></a>
            </div>
          </div>

          {/* Right Form */}
          <div className='w-full md:w-1/2 bg-[#0E1019] border border-[#ffffff1e] rounded-xl p-5'>
            <form className='w-full' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Full Name</label>
                <input type="text" placeholder='Your name'
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none'
                  required
                />
              </div>

              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Email</label>
                <input type="email" placeholder='Your email'
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none'
                  required
                />
              </div>

              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Industry</label>
                <select
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none'
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Full-Stack-web">Full-Stack-web</option>
                  <option value="Web Design">Web Design</option>
                  <option value="App Design">App Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className='mb-4'>
                <label className='text-white font-light text-sm block mb-1'>Message</label>
                <textarea
                  placeholder='Type your message here...'
                  rows="4"
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none resize-none'
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className='bg-[#028BC5] hover:bg-[#0273a6] text-white text-sm font-medium py-2 px-6 rounded-md transition duration-200'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
