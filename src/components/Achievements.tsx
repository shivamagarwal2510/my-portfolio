import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Crown, Zap, Rocket, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Crown className="text-primary-foreground" size={32} sm:size={40} />,
      title: 'Seed Funding',
      description: 'Key contributor to securing seed funding at Dualite through innovative development.',
      category: 'Business Impact',
      metric: 'Seed Funding',
      bgIcon: '💰'
    },
    {
      icon: <Zap className="text-primary-foreground" size={32} sm:size={40} />,
      title: '600+ Problems Solved',
      description: 'Accomplished over 600 problem-solving challenges across various competitive programming platforms.',
      category: 'Problem Solving',
      metric: '600+',
      bgIcon: '⚡'
    },
    {
      icon: <Star className="text-primary-foreground" size={32} sm:size={40} />,
      title: 'Top 15% on LeetCode',
      description: 'Among top 15% coders globally on LeetCode (Max Rating: 1683).',
      category: 'Coding Mastery',
      metric: 'Top 15%',
      bgIcon: '⭐'
    },
    {
      icon: <Rocket className="text-primary-foreground" size={32} sm:size={40} />,
      title: 'Global Rank 548',
      description: 'Secured an impressive global rank of 548 in TCS Codevita Season 11.',
      category: 'Competition',
      metric: '#548',
      bgIcon: '🚀'
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const achievementCardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18, delay: i * 0.1 }
    })
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-56 h-56 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-40 h-40 sm:w-48 sm:h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-primary/30"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <Trophy className="text-primary" size={18} sm:size={20} />
            <span className="text-foreground font-medium text-sm sm:text-base">Hall of Fame</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Key
            <span className="text-primary block">
              Achievements
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            Milestones that showcase my dedication to excellence, continuous growth, 
            and significant impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={achievementCardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="group relative"
            >
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {achievement.bgIcon}
              </div>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-15 rounded-2xl sm:rounded-3xl blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-surface/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border hover:border-border/80 transition-all duration-500 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                    className="p-3 sm:p-4 bg-primary rounded-xl sm:rounded-2xl shadow-lg"
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-primary">
                      {achievement.metric}
                    </div>
                  </div>
                </div>
                
                <span className="inline-block bg-primary/10 border border-primary/20 text-primary px-2.5 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4 w-fit">
                  {achievement.category}
                </span>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">
                  {achievement.description}
                </p>

                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-primary"
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
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-2xl sm:rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div className="relative bg-surface/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-border text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-5xl sm:text-6xl mb-4 sm:mb-6 opacity-30 group-hover:opacity-50 transition-opacity"
            >
              🌟
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Create{' '}
              <span className="text-primary">
                Something Amazing?
              </span>
            </h3>
            
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Let's collaborate and bring your innovative ideas to life with cutting-edge technology and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
              >
                <Sparkles size={18} sm:size={20} />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-surface hover:bg-border text-foreground px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-200"
              >
                <Trophy size={18} sm:size={20} />
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
