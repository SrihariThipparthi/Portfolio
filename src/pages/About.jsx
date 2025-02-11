import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-400 mb-8"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-gray-300 text-center space-y-4"
      >
        <p>Hello, I’mSrihari, a Machine Learning Engineer and Data Scientist with a solid foundation in Data Science Field. During my second
          year at university, I discovered a passion for statistics and machine learning, which ignited my commitment to the field. Since then,
          I have dedicated myself to acquiring a comprehensive understanding of data science, ranging from fundamental concepts to
          advanced techniques. This dedication has culminated in my current position as a Data Scientist at an AI company, where I apply my
          skills to tackle real-world challenges and drive impactful solutions.</p>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          {/* Add your skills/tech stack here */}
          <div className="p-4 bg-gray-800 rounded-lg">Skill 1</div>
          <div className="p-4 bg-gray-800 rounded-lg">Skill 2</div>
          <div className="p-4 bg-gray-800 rounded-lg">Skill 3</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;