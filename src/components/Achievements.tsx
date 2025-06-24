import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Star, Award, Sparkles, Crown, Zap, Rocket } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Crown className="text-yellow-400" size={40} />,
      title: 'Rs 1.25 Crore Funding',
      description: 'Key contributor to securing Rs 1.25 crore in investor funding at Dualite through innovative development',
      category: 'Business Impact',
      gradient: 'from-yellow-400 to-orange-500',
      metric: '₹1.25Cr',
      bgIcon: '💰'
    },
    {
      icon: <Zap className="text-green-400" size={40} />,
      title: '600+ Problems Solved',
      description: 'Accomplished over 600 problem-solving challenges across various competitive programming platforms',
      category: 'Programming Excellence',
      gradient: 'from-green-400 to-emerald-500',
      metric: '600+',
      bgIcon: '⚡'
    },
    {
      icon: <Star className="text-blue-400" size={40} />,
      title: 'Top 15% on LeetCode',
      description: 'Among top 15% coders globally on LeetCode with a maximum rating of 1683, showcasing consistent excellence',
      category: 'Coding Mastery',
      gradient: 'from-blue-400 to-cyan-500',
      metric: 'Top 15%',
      bgIcon: '⭐'
    },
    {
      icon: <Rocket className="text-purple-400" size={40} />,
      title: 'Global Rank 548',
      description: 'Secured an impressive global rank of 548 in TCS Codevita Season 11 among thousands of participants',
      category: 'Competition Excellence',
      gradient: 'from-purple-400 to-pink-500',
      metric: '#548',
      bgIcon: '🚀'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-yellow-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="text-yellow-400" size={20} />
            <span className="text-white font-medium">Hall of Fame</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Key
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Milestones that showcase my dedication to excellence, continuous growth, 
            and significant impact in the technology industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {achievement.bgIcon}
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 bg-gradient-to-r ${achievement.gradient} rounded-2xl shadow-lg`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.metric}
                    </div>
                  </div>
                </div>
                
                {/* Category Tag */}
                <span className={`inline-block bg-gradient-to-r ${achievement.gradient} bg-opacity-20 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium mb-4`}>
                  {achievement.category}
                </span>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {achievement.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          {/* Main Content */}
          <div className="relative bg-gray-800/30 backdrop-blur-md rounded-3xl p-12 border border-gray-700/50 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block text-6xl mb-6 opacity-20"
            >
              🌟
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate and bring your innovative ideas to life with cutting-edge technology, 
              AI-powered solutions, and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Sparkles size={20} />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                <Target size={20} />
                <span>View Projects</span>
              </motion.a>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 opacity-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡
              </motion.div>
            </div>
            <div className="absolute top-8 right-8 opacity-20">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-8 opacity-20">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                💎
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
