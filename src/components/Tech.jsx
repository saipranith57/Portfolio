import React from 'react';
import { SiMysql,SiZoho,SiAdp,SiSap   } from 'react-icons/si';
import { motion } from 'framer-motion';
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { IoLogoTableau } from "react-icons/io5";
import PowerbiIcon from './PowerbiIcon';

// Icon list with staggered delays for wave motion
const icons = [
  { icon: <SiMysql className="text-7xl p-4 text-[#4479A1]" />, delay: 1.2 },
  { icon: <SiZoho className="text-7xl p-4 text-[#E42527]" />, delay: 1.4 },
  { icon: <SiAdp className="text-7xl p-4 text-[#d0271d]" />, delay: 1.4 },
  { icon: <PiMicrosoftExcelLogo className="text-7xl p-4 text-[#217346]" />, delay: 1.6 },
  { icon: <IoLogoTableau className="text-7xl p-4 text-[#530909]" />, delay: 1.8 },
  { icon: <SiSap className="text-7xl p-4 text-[#0FAAFF]" />, delay: 1.8 },
  { icon: <PowerbiIcon size={70} color="##F2C811" />, delay: 2.0 }
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
