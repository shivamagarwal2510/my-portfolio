import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Crown, Zap, Rocket, Star } from 'lucide-react'; // Added Star

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Crown className="text-yellow-400" size={32} sm:size={40} />,
      title: '₹1.25 Crore Funding', // Corrected Rupee symbol
      description: 'Key contributor to securing investor funding at Dualite through innovative development.',
      category: 'Business Impact',
      gradient: 'from-yellow-400 to-orange-500',
      metric: '₹1.25Cr',
      bgIcon: '💰'
    },
    {
      icon: <Zap className="text-green-400" size={32} sm:size={40} />,
      title: '600+ Problems Solved',
      description: 'Accomplished over 600 problem-solving challenges across various competitive programming platforms.',
      category: 'Problem Solving',
      gradient: 'from-green-400 to-emerald-500',
      metric: '600+',
      bgIcon: '⚡'
    },
    {
      icon: <Star className="text-blue-400" size={32} sm:size={40} />,
      title: 'Top 15% on LeetCode',
      description: 'Among top 15% coders globally on LeetCode (Max Rating: 1683).',
      category: 'Coding Mastery',
      gradient: 'from-blue-400 to-cyan-500',
      metric: 'Top 15%',
      bgIcon: '⭐'
    },
    {
      icon: <Rocket className="text-purple-400" size={32} sm:size={40} />,
      title: 'Global Rank 548',
      description: 'Secured an impressive global rank of 548 in TCS Codevita Season 11.',
      category: 'Competition',
      gradient: 'from-purple-400 to-pink-500',
      metric: '#548',
      bgIcon: '🚀'
    }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-56 h-56 sm:w-64 sm:h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-yellow-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="text-yellow-400" size={18} sm:size={20} />
            <span className="text-white font-medium text-sm sm:text-base">Hall of Fame</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Key
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">
              Achievements
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">
            Milestones that showcase my dedication to excellence, continuous growth, 
            and significant impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }} // Subtle hover
              className="group relative"
            >
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {achievement.bgIcon}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500`}></div>
              
              <div className="relative bg-gray-800/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }} // Subtle icon hover
                    transition={{ duration: 0.3 }}
                    className={`p-3 sm:p-4 bg-gradient-to-r ${achievement.gradient} rounded-xl sm:rounded-2xl shadow-lg`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-right">
                    <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.metric}
                    </div>
                  </div>
                </div>
                
                <span className={`inline-block bg-gradient-to-r ${achievement.gradient} bg-opacity-20 border border-current text-current px-2.5 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4`}
                  style={{ color: achievement.gradient.startsWith('from-yellow') ? 'var(--tw-color-yellow-300)' : achievement.gradient.startsWith('from-green') ? 'var(--tw-color-green-300)' : achievement.gradient.startsWith('from-blue') ? 'var(--tw-color-blue-300)' : 'var(--tw-color-purple-300)' }}
                >
                  {achievement.category}
                </span>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {achievement.description}
                </p>

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1 h-1 rounded-full bg-gradient-to-r ${achievement.gradient}`}
                      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative bg-gray-800/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-700/50 text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-5xl sm:text-6xl mb-4 sm:mb-6 opacity-30 group-hover:opacity-50 transition-opacity"
            >
              🌟
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Create{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h3>
            
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Let's collaborate and bring your innovative ideas to life with cutting-edge technology and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Sparkles size={18} sm:size={20} />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-200"
              >
                <Trophy size={18} sm:size={20} /> {/* Changed icon to Trophy */}
                <span>View My Work</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
