import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Details = ({ Icon, Info }) => (
  <div className='flex items-center gap-2 w-full mb-2'>
    <div className='flex justify-center items-center bg-[#0E1019] w-8 h-8 rounded-full border border-[#028BC5]'>
      <Icon className='text-[#028BC5]' />
    </div>
    <h1 className='text-white text-sm'>{Info}</h1>
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine environment mode
  const isProd = import.meta.env.PROD;

  // Production keys (must be set in Vercel or .env.production)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Development fallback keys
  const DEV_SERVICE_ID = "your_dev_service_id";
  const DEV_TEMPLATE_ID = "your_dev_template_id";
  const DEV_PUBLIC_KEY = "your_dev_public_key";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use production keys if in prod, otherwise use dev fallback
    const activeServiceId = isProd ? SERVICE_ID : DEV_SERVICE_ID;
    const activeTemplateId = isProd ? TEMPLATE_ID : DEV_TEMPLATE_ID;
    const activePublicKey = isProd ? PUBLIC_KEY : DEV_PUBLIC_KEY;

    // If production and any key is missing, show error
    if (isProd && (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY)) {
      console.error("❌ Missing EmailJS production keys!");
      toast.error("Email service is not configured. Please contact site admin.", { theme: "dark" });
      return;
    }

    if (!isProd) {
      console.warn("⚠️ Running in development mode with fallback EmailJS keys.");
      toast.info("Development mode: using fallback EmailJS keys.", { theme: "dark" });
    }

    emailjs.send(
      activeServiceId,
      activeTemplateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        industry: formData.industry,
        message: formData.message
      },
      activePublicKey
    )
    .then(() => {
      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setFormData({ name: "", email: "", industry: "", message: "" });
    })
    .catch((err) => {
      console.error("❌ EmailJS Error:", err);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    })
     .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="w-full h-auto md:h-screen bg-transparent bg-cover bg-center">
      <div className='flex justify-center items-center bg-[#000000af] w-full h-auto md:h-full pt-20 pb-5 px-2'>
        <div className='flex flex-col md:flex-row gap-8 w-full h-auto md:h-full max-w-4xl'>

          {/* Left Info Panel */}
          <motion.div
            className='w-full h-auto md:w-1/2 p-5 rounded-lg'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center bg-[#070911] w-50 h-12 mb-5"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-[#fff] text-[25px] sm:text-[30px] font-light">CONTACT</h1>
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
              <a href="https://www.instagram.com/mern_engineer" target="_blank"><FaInstagram className='text-white hover:text-[#028BC5]' /></a>
            </div>
          </motion.div>

          {/* Right Form */}
          <div className='w-full md:w-1/2 h-110 bg-[#0E1019] border border-[#ffffff1e] rounded-xl p-5'>
            <form className='w-full' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none' required />
              </div>

              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none' required />
              </div>

              <div className='mb-3'>
                <label className='text-white font-light text-sm block mb-1'>Industry</label>
                <select name="industry" value={formData.industry} onChange={handleChange}
                  className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none' required>
                  <option value="">Select your industry</option>
                  <option value="Software Development">Software Development</option>
                  <option value="UX/UI Design">UX/UI Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className='mb-4'>
                <label className='text-white font-light text-sm block mb-1'>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  rows="4" className='bg-[#ffffff1c] text-white text-sm py-2 px-4 w-full rounded-md outline-none resize-none' required></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative bg-[#028BC5] hover:bg-[#0273a6] text-white text-sm font-medium py-2 px-6 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 w-full"
              >
                {/* Spinner (absolute, centered) */}
                {isSubmitting && (
                  <span className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </span>
                )}

                {/* Button Text */}
                <span className={`transition-opacity duration-300 ${isSubmitting ? "opacity-50" : "opacity-100"}`}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
