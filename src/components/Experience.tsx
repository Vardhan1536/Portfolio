import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-light-200 dark:bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md ${
                  exp.highlight ? 'border-l-4 border-primary-light dark:border-primary-dark' : ''
                }`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                      {exp.company}
                    </h3>
                    <span className="text-sm bg-light-300 dark:bg-dark-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-lg font-medium mb-3">{exp.role}</p>
                  
                  {exp.image && (
                    <div className="mb-4 h-48 overflow-hidden rounded-lg">
                      <img 
                        src={exp.image} 
                        alt={exp.company} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-light dark:text-primary-dark mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;