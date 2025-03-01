import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { socialLinks } from '../data';
import SocialIcon from './SocialIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <motion.div
  className="md:w-1/2 flex justify-center mb-8 md:mb-0"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative group">
    {/* Outer Glow Effect */}
    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark opacity-40 blur-xl group-hover:blur-2xl transition-all duration-500"></div>

    {/* Glowing Border Ring - Subtle */}
    <div className="absolute inset-0 rounded-full border-[6px] border-primary-light dark:border-primary-dark animate-pulse"></div>
    
    {/* Profile Image with Hover Zoom */}
    <img
      src="/datta.jpg"
      alt="Viswadatta Nidumukkala"
      className="relative w-64 h-64 object-cover rounded-full border-4 border-white dark:border-dark-100 shadow-xl transform group-hover:scale-105 transition-transform duration-500"
    />
  </div>
</motion.div>


        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-light dark:text-primary-dark">
            Viswadatta Nidumukkala
          </h1>
          <div className="text-xl md:text-2xl font-medium mb-6 h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'CS Student',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary-light dark:text-secondary-dark"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Passionate about building innovative web applications and solving complex problems with clean, efficient code.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} name={link.name} url={link.url} icon={link.icon} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-full font-medium hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;