import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin, Github, Linkedin, Code, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', // Subtle dots
            backgroundSize: '30px 30px' // Smaller dot pattern
          }}></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => ( // Reduced number of floating elements
          <motion.div
            key={i}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-600/5 blur-xl" // Softer blur
            animate={{
              x: [0, 50 + i*10, 0], // Varied animation
              y: [0, -50 - i*10, 0],
              scale: [1, 1.1 + i*0.05, 1],
            }}
            transition={{
              duration: 12 + i * 3, // Slower, varied duration
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${15 + i * 18}%`, // Adjusted positioning
              top: `${10 + i * 18}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 border border-white/20"
            >
              <Sparkles className="text-yellow-400" size={18} sm:size={20} />
              <span className="text-white font-medium text-sm sm:text-base">Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-3 sm:mb-4 relative">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Shivam
              </motion.span>
              <br className="md:hidden" /> {/* Break on mobile for better flow */}
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Agarwal
              </motion.span>
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-3xl sm:text-4xl" // Adjusted emoji size
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
                AI Frontend Engineer & Founding Engineer
              </p>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-lg md:max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6">
              Building the future of AI-powered frontend development at{' '}
              <span className="text-cyan-400 font-semibold">Dualite</span>. 
              Passionate about creating intelligent systems that generate beautiful, 
              responsive user interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
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
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-white/90 text-xs sm:text-sm"
              >
                <item.icon size={16} sm:size={18} />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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
                whileHover={{ scale: 1.1, y: -5 }}
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
            transition={{ duration: 1, delay: 1.6 }}
            className="relative"
          >
            <motion.a
              href="#about"
              aria-label="Scroll to about section"
              className="inline-block group"
              animate={{ y: [0, 8, 0] }} // Reduced bounce
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} // Slower bounce
            >
              <div className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <ArrowDown className="text-white group-hover:text-cyan-400 transition-colors" size={20} sm:size={24} />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
