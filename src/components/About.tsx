import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Introduction' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'interests', label: 'Interests' },
  ];

  return (
    <section id="about" className="py-20 bg-light-200 dark:bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-200 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <div className={`tab-content ${activeTab === 'intro' ? 'active' : ''}`}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {aboutMe.intro}
                </p>
              </div>
              <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {aboutMe.education}
                </p>
              </div>
              <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {aboutMe.experience}
                </p>
              </div>
              <div className={`tab-content ${activeTab === 'interests' ? 'active' : ''}`}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {aboutMe.interests}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;