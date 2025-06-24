import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, MessageCircle, Sparkles, Zap, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AutoDoc',
      icon: <Bot className="text-blue-400" size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Revolutionary AI-powered documentation system using RAG with vector embeddings in Pinecone. Leverages OpenAI and Anthropic\'s Claude for intelligent, context-aware documentation generation.',
      technologies: ['FastAPI', 'Streamlit', 'OpenAI', 'Claude', 'Pinecone', 'GitHub API'],
      features: [
        'RAG-based documentation',
        'Real-time code change tracking',
        'Intelligent documentation consistency',
        'Automated Pull Request creation'
      ],
      githubUrl: '#',
      liveUrl: '#',
      stats: { commits: '120+', stars: '45', forks: '12' }
    },
    {
      title: 'TapMe',
      icon: <MessageCircle className="text-green-400" size={32} />,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Next-generation real-time chat application with modern UI/UX. Built with ReactJS and Firebase, featuring seamless user experience and engaging real-time communications.',
      technologies: ['ReactJS', 'Firebase', 'Firestore', 'Auth', 'Tailwind CSS'],
      features: [
        'Real-time messaging',
        'Advanced user authentication',
        'Smart auto-scrolling',
        'Fully responsive design'
      ],
      githubUrl: '#',
      liveUrl: '#',
      stats: { users: '500+', messages: '10k+', uptime: '99.9%' }
    }
  ];
  
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const projectCardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }
    })
  };

  const featureItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.3, delay: i * 0.05 }
    })
  };

  const techTagVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: i * 0.05 }
    })
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-purple-500/30"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <Sparkles className="text-purple-400" size={18} sm:size={20} />
            <span className="text-white font-medium text-sm sm:text-base">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Innovative
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block">
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">
            Cutting-edge solutions that showcase my expertise in AI, full-stack development, 
            and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={projectCardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500`}></div>
              
              <div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                      className={`p-3 sm:p-4 bg-gradient-to-r ${project.gradient} rounded-xl sm:rounded-2xl shadow-lg`}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <span key={key} className="text-xs text-gray-400 bg-gray-700/60 px-2 py-0.5 rounded-full">
                            {value} {key}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl opacity-50 group-hover:opacity-80 transition-opacity"
                  >
                    💡
                  </motion.div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Zap className="text-yellow-400 mr-2" size={16} sm:size={18} />
                    <h4 className="text-base sm:text-lg font-semibold text-white">Key Features</h4>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        custom={featureIndex}
                        variants={featureItemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="flex items-start group/feature"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-[7px] mr-2 sm:mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200`}></div>
                        <span className="text-xs sm:text-sm text-gray-400 group-hover/feature:text-gray-300 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Database className="text-green-400 mr-2" size={16} sm:size={18} />
                    <h4 className="text-base sm:text-lg font-semibold text-white">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        custom={techIndex}
                        variants={techTagVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                        className={`bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current text-current px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-20 transition-all duration-200`}
                        style={{ color: project.gradient.startsWith('from-blue') ? 'var(--tw-color-blue-300)' : 'var(--tw-color-green-300)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.03, y: -1, transition: { type: "spring", stiffness: 300 } }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Github size={16} sm:size={18} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.03, y: -1, transition: { type: "spring", stiffness: 300 } }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
                  >
                    <Globe size={16} sm:size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Want to see more amazing projects?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-lg md:max-w-xl mx-auto">
                These are just highlights. I have many more exciting projects 
                and contributions to share.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Sparkles size={18} sm:size={20} />
                <span>Let's Build Something</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
