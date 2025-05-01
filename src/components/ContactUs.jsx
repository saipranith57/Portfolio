import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from "../constants/index.js";
import Resume from "../assets/Resume.pdf";

const ContactUs = () => {
  return (
    <div className='border-b border-neutral-700 pb-20'>
      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className='my-10 text-center tracking-tight text-4xl'
      >
        Get In Touch
      </motion.h1>

      {/* Contact Details with Fade-in Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='tracking-tight text-center'
      >
        <p className='my-4'>{CONTACT.address}</p>
        
        {/* Clickable Phone Number */}
        <a href={`tel:${CONTACT.phoneNo}`} className="my-4 block text-blue-500 hover:underline">
          {CONTACT.phoneNo}
        </a>

        {/* Clickable Email */}
        <a href={`mailto:${CONTACT.email}`} className="text-blue-500 hover:underline">
          {CONTACT.email}
        </a>
      </motion.div>

      {/* Animated Button for Resume Download */}
      <div className='my-4 flex justify-center'>
        <a href={Resume} download="saipranith_resume.pdf">
          <motion.button 
            whileInView={{opacity:1}}
            viewport={{once:false,amount:0.2}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='rounded border px-4 py-2 relative bg-neutral-900 text-white hover:bg-neutral-700 transition-all duration-300'
          >
            DOWNLOAD CV
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
