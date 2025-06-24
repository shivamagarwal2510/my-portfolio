import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Sparkles, Zap } from 'lucide-react'; // Palette removed as not used

const About: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-500" size={28} sm:size={32} />,
      title: 'Frontend Magic',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React, Next.js, TypeScript', 'TailwindCSS, Framer Motion', 'Figma API, RTK Query', 'Streamlit, FastAPI']
    },
    {
      icon: <Brain className="text-purple-500" size={28} sm:size={32} />,
      title: 'Programming',
      gradient: 'from-purple-500 to-pink-500',
      skills: ['C++, Python', 'JavaScript, TypeScript', 'Advanced Algorithms']
    },
    {
      icon: <Database className="text-green-500" size={28} sm:size={32} />,
      title: 'Backend & DB',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Node.js, Express.js', 'MongoDB, Firebase', 'SQL, Git, GitHub']
    },
    {
      icon: <Zap className="text-yellow-500" size={28} sm:size={32} />,
      title: 'AI & Tools',
      gradient: 'from-yellow-500 to-orange-500',
      skills: ['OpenAI, Claude', 'Langchain, RAG', 'Dualite Alpha, Cursor']
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)',
          backgroundSize: '20px 20px', // Consistent small pattern
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-blue-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-blue-400" size={18} sm:size={20} />
            <span className="text-white font-medium text-sm sm:text-base">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
              Experiences
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Engineer and AI specialist. Currently a{' '}
            <span className="text-blue-400 font-semibold">Founding Engineer at Dualite</span>, developing 
            Alpha - an AI Frontend Engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h4 className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Bachelor of Technology
                </h4>
                <p className="text-gray-300 font-medium text-sm sm:text-base">Information Technology</p>
                <p className="text-gray-400 text-sm sm:text-base">Harcourt Butler Technical University</p>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <p className="text-gray-400">Dec 2020 - May 2024</p>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2.5 py-1 rounded-full font-semibold">
                    GPA: 8.22
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Core Fundamentals</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {['Operating System', 'OOPs', 'DBMS', 'Networking'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }} // Subtle hover
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl blur-lg transition-all duration-500`}></div>
                <div className="relative bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: 15 }} // Subtle rotate
                      transition={{ duration: 0.3 }}
                      className="p-2 sm:p-3 bg-gray-700/50 rounded-lg sm:rounded-xl mr-2 sm:mr-3"
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <div className="space-y-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.p
                        key={skillIndex}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-xs sm:text-sm leading-relaxed hover:text-gray-300 transition-colors duration-200"
                      >
                        {skill}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
