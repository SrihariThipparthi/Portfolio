import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, X, Github, ExternalLink } from 'lucide-react';

// Import project images
import project1Image from '../imgs/projects/project1.jpg';
import project2Image from '../imgs/projects/project2.jpg';
import project3Image from '../imgs/projects/project3.jpg';
import project4Image from '../imgs/projects/project4.jpg';
import project5Image from '../imgs/projects/project5.jpg';
import project6Image from '../imgs/projects/project6.jpg';
import projectPersonal1Image from '../imgs/projects/project101.jpg';
import projectPersonal2Image from '../imgs/projects/project102.jpg';
import projectPersonal3Image from '../imgs/projects/project103.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const professionalProjects = [
    {
      id: 1,
      title: "Cattle Health Monitoring",
      shortDesc: "IoT-powered real-time cattle health monitoring system",
      tech: ["AWS IoT", "Data Wrangling", "Data Processing", "Data Visualization", "Feature Engineering", "Hypothesis Testing", "FFT", "Machine Learning", "Python", "C++", "MySQL", "NumPy", "Pandas", "Dask", "MATLAB"],
      fullDesc: "Developed a cutting-edge IoT-based system for real-time cattle health monitoring, leveraging advanced machine learning models. The system delivers predictive analytics and actionable insights to enhance livestock management and well-being.",
      highlights: [
        "Implemented IoT-enabled sensors to continuously monitor key health metrics and behavioral patterns in cattle.",
        "Utilized machine learning algorithms to analyze collected data, identifying health anomalies and heat symptoms.",
        "Processed data in the cloud to generate real-time health diagnostics and predictive alerts for early intervention.",
        "Empowered farmers and veterinarians with remote monitoring capabilities, enabling timely and informed decision-making."
      ],
      image: project1Image
    },
    {
      id: 2,
      title: "Building Stream Architecture in AWS",
      shortDesc: "Scalable IoT data processing and analytics architecture",
      tech: ["AWS IoT", "Data Engineering", "Machine Learning", "Data Streaming", "Real-time Analytics", "Python", "DynamoDB", "S3", "Athena", "quick sights",  "Lambda", "EventBridge", "SNS", "IAM", "CloudWatch", "EC2","vpc", "RDS"],
      fullDesc: "Designed and implemented a robust architecture for collecting, processing, and analyzing IoT sensor data from farms using AWS services. The system ensures scalable, secure, and real-time insights for agricultural applications.",
      highlights: [
        " Developed an end-to-end IoT data pipeline to efficiently collect and process real-time sensor data from farms.",
        " Integrated machine learning models to analyze incoming data and generate predictive insights.",
        " Designed a user-friendly visualization system that presents key metrics and predictions through interactive graphs.",
        " Enabled real-time monitoring and decision-making by providing actionable insights in farmers' local language.",
        " Leveraged AWS cloud services to ensure scalability, security, and seamless data processing for agricultural IoT applications."
      ],
      image: project2Image
    },
    {
      id: 3,
      title: "Generative AI for Cattle Management",
      shortDesc: "AI-powered assistant for livestock health and management",
      tech: ["Generative AI", "Natural Language Processing", "Machine Learning", "Deep Learning", "Python", "AWS-Bedrock", "LLMs", "AWS S3", "DynamoDB", "Lambda", "API Gateway", "lang-chain", "Agents", "Pandas-AI", "RAG(Retriecval Augmented Generation"],
      fullDesc: "Developed an advanced generative AI system to assist farmers with insights on cattle breeds, health issues, treatments, and overall management. The AI provides real-time, data-driven recommendations to enhance livestock care and productivity.",
      highlights: [
        " Designed an AI-powered assistant to provide farmers with valuable insights on cattle health, breed characteristics, and management best practices.",
        " Integrated a knowledge base with in-depth information on cow care, enabling farmers to make informed decisions.",
        " Developed an interactive system allowing farmers to engage with the AI for real-time guidance on health monitoring and disease prevention.",
        " Ensured accessibility by supporting multiple languages and intuitive interfaces tailored for rural users."
      ],
      image: project3Image
    },
    {   
      id: 4,
      title: "Deep Learning-Based Cow Activity Recognition",
      shortDesc: "AI-powered video analysis for cattle behavior monitoring",
      tech: ["Deep Learning", "Computer Vision", "Convolutional Neural Networks (CNNs)", "PyTorch", "Python", "OpenCV", "TensorFlow", "RDBMS", "AWS S3", "FFmpeg"],
      fullDesc: "Developed a Deep Learning model to analyze cow behavior from video footage, enabling real-time activity recognition for health and productivity monitoring. The system leverages advanced video processing and deep learning techniques to extract meaningful insights.",
      highlights: [
        " Built a video-based AI model to process cow activity and monitor behavioral patterns for health assessment.",
        " Implemented video preprocessing techniques, including frame extraction, resizing, and noise reduction, to enhance model accuracy.",
        " Applied Convolutional Neural Networks (CNNs) for spatial feature extraction and integrated temporal analysis for movement tracking.",
        " Designed the system to support real-time monitoring, providing actionable insights for livestock management and disease prevention."
      ],
      image: project4Image
    },
    {
      id: 5,
      title: "Cow Yield Recording System",
      shortDesc: "Streamlined milk yield tracking for data-driven farming",
      tech: ["IoT", "Data Logging", "Machine Learning", "Python", "Streamlit", "AWS S3", "AWS Translate", "AWS Transcribe", "AWS Polly", "DynamoDB", "PostgreSQL", "NumPy", "Pandas"],
      fullDesc: "Developed a Cow Yield Recording System to empower farmers by simplifying the process of recording and managing milk production data. The system enhances efficiency, promotes data-driven decision-making, and helps optimize cow health and yield through proper nutrition.",
      highlights: [
        " Designed an intuitive system for farmers to log and track daily milk production data effortlessly.",
        " Integrated real-time data processing to analyze trends and provide actionable insights for improving milk yield.",
        " Enabled predictive analytics to assess cow health and optimize nutrition for better productivity.",
        " Leveraged cloud storage and database solutions to ensure secure and scalable data management."
      ],
      image: project5Image
    },
    {
      id: 6,
      title: "Feed Nutrition Requirement (Ration Balancing)",
      shortDesc: "Optimized cattle nutrition and cost-effective feed planning",
      tech: ["Optimization Algorithms", "Machine Learning", "Python", "Streamlit", "NumPy", "Pandas", "Linear Programming", "AWS S3", "PostgreSQL"],
      fullDesc: "Developed an application to help farmers optimize cattle nutrition and minimize feed costs. The system calculates dry matter, metabolic energy, and crude protein requirements based on cow weight, milk yield, and fat percentage. It suggests an optimal feed plan by balancing nutritional needs with available fodder while ensuring cost efficiency.",
      highlights: [
        " Designed an intuitive system for farmers to input cow parameters and receive personalized feed recommendations.",
        " Implemented an optimization algorithm to balance nutrient intake and minimize feeding costs.",
        " Enabled real-time analysis by comparing nutritional requirements with available fodder compositions.",
        " Provided an easy-to-use interface that generates daily feed plans and cost estimates, improving cow health and productivity."
      ],
      image: project6Image
    }
  ];

  const personalProjects = [
    {
      id: 101,
      title: "Mental Health Prediction: Kaggle Playground Competition",
      shortDesc: "Predicting depression using machine learning",
      tech: ["Data Cleaning", "Feature Engineering", "Exploratory Data Analysis (EDA)", "Machine Learning", "Feature Selection", "Model Deployment"],
      fullDesc: "Developed a machine learning model to predict whether an individual is experiencing depression based on personal and environmental factors. The project utilized a dataset from a Kaggle Playground competition, focusing on data preprocessing, feature selection, and model optimization to achieve high predictive accuracy.",
      highlights: [
        " Conducted thorough data cleaning to remove inconsistencies and handle missing values.",
        " Applied feature engineering techniques to enhance model performance and extract meaningful insights.",
        " Performed exploratory data analysis (EDA) to identify trends and correlations in the dataset.",
        " Built and optimized supervised learning models for depression prediction, leveraging LightGBM for classification.",
        " Selected the most impactful features using statistical and machine learning-based approaches.",
        " Deployed the best-performing model for real-world predictions, ensuring scalability and efficiency."
      ],
      image: projectPersonal1Image
    },
    {
      id: 102,
      title: "Health Insurance Cost Prediction using Machine Learning",
      shortDesc: "Machine learning model for health insurance cost prediction",
      tech: ["Data Preprocessing", "Exploratory Data Analysis (EDA)", "Random Forest Classifier", "Flask", "Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      fullDesc: "Developed a machine learning model to predict health insurance costs based on key factors such as age, BMI, smoking status, and region. The project involved data preprocessing, visualization, and model optimization to improve prediction accuracy. After achieving the best accuracy, the model was deployed as a web application using Flask.",
      highlights: [
        " Collaborated with project trainees and senior data scientists to refine model performance.",
        " Conducted data preprocessing, handling missing values and normalizing features for better predictions.",
        " Performed exploratory data analysis (EDA) to identify key correlations and trends.",
        " Built and optimized a Random Forest Classifier for insurance cost prediction, achieving high accuracy.",
        " Deployed the final model as a web application using Flask, allowing users to input data and receive predictions in real time."
      ],
      image: projectPersonal2Image
    },
    {
      "id": 103,
      "title": "Appliance Energy Prediction using Machine Learning",
      "shortDesc": "Machine learning model for predicting household appliance energy consumption.",
      "tech": ["Data Preprocessing", "Exploratory Data Analysis (EDA)", "Regression Models", "Flask", "Machine Learning", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
      "fullDesc": "Developed a machine learning model to predict household appliance energy consumption based on factors such as temperature, humidity, and time of day. The project involved feature engineering, data visualization, and model optimization to improve accuracy. The final model was deployed as a web application using Flask to provide real-time energy predictions.",
      "highlights": [
        " Conducted thorough data preprocessing, handling missing values and scaling features for improved accuracy.",
        " Performed exploratory data analysis (EDA) to identify trends and correlations in energy consumption data.",
        " Built and optimized regression models, including Linear Regression and Random Forest Regressor, achieving reliable predictions.",
        " Deployed the trained model as a web application using Flask, allowing users to input relevant parameters and receive energy usage predictions."
      ],
      "image": projectPersonal3Image
    }
  ];

  const ProjectCard = ({ project, isPersonal }) => (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => setSelectedProject(project)}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:bg-gray-700/50 transition-colors"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Add circular image container */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-400/30">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-blue-400 mb-2 text-center">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.shortDesc}</p>
      <div className="mt-4 flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar">
        {project.tech.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
      <ChevronRight className="mt-4 text-blue-400" />
    </motion.div>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-4xl font-bold text-blue-400 mb-8"
        >
          Projects
        </motion.h2>

        {/* Project Grids */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Professional Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalProjects.map(project => (
                <ProjectCard key={project.id} project={project} isPersonal={false} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map(project => (
                <ProjectCard key={project.id} project={project} isPersonal={true} />
              ))}
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={() => setSelectedProject(null)}
              />
              
              {/* Updated Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                {/* Updated Modal Content */}
                <motion.div
                  layoutId={`project-${selectedProject.id}`}
                  className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative custom-scrollbar"
                  onClick={e => e.stopPropagation()}
                  style={{
                    margin: 'auto',
                    transform: 'translateY(0)'  // Reset any transform
                  }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>

                  {/* Project Content */}
                  <div className="mt-2">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">{selectedProject.title}</h3>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-400/30"
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <p className="text-gray-300 mb-4">{selectedProject.fullDesc}</p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-blue-400">Key Highlights</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {selectedProject.github && (
                      <div className="mt-6 flex gap-4">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >
                          <Github size={20} />
                          View Source
                        </a>
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
