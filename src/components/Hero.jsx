import React from 'react';
import { HERO_CONTENT } from '../constants';
import HeroImg from "../assets/HeroImg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const container =(delay)=>({
  hidden :{x:-100,opacity:0},
    visible :{
      x:0,
      opacity:1,
      transition:{duration:0.5,delay:delay}
    }
  })
  return (
    <div className='border-b border-neutral-300 pb-4 lg:mb-35'>
      <div className='flex flex-wrap justify-between'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className='pb-16 text-3xl font-thin tracking-tight lg:text-6xl'
            >
              Sai Pranith Elaprolu
            </motion.h1>
            <motion.span
             variants={container(0.3)}
             initial="hidden"
             animate="visible"
             className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-transparent text-2xl lg:text-4xl'>
              Full Stack Developer
            </motion.span>
            <motion.p
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
             className='my-2 font-thin py-6 tracking-tighter max-w-xl'>{HERO_CONTENT}</motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img src={HeroImg} alt="Profile of Sai Pranith Elaprolu" 
               variants={container(0.3)}
               initial={{x:100, opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{duration:1,delay:0.9}}
            className='w-74 h-74' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
