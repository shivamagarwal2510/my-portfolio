import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, MessageCircle, Sparkles, Zap, Database, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AutoDoc',
      icon: <Bot className="text-blue-400" size={40} />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Revolutionary AI-powered documentation system using RAG with vector embeddings in Pinecone. Leverages OpenAI and Anthropic\'s Claude for intelligent, context-aware documentation generation.',
      technologies: ['FastAPI', 'Streamlit', 'OpenAI', 'Anthropic Claude', 'Pinecone', 'GitHub API'],
      features: [
        'RAG-based documentation with vector embeddings',
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
      icon: <MessageCircle className="text-green-400" size={40} />,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Next-generation real-time chat application with modern UI/UX. Built with ReactJS and Firebase, featuring seamless user experience and engaging real-time communications.',
      technologies: ['ReactJS', 'Firebase', 'Firestore', 'Firebase Auth', 'Tailwind CSS'],
      features: [
        'Real-time messaging with Firestore',
        'Advanced user authentication',
        'Smart auto-scrolling system',
        'Fully responsive design'
      ],
      githubUrl: '#',
      liveUrl: '#',
      stats: { users: '500+', messages: '10k+', uptime: '99.9%' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-purple-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-white font-medium">Featured Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge solutions that showcase my expertise in AI, full-stack development, 
            and modern web technologies. Each project represents a unique challenge solved with innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl shadow-lg`}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <span key={key} className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                            {value} {key}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-2xl opacity-50"
                  >
                    ⚡
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Zap className="text-yellow-400 mr-2" size={18} />
                    <h4 className="text-lg font-semibold text-white">Key Features</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start group/feature"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-200"></div>
                        <span className="text-gray-400 text-sm group-hover/feature:text-gray-300 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Database className="text-green-400 mr-2" size={18} />
                    <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all duration-200`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <Globe size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to see more amazing projects?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                These are just highlights of my work. I have many more exciting projects 
                and contributions that showcase different aspects of my expertise.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Sparkles size={20} />
                <span>Let's Build Something Amazing</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
