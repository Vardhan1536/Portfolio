import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  // This will create a configuration where first row has 2 projects and second row has 3 projects
  // Another option would be first row with 3 projects and second row with 2 projects
  const firstRowProjects = projectsData.slice(0, 2);
  const secondRowProjects = projectsData.slice(2, 5);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary-light dark:bg-primary-dark mx-auto"></div>
        </motion.div>

        {/* First row with 2 projects - they will be larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {firstRowProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary-light/80 dark:bg-primary-dark/80 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-gray-200 mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="mb-1">• {desc}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row with 3 projects - slightly smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondRowProjects.map((project, index) => (
            <motion.div
              key={index + 2} // Add offset to ensure unique keys
              className="project-card relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary-light/80 dark:bg-primary-dark/80 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-300">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <ul className="text-xs text-gray-200 mb-3">
                  {project.description.slice(0, 2).map((desc, idx) => (
                    <li key={idx} className="mb-1">• {desc}</li>
                  ))}
                </ul>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;