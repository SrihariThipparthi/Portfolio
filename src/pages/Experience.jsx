import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Areete Business Solutions",
      role: "Machine Learning Engineer",
      duration: "2023 - 2025",
      location: "Pune, India",
      responsibilities: [
        "Developed and deployed ML models for cattle health monitoring",
        "Designed streaming architecture using AWS services",
        "Implemented Generative AI solutions for farmers",
        "Created deep learning models for video analysis",
        "Built interactive dashboards for data visualization"
      ],
      skills: [
        "Machine Learning",
        "Deep Learning",
        "AWS",
        "Python",
        "Data Engineering",
        "Computer Vision",
        "IoT",
        "Generative AI"
      ],
      achievements: [
        "Reduced manual monitoring time by 60%",
        "Improved prediction accuracy by 40%",
        "Automated data processing pipeline"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-400 mb-12 text-center"
        >
          Professional Experience
        </motion.h1>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 hover:bg-gray-700/50 transition-all"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-blue-400">{exp.company}</h2>
                <div className="flex items-center text-gray-400 mt-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{exp.role}</span>
                </div>
                <div className="flex items-center text-gray-400 mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.duration}</span>
                </div>
              </motion.div>

              <motion.div
                className="mt-4 md:mt-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">Key Achievements</h3>
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-gray-300 mb-1"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <Award className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {exp.responsibilities.map((resp, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400 mt-1" />
                    <span className="text-gray-300">{resp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + (i * 0.1) }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;