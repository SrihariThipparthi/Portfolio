import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayText, setDisplayText] = useState("< Hola />");
  
  const hackerEffect = () => {
    let iteration = 0;
    const originalText = "< Hola />";
    
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("")
          .map((letter, index) => {
            if(index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if(iteration >= originalText.length) clearInterval(interval);
      iteration += 1/3;
    }, 30);
  };

  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-blue-900/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2"
          onMouseEnter={() => {
            setIsHovered(true);
            hackerEffect();
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-mono text-blue-400 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {displayText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.button>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {['home', 'about', 'projects', 'experience', 'certificates', 'contact'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-400 hover:text-blue-400 transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Social Links with hover effects */}
        <div className="flex items-center space-x-4">
          {[
            { Icon: Github, href: "https://github.com/SrihariThipparthi" },
            { Icon: Linkedin, href: "https://linkedin.com/in/srihari-thipparthi-22a841171" },
            { Icon: Twitter, href: "https://x.com/Srihari77511343?t=TdZMnPinZpnaBCv740V5BA&s=09" },
            { Icon: Mail, href: "mailto:thipparthisrihari2@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0]
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;