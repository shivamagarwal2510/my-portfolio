import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' }, // Replace with actual URL
    { icon: Linkedin, href: '#', label: 'LinkedIn' }, // Replace with actual URL
    { icon: Mail, href: 'mailto:shivgun03@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-56 h-56 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-64 sm:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <motion.div
              whileHover={{ rotate: 15 }} // Subtle rotate
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white" size={20} sm:size={24} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
            </motion.div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shivam Agarwal
              </span>
              <p className="text-gray-400 text-xs sm:text-sm">AI Frontend Engineer</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
            Building the future of intelligent web development at{' '}
            <span className="text-blue-400 font-semibold">Dualite</span>.
          </p>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.label === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2.5 sm:p-3 bg-gray-900/50 backdrop-blur-md text-gray-400 hover:text-white rounded-lg sm:rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 group"
              >
                <social.icon size={18} sm:size={20} />
              </motion.a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 sm:mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6"
          >
            <span>Made with</span>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Heart className="text-red-500" size={14} sm:size={16} />
            </motion.div>
            <span>using</span>
            <Code className="text-blue-400" size={14} sm:size={16} />
            <span>React, TypeScript & Tailwind CSS</span>
          </motion.div>
          
          <div className="pt-4 sm:pt-6 border-t border-gray-800/50">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Shivam Agarwal. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] sm:text-xs mt-1 sm:mt-2">
              Crafted with passion and precision.
            </p>
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute top-8 left-8 opacity-5">
            <motion.div animate={{ y: [0, -5, 0], rotate: [0, 90, 180] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="text-xl">⚡</motion.div>
          </div>
          <div className="absolute top-12 right-12 opacity-5">
            <motion.div animate={{ y: [0, 5, 0], rotate: [0, -90, -180] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="text-xl">🚀</motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
