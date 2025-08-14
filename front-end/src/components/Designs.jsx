import React, { useState } from "react";
import StandardBank from "../assets/StandardBank.png";
import TymBank from "../assets/TymBank App.png";
import Hotel from '../assets/Hotel.png';
import WaxMovies from '../assets/WaxMovies.png';
import Plants from '../assets/PlantsLogin.png';
import TruckDebo from '../assets/TruckDEBO.png'
import Queue from '../assets/QueueCare.png';
import Adidas from '../assets/Adidas.png';
import Meetify from '../assets/Meetify.png';
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

const DesignCard = ({ image, title, subtitle }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#0E1019] w-full  h-70  border border-[#52555e] rounded-lg p-2">
        {/* Image with hover effect */}
        <div className="w-full h-50 rounded-md bg-[#ffffff0e] mb-3 relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md transition duration-500 ease-in-out group-hover:opacity-30"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <button
              onClick={() => setModal(true)}
              className="text-white px-4 py-2 cursor-pointer rounded text-sm hover:text-[#0271a1]"
            >
              <HiOutlineViewfinderCircle className="text-[50px]" />
            </button>
          </div>
        </div>

        {/* Text Content */}
        <p className="text-sm text-white mb-1">{title}</p>
        <p className="text-[#028BC5] text-xs font-bold">{subtitle}</p>
      </div>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-w-4xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function Designs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
      <DesignCard image={StandardBank} title="Standard Bank" subtitle="UX Redesign" />
      <DesignCard image={TymBank} title="TymBank" subtitle="UX Redesign" />
      <DesignCard image={Hotel} title="Hotel" subtitle="App Design" />
      <DesignCard image={WaxMovies} title="WAX-Movies" subtitle="App Design" />
      <DesignCard image={Plants} title="Plants Login" subtitle="App Design" />
      <DesignCard image={TruckDebo} title="Truck DEBO" subtitle="App Design" />
      <DesignCard image={Queue} title="QueueCare" subtitle="Software Design" />
      <DesignCard image={Adidas} title="Adidas Product" subtitle="Product Design" />
      <DesignCard image={Meetify} title="Meetify" subtitle="Software" />

    </div>
  );
}
