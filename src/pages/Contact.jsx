import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/SrihariThipparthi',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/srihari-thipparthi-22a841171',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:thipparthisrihari2@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold text-blue-400 text-center mb-12"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-200">Let's Connect</h2>
            <p className="text-gray-400">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>

            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-gray-200 font-medium">Email</h3>
                <p className="text-gray-400">thipparthisrihari2@gmail.com</p>
              </div>
            </motion.div>

            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all ${link.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            variants={itemVariants}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              className="group relative"
              whileHover={{ y: -2 }}
            >
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800/50 text-gray-200 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="group relative"
              whileHover={{ y: -2 }}
            >
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800/50 text-gray-200 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div
              className="group relative"
              whileHover={{ y: -2 }}
            >
              <MessageSquare className="absolute left-3 top-4 text-gray-400 group-hover:text-blue-400" />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-800/50 text-gray-200 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;