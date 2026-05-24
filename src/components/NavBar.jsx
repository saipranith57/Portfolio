import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';  // Replace with your logo path

const NavBar = () => {
  const socialIcons = [
    {
      icon: <FaLinkedin />,
      key: 'linkedin',
      color: '#0077B5',
      link: 'https://www.linkedin.com/in/saipranith-elaprolu-2407142a5/' // Replace with your LinkedIn URL
    },
    {
      icon: <FaGithub />,
      key: 'github',
      color: '#333',
      link: 'https://github.com/saipranith57' // Replace with your GitHub URL
    }
  ];

  return (
    <nav className='mb-20 flex justify-end items-center py-6'>

      {/* Social Icons with Individual Colors and Links */}
      <div className='flex items-center gap-4 text-2xl'>
        {socialIcons.map(({ icon, key, color, link }, index) => (
          <a
            href={link}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer'
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ scale: 1.2, color: color }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
