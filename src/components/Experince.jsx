import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants/index.js";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
      {/* Heading Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-center text-4xl my-4"
      >
        Experience
      </motion.h2>

      {EXPERIENCES.map((exp, idx) => (
        <motion.div 
          key={idx} 
          className="mb-8 flex flex-col lg:flex-row items-start gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          {/* Year - Fixed width to align properly */}
          <div className="min-w-[150px] text-left">
            <p className="mb-2 text-sm text-neutral-400 whitespace-nowrap">{exp.year}</p>
          </div>

          {/* Role & Details */}
          <div className="w-full">
            <h6 className="mb-1 font-semibold">{exp.role}</h6>
            <p className="text-sm text-neutral-400">{exp.company}</p>
            <p className="mt-2 text-sm">{exp.description}</p>

            {/* Technologies - Animated on Hover */}
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-neutral-800 text-sm px-3 py-1 rounded-full text-neutral-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
