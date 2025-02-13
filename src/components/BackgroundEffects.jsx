import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  const particles = useMemo(() => Array.from({ length: 50 }, (_, i) => i), []);

  useEffect(() => {
    const onMouseMove = (e) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="w-full h-screen fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px] animate-float parallax" 
        data-speed="2" 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-[120px] animate-float-delay parallax" 
        data-speed="3" 
      />
      
      {/* Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Repositioned animated lines to bottom of the page */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-50">
        <motion.path
          d="M 0 100 Q 400 50 800 100 T 1600 100"
          stroke="rgba(59, 130, 246, 0.08)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 0 150 Q 400 100 800 150 T 1600 150"
          stroke="rgba(139, 92, 246, 0.08)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      {/* Add subtle top decoration */}
      <svg className="absolute top-0 left-0 w-full h-32 opacity-50 rotate-180">
        <motion.path
          d="M 0 150 Q 400 100 800 150 T 1600 150"
          stroke="rgba(59, 130, 246, 0.05)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default BackgroundEffects;
