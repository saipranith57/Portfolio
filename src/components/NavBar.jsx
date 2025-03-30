import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';  // Replace with your logo path

const NavBar = () => {
  const socialIcons = [
    { icon: <FaTwitter />, key: "twitter", color: "#1DA1F2" }, // Twitter Blue
    { icon: <FaLinkedin />, key: "linkedin", color: "#0077B5" }, // LinkedIn Blue
    { icon: <FaInstagram />, key: "instagram", color: "#E1306C" }, // Instagram Pink
    { icon: <FaGithub />, key: "github", color: "#333" } // GitHub Dark
  ];

  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
      {/* Logo Section */}
      <div className='flex flex-shrink-0 items-center justify-center'>
        <img src={logo} alt="Logo" className='w-12' />
      </div>

      {/* Social Icons with Individual Colors */}
      <div className='flex items-center gap-4 text-2xl hover:cursor-pointer'>
        {socialIcons.map(({ icon, key, color }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: -20, scale: 0.8 }} // Appear from top
            animate={{ opacity: 1, y: 0, scale: 1 }} // Fully visible
            transition={{ duration: 0.3, delay: index * 0.2 }} // Staggered effect
            whileHover={{ scale: 1.2, color: color }} // Scale up & color change
            whileTap={{ scale: 0.9 }} // Slight shrink on click
            className='cursor-pointer'
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
