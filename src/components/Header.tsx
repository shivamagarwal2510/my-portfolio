import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.2 } },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.3 + i * 0.07 },
    }),
  };
  
  const mobileNavItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: isMenuOpen ? 1 : 0,
      x: isMenuOpen ? 0 : -20,
      transition: { type: "spring", stiffness: 150, damping: 20, delay: i * 0.05 },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };


  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ // Reduced duration for bg change
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-lg shadow-xl shadow-purple-500/10 border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            variants={logoVariants}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }} // Slightly slower rotation
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center"
              >
                <Sparkles className="text-white" size={18} sm:size={20} />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-50"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SA
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={index}
                variants={navItemVariants}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                className="relative px-3 py-1.5 sm:px-4 sm:py-2 text-gray-300 hover:text-white transition-all duration-200 text-sm sm:text-base font-medium group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md sm:rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  layoutId="navbar-hover" // Keep layoutId for smooth hover effect
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }} // Changed to 90 for X
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {isMenuOpen ? <X size={22} sm:size={24} /> : <Menu size={22} sm:size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25, when: "beforeChildren" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                custom={index}
                variants={mobileNavItemVariants}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
