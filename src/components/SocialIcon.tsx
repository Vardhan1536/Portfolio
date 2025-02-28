import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Mail, Phone, ExternalLink } from 'lucide-react';

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, url, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'code':
        return <Code className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      case 'phone':
        return <Phone className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-light-200 dark:bg-dark-100 text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={name}
    >
      {getIcon()}
    </motion.a>
  );
};

export default SocialIcon;