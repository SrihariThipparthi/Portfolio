import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50"
      >
        <img
          src="/profile.jpg" // Add your profile photo to the public folder
          alt="Srihari Thipparthi"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold text-blue-400">
          Srihari Thipparthi
        </h1>
        <h2 className="text-2xl text-gray-400">
          Data Scientist / Machine Learning Engineer
        </h2>
        <p className="max-w-lg mx-auto text-gray-300">
          Passionate about creating innovative solutions with modern technologies.
          Specialized in full-stack development and machine learning.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          View Projects
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500/10 transition-colors"
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  );
}

export default Home;