import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const cardVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };
  
  const cardVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const skillItemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: i * 0.05 }
    })
  };

  const skillCategoryVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 }
    })
  };
  
  const skillTextVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { type: "tween", ease: "easeOut", duration: 0.3, delay: i * 0.05 }
    })
  };

  const profileImageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.2 } 
    }
  };

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
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-blue-500/30"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
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

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
            variants={profileImageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse"></div>
              <motion.img
                src="https://portfolio-shivamagarwal.s3.eu-north-1.amazonaws.com/Shivam2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZCARDR5VJQH3RVO6%2F20250624%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250624T142201Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmV1LW5vcnRoLTEiSDBGAiEA6X9SU3o8cL4ZgfGtUhxaaEWx6LJib69dKSN9peN%2B4QQCIQCx4oVHBLbkOCc1Z7cViLf%2BX%2BQs8oHGhALE4hh3upQbfCqZAggvEAAaDDYyMjgwNjE0MjgyNiIMMcLa1XueUZKG1wucKvYBmJzM2Kt8Ug%2BWXvvFymyLywKW%2Fg7yCi4YhdyPo6Viq91EghDisgmtWbLRYUOOWKgIH2euBjkEIXCRiSNc5AAly3KPrDOHnVAw6veJWrUAIpR42NP9Qctpz%2FEskyGxcCU1udiNT9WX5vbEHdQNlczgbIr3Fc3RAX06L%2BzXrabvBNqtVvZul2MXBsFy1bfoE9dReZpNVvX9viWpyUHoUrGn4rkNQ9%2BfIbTrY4pHsdz4CegvFoZzQs4rIX5pzU%2BFZZR6ovKpHLFQItIbnBXNnUpFLL7aDm4DpT%2Fqv9y81haF%2B3rRRMct5vZaCwZrQ9adwuu%2Bg8Gsc88fMKDi6sIGOt4BmHwqZkyAxkXnF7n4yJzb2jZ4u01G2bXbfL0GRGxDvJNZVktLPFHq%2FAfAMCwPXHT7bKu8plMnU5HApY6IbWz4K65yQzAUcc2w1mn2FIigENzcVBGf9hkkRdYo8lATpZFu1FdRqCNwwvh%2FWZSU2FzP0NcU57Oyxg%2Fe87byx8h2ABdvGtHRO09zAYDrk4f0%2Fq9j%2BrqsFkvdNwHYug0LPhYr2S3HWoWJ9AMv3c3%2FMkw4KrBZ6TAoDvCXNJI%2Fa6LcF3SYBt6yme9%2BMni6ygAeWhHFQSuVILD8ZQq32qJjUEWn&X-Amz-Signature=90b35e2e1bba51ae12fc002e8294acf2e1a1d56d343bdd42d6262c05609f35db&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                alt="Shivam Agarwal - Professional Photo"
                className="relative w-full h-full object-cover rounded-2xl border-2 border-gray-600/50 shadow-2xl group-hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ 
                  scale: 1.03,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300 } 
                }}
                loading="lazy"
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-800 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                    custom={index}
                    variants={skillItemVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
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
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                custom={index}
                variants={skillCategoryVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl blur-lg transition-all duration-500`}></div>
                <div className="relative bg-gray-800/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, transition: { type: "spring", stiffness: 400 } }}
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
                        custom={skillIndex}
                        variants={skillTextVariant}
                        initial="hidden"
                        whileInView="visible"
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
