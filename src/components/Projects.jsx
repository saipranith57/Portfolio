import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      {/* Heading Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className='my-20 text-4xl text-center'
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx} 
            className='mb-8 flex flex-wrap lg:justify-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Project Image */}
            <motion.div 
              className='w-full lg:w-1/4'
              whileHover={{ scale: 1.05 }} // Slight hover effect
            >
              <img 
                src={project.image}
                alt={project.title}
                width={150}
                height={150} 
                className='mb-6 rounded'
              />
            </motion.div>

            {/* Project Description */}
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4'>{project.description}</p>

              {/* Tech Stack with Staggered Animation */}
              <div>
                {project.technologies.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    className='mr-2 rounded bg-neutral-900 text-sm font-medium text-purple-900 px-2 py-1'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
