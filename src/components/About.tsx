import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Brain, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-500" size={32} />,
      title: 'Frontend Magic',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React, Next.js, TypeScript', 'TailwindCSS, Framer Motion', 'Figma API, RTK Query', 'Streamlit, FastAPI']
    },
    {
      icon: <Brain className="text-purple-500" size={32} />,
      title: 'Programming',
      gradient: 'from-purple-500 to-pink-500',
      skills: ['C++, Python', 'JavaScript, TypeScript', 'Advanced Algorithms']
    },
    {
      icon: <Database className="text-green-500" size={32} />,
      title: 'Backend & DB',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Node.js, Express.js', 'MongoDB, Firebase', 'SQL, Git, GitHub']
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: 'AI & Tools',
      gradient: 'from-yellow-500 to-orange-500',
      skills: ['OpenAI, Claude', 'Langchain, RAG', 'Dualite Alpha, Cursor']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-blue-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="text-blue-400" size={20} />
            <span className="text-white font-medium">About Me</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
              Experiences
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Engineer and AI specialist with expertise in building intelligent 
            systems that revolutionize how we create user interfaces. Currently serving as a{' '}
            <span className="text-blue-400 font-semibold">Founding Engineer at Dualite</span>, where I'm developing 
            Alpha - an AI Frontend Engineer that generates responsive, modular code across multiple frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Bachelor of Technology
                </h4>
                <p className="text-gray-300 font-medium">Information Technology</p>
                <p className="text-gray-400">Harcourt Butler Technical University</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">December 2020 - May 2024</p>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-white">Core Fundamentals</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Operating System', 'OOPs', 'DBMS', 'Networking'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-2 rounded-xl text-sm font-medium text-center hover:scale-105 transition-transform duration-200"
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
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gray-700/50 rounded-xl mr-3"
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.p
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-200"
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
