import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Founding Engineer',
      company: 'Dualite',
      location: 'Remote',
      period: 'October 2024 - Present',
      type: 'Full-time',
      typeTagGradient: 'from-blue-500 to-cyan-600',
      iconColor: 'text-blue-400',
      achievements: [
        'Building Alpha, an AI Frontend Engineer using Remix and TypeScript with sophisticated architecture integrating Anthropic\'s AI models',
        'Engineered AI-driven code generation system with custom prompt engineering techniques for high-quality, modular code structures'
      ],
      metrics: { funding: '₹1.25Cr', users: '15k+', precision: '90%' } // Corrected Rupee symbol
    },
    {
      title: 'SDE Intern',
      company: 'Dualite',
      location: 'Remote',
      period: 'November 2023 - September 2024',
      type: 'Internship',
      typeTagGradient: 'from-green-400 to-emerald-500',
      iconColor: 'text-green-400',
      achievements: [
        'Developed dashboard using Next.js and MongoDB with Figma OAuth, increasing user base from 4,000 to 15,000',
        'Built Component mode improving graphical precision by 90%, securing ₹1.25 crore in investor funding', // Corrected Rupee symbol
        'Redesigned modern UI for plugin, driving 30% boost in user engagement'
      ],
      metrics: { growth: '275%', engagement: '+30%', funding: '₹1.25Cr' } // Corrected Rupee symbol
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Gagahealth',
      location: 'Remote',
      period: 'March 2023 - April 2023',
      type: 'Internship',
      typeTagGradient: 'from-green-400 to-emerald-500',
      iconColor: 'text-green-400',
      achievements: [
        'Built babynama.com from scratch using Next.js 13, TypeScript, and Tailwind CSS, attracting 10,000+ visitors in first month',
        'Integrated Payment APIs leading to 20% increase in conversion rates',
        'Created 5+ reusable ReactJS components, reducing development time by 40%'
      ],
      metrics: { visitors: '10k+', conversion: '+20%', efficiency: '+40%' }
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            <span className="text-white font-medium text-sm sm:text-base">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Work
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">
            My journey through innovative companies, building cutting-edge solutions 
            and driving technological advancement.
          </p>
        </motion.div>

        <div className="max-w-2xl md:max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-10 mb-10 sm:mb-12 last:mb-0"
            >
              <motion.div
                className="absolute left-0 top-1 sm:top-2.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/40"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                viewport={{ once: true }}
              />
              {index < experiences.length - 1 && (
                <div className="absolute left-[5px] sm:left-[7px] top-5 sm:top-7 w-px h-[calc(100%_-_0.5rem)] bg-gray-700/60" />
              )}

              <div className="relative bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-gray-800/60 hover:border-gray-700/80 transition-colors duration-300">
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className={`p-1.5 sm:p-2 bg-green-500/10 rounded-md mr-2 sm:mr-3 border border-green-500/30`}>
                      <Building size={16} sm:size={18} className={`${exp.iconColor || 'text-green-400'}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                  </div>

                  <div className="pl-0 sm:pl-1 space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <Building size={12} sm:size={14} className="mr-1.5 sm:mr-2 opacity-60" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <MapPin size={12} sm:size={14} className="mr-1.5 sm:mr-2 opacity-60" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-purple-400 font-medium text-xs sm:text-sm">
                      <Calendar size={12} sm:size={14} className="mr-1.5 sm:mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="pl-0 sm:pl-1">
                    <span className={`bg-gradient-to-r ${exp.typeTagGradient} text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {Object.entries(exp.metrics).map(([key, value]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center p-1.5 px-2 sm:p-2 sm:px-2.5 bg-slate-800/70 rounded-md sm:rounded-lg border border-slate-700/50 min-w-[60px] sm:min-w-[70px] flex-grow sm:flex-grow-0"
                    >
                      <div className="text-xs sm:text-sm font-bold text-white">{value}</div>
                      <div className="text-[9px] sm:text-xs text-gray-400 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: achIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-[6px] sm:mt-[7px] mr-2 sm:mr-2.5 flex-shrink-0"></div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
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
