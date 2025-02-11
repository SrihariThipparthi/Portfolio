import { useCallback } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-30 bg-black border-b border-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <button onClick={() => scrollToSection('home')} className="text-3xl font-bold text-blue-400">
            Srihari Thipparthi
          </button>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-blue-400 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-blue-400 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-400 hover:text-blue-400 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors">Contact</button>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/SrihariThipparthi" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/srihari-thipparthi-22a841171" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourusername" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:thipparthisrihari2@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;