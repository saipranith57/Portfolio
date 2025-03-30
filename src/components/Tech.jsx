import React from 'react';
import { RiReactjsLine, RiNodejsLine, RiJavascriptLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiNextdotjs, SiMysql } from "react-icons/si";
import { motion } from 'framer-motion';

// Icon list with staggered delays for wave motion
const icons = [
  { icon: <RiReactjsLine className="text-7xl p-4 text-cyan-400" />, delay: 0 },
  { icon: <RiNodejsLine className="text-7xl p-4 text-[#509E44]" />, delay: 0.2 },
  { icon: <RiJavascriptLine className="text-7xl p-4 text-[#E8D44D]" />, delay: 0.4 },
  { icon: <SiMongodb className="text-7xl p-4 text-green-600" />, delay: 0.6 },
  { icon: <SiExpress className="text-7xl p-4 text-gray-600" />, delay: 0.8 },
  { icon: <SiNextdotjs className="text-7xl p-4 text-black-100" />, delay: 1 },
  { icon: <SiMysql className="text-7xl p-4 text-[#4479A1]" />, delay: 1.2 }
];

const Tech = () => {
  return (
    <div className='border-b border-neutral-500 pb-24'>
      <h1 className='text-center text-4xl my-20'>Technology</h1>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {icons.map(({ icon, delay }, index) => (
          <motion.div
            key={index}
            className='rounded-2xl border-4 border-neutral-600 hover:cursor-pointer p-4'
            animate={{ y: [0, -20, 0] }} // Moves up and down
            transition={{
              duration: 2, // Smooth motion
              repeat: Infinity, // Infinite loop
              ease: "easeInOut", // Smooth easing
              delay: delay // Different delay for each icon (wave effect)
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
