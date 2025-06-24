import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin, Github, Linkedin, Code, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };
  
  const slowItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 } }
  };

  const titleSpan1Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.4 } }
  };

  const titleSpan2Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 } }
  };
  
  const floatingElementTransition = (i: number) => ({
    x: [0, 50 + i*5, 0], // Reduced movement range
    y: [0, -50 - i*5, 0],
    scale: [1, 1.05 + i*0.02, 1], // Reduced scale variation
    transition: {
      duration: 15 + i * 2, // Slightly increased base duration for smoother effect
      repeat: Infinity,
      ease: "linear"
    }
  });


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => ( // Reduced to 4 floating elements
          <motion.div
            key={i}
            className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-600/5 blur-xl" // Slightly smaller
            animate={floatingElementTransition(i).x ? floatingElementTransition(i) : undefined}
            style={{
              left: `${10 + i * 22}%`, // Adjusted positioning for fewer elements
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-white/20"
            >
              <Sparkles className="text-yellow-400" size={18} sm:size={20} />
              <span className="text-white font-medium text-sm sm:text-base">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-3 sm:mb-4 relative">
              <motion.span variants={titleSpan1Variants}>
                Shivam
              </motion.span>
              <br className="md:hidden" />
              <motion.span variants={titleSpan2Variants}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Agarwal
              </motion.span>
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-3xl sm:text-4xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </h1>

            <motion.div
              variants={slowItemVariants}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
                AI Frontend Engineer & Founding Engineer
              </p>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>

          <motion.p
            variants={slowItemVariants}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-lg md:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8"
          >
            Building the future of AI-powered frontend development at{' '}
            <span className="text-cyan-400 font-semibold">Dualite</span>. 
            Passionate about creating intelligent systems that generate beautiful, 
            responsive user interfaces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {[
              { icon: Mail, text: 'shivgun03@gmail.com', href: 'mailto:shivgun03@gmail.com' },
              { icon: Phone, text: '+91 7571094727', href: 'tel:+917571094727' },
              { icon: MapPin, text: 'UP, India', href: '#' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 text-xs sm:text-sm"
              >
                <item.icon size={16} sm:size={18} />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Code, href: "#", label: "LeetCode" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -5, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className="group p-3 sm:p-4 bg-white/10 backdrop-blur-md text-white rounded-xl sm:rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <social.icon size={20} sm:size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
            className="relative"
          >
            <motion.a
              href="#about"
              aria-label="Scroll to about section"
              className="inline-block group"
              animate={{ y: [0, 6, 0] }} // Reduced bounce slightly
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} // Slightly slower bounce
            >
              <div className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <ArrowDown className="text-white group-hover:text-cyan-400 transition-colors" size={20} sm:size={24} />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
