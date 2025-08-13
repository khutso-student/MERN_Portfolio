// Loading.jsx
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#000] z-50">
      <motion.div
        className="w-16 h-16 border-4 border-t-[#028BC5] border-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </div>
  );
}
