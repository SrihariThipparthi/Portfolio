import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
// Import certificate images
import datascience from '../certificates/Data Science.jpg';
import awsarchitect from '../certificates/Architecting Solutions On AWS.jpg';
import datalakes from '../certificates/Building Data Lakes On AWS.jpg'

const certificates = [
  {
    id: 1,
    title: "Data Science Proffesional",
    issuer: "IBM",
    date: "2023",
    image: datascience,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/8MI18F02ENGI",
    description: "Proffesional Data Science Ceritificate from IBM"
  },
  {
    id: 2,
    title: "Architecting Solutions On AWS",
    issuer: "Coursera - AWS",
    date: "2024",
    image: awsarchitect,
    link: "https://coursera.org/verify/FYMP2ARK9DU5",
    description: "Comprehensive Solution Architect specialization"
  },
  {
    id: 3,
    title: "Building Data Lakes On AWS",
    issuer: "Coursera - AWS",
    date: "2024",
    image: datalakes,
    link: "https://www.coursera.org/account/accomplishments/verify/3K7VK9N9GQBQ",
    description: "Comprehensive Data Lakes specialization"
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + certificates.length) % certificates.length
    ));
  };

  return (
    <div className="min-h-screen py-20 px-4 gradient-adaptive">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-12"
        >
          Certificates
        </motion.h2>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Certificate Display */}
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full max-w-2xl"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <motion.img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                  {certificates[currentIndex].title}
                </h3>
                <div className="flex justify-between items-center text-adaptive-secondary">
                  <span>{certificates[currentIndex].issuer}</span>
                  <span>{certificates[currentIndex].date}</span>
                </div>
                <p className="text-gray-300">
                  {certificates[currentIndex].description}
                </p>
                <a
                  href={certificates[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={20} />
                  Verify Certificate
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 p-3 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 p-3 bg-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/30"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Certificate Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {certificates.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
