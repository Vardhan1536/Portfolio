import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';
import { getSkillIcon } from '../utils/skillIcons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-light-200 dark:bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skillCategory, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center bg-light-300 dark:bg-dark-100 rounded-full px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="mr-2">{getSkillIcon(skill)}</span>
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;