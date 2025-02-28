import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Set light theme as default regardless of system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // Default to light theme
      document.documentElement.classList.remove('dark');
      // Save light theme preference if not already set
      if (!savedTheme) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-200 text-dark-200 dark:text-light-100 transition-colors duration-300">
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;