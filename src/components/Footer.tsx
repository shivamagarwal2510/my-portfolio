import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shivgun03@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
            </motion.div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shivam Agarwal
              </span>
              <p className="text-gray-400 text-sm">AI Frontend Engineer</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
            Building the future of intelligent web development at{' '}
            <span className="text-blue-400 font-semibold">Dualite</span>. 
            Passionate about creating AI-powered solutions that revolutionize user experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-900/50 backdrop-blur-md text-gray-400 hover:text-white rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-200 group"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
          
          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-gray-400 mb-6"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} />
            </motion.div>
            <span>using</span>
            <Code className="text-blue-400" size={16} />
            <span>React, TypeScript & Tailwind CSS</span>
          </motion.div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              © 2025 Shivam Agarwal. All rights reserved. | Crafted with passion and precision.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Empowering the future through AI and innovative frontend development.
            </p>
          </div>

          {/* Floating Animation Elements */}
          <div className="absolute top-8 left-8 opacity-10">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-2xl"
            >
              ⚡
            </motion.div>
          </div>
          <div className="absolute top-12 right-12 opacity-10">
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -180, -360] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="text-2xl"
            >
              🚀
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-10">
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-xl"
            >
              💫
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
