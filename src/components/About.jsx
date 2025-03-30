import React from 'react'
import About_img from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className='border-b border-neutral-300 pb-4'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-60}}
        viewport={{once:false,amount:0.2}}
        transition={{duration:0.5,delay:0.3}}
        className='text-center text-4xl my-20'>About
            <span className='text-neutral-500'> Me</span>
             </motion.h1>
             <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                        <motion.img 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:0.5,delay:0.7}}
                        className='rounded-2xl h-100 w-100' src={About_img} alt="aboutImg" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <motion.p 
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:0,x:100}}
                     transition={{duration:0.5,delay:0.9}}
                    className='my-2 py-6 max-w-xl'>{ABOUT_TEXT}</motion.p>
                </div>
                </div>
             </div> 
    </div>
  )
}

export default About