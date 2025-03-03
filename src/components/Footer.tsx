import React from 'react';
import { Heart } from 'lucide-react';
import { socialLinks } from '../data';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-300 dark:bg-dark-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link) => (
              <SocialIcon key={link.name} name={link.name} url={link.url} icon={link.icon} />
            ))}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-2">
            &copy; {currentYear} Viswadatta Nidumukkala. All rights reserved.
          </p>
          {/* <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;