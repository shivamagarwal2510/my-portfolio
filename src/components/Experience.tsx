import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Founding Engineer',
      company: 'Dualite',
      location: 'Remote',
      period: 'October 2024 - Present',
      type: 'Full-time',
      gradient: 'from-blue-500 to-cyan-500',
      achievements: [
        'Building Alpha, an AI Frontend Engineer using Remix and TypeScript with sophisticated architecture integrating Anthropic\'s AI models',
        'Engineered AI-driven code generation system with custom prompt engineering techniques for high-quality, modular code structures'
      ],
      metrics: { funding: 'Rs 1.25Cr', users: '15k+', precision: '90%' }
    },
    {
      title: 'SDE Intern',
      company: 'Dualite',
      location: 'Remote',
      period: 'November 2023 - September 2024',
      type: 'Internship',
      gradient: 'from-purple-500 to-pink-500',
      achievements: [
        'Developed dashboard using Next.js and MongoDB with Figma OAuth, increasing user base from 4,000 to 15,000',
        'Built Component mode improving graphical precision by 90%, securing Rs 1.25 crore in investor funding',
        'Redesigned modern UI for plugin, driving 30% boost in user engagement'
      ],
      metrics: { growth: '275%', engagement: '+30%', funding: 'Rs 1.25Cr' }
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Gagahealth',
      location: 'Remote',
      period: 'March 2023 - April 2023',
      type: 'Internship',
      gradient: 'from-green-500 to-emerald-500',
      achievements: [
        'Built babynama.com from scratch using Next.js 13, TypeScript, and Tailwind CSS, attracting 10,000+ visitors in first month',
        'Integrated Payment APIs leading to 20% increase in conversion rates',
        'Created 5+ reusable ReactJS components, reducing development time by 40%'
      ],
      metrics: { visitors: '10k+', conversion: '+20%', efficiency: '+40%' }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            <span className="text-white font-medium">Professional Journey</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Work
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My journey through innovative companies, building cutting-edge solutions 
            and driving technological advancement in AI and frontend development.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0 group"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-8 top-24 w-0.5 h-40 bg-gradient-to-b from-blue-500/50 to-purple-500/50"
                  initial={{ height: 0 }}
                  whileInView={{ height: 160 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              )}
              
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 top-12 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black shadow-lg shadow-blue-500/50"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.5 }}
              ></motion.div>

              {/* Content Card */}
              <div className="ml-20 relative group">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`}></div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-xl`}
                        >
                          <Building size={20} className="text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium text-blue-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-purple-400 font-medium mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <span className={`bg-gradient-to-r ${exp.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(exp.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: metricIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50"
                      >
                        <div className="text-xl font-bold text-white mb-1">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start group/achievement"
                      >
                        <motion.div
                          className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        ></motion.div>
                        <p className="text-gray-300 leading-relaxed group-hover/achievement:text-white transition-colors duration-200">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievement Icons */}
                  <div className="flex justify-end space-x-2 mt-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="p-2 bg-yellow-500/20 rounded-lg"
                    >
                      <Award className="text-yellow-400" size={16} />
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="p-2 bg-green-500/20 rounded-lg"
                    >
                      <TrendingUp className="text-green-400" size={16} />
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      className="p-2 bg-blue-500/20 rounded-lg"
                    >
                      <Users className="text-blue-400" size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
