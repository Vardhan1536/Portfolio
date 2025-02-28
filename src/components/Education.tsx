import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                      {edu.institution}
                    </h3>
                    <span className="text-sm bg-light-300 dark:bg-dark-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.degree}</p>
                  {edu.gpa && (
                    <div className="flex items-center mt-2">
                      <span className="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                      {edu.details && (
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          ({edu.details})
                        </span>
                      )}
                    </div>
                  )}
                  {!edu.gpa && edu.details && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{edu.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;