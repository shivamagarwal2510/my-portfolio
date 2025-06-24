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

  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 15, 
        delay: 0.3 
      } 
    }
  };
  
  const floatingElementTransition = (i: number) => ({
    x: [0, 50 + i*5, 0],
    y: [0, -50 - i*5, 0],
    scale: [1, 1.05 + i*0.02, 1],
    transition: {
      duration: 15 + i * 2,
      repeat: Infinity,
      ease: "linear"
    }
  });

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-600/5 blur-xl"
            animate={floatingElementTransition(i).x ? floatingElementTransition(i) : undefined}
            style={{
              left: `${10 + i * 22}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.div
            variants={itemVariants}
            className="space-y-3 sm:space-y-4"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/20"
            >
              <Sparkles className="text-yellow-400" size={16} sm:size={18} />
              <span className="text-white font-medium text-xs sm:text-sm">Available for new opportunities</span>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              variants={profileImageVariants}
              className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
              <motion.img
                src="https://portfolio-shivamagarwal.s3.eu-north-1.amazonaws.com/Shivam2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZCARDR5VJQH3RVO6%2F20250624%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250624T142201Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmV1LW5vcnRoLTEiSDBGAiEA6X9SU3o8cL4ZgfGtUhxaaEWx6LJib69dKSN9peN%2B4QQCIQCx4oVHBLbkOCc1Z7cViLf%2BX%2BQs8oHGhALE4hh3upQbfCqZAggvEAAaDDYyMjgwNjE0MjgyNiIMMcLa1XueUZKG1wucKvYBmJzM2Kt8Ug%2BWXvvFymyLywKW%2Fg7yCi4YhdyPo6Viq91EghDisgmtWbLRYUOOWKgIH2euBjkEIXCRiSNc5AAly3KPrDOHnVAw6veJWrUAIpR42NP9Qctpz%2FEskyGxcCU1udiNT9WX5vbEHdQNlczgbIr3Fc3RAX06L%2BzXrabvBNqtVvZul2MXBsFy1bfoE9dReZpNVvX9viWpyUHoUrGn4rkNQ9%2BfIbTrY4pHsdz4CegvFoZzQs4rIX5pzU%2BFZZR6ovKpHLFQItIbnBXNnUpFLL7aDm4DpT%2Fqv9y81haF%2B3rRRMct5vZaCwZrQ9adwuu%2Bg8Gsc88fMKDi6sIGOt4BmHwqZkyAxkXnF7n4yJzb2jZ4u01G2bXbfL0GRGxDvJNZVktLPFHq%2FAfAMCwPXHT7bKu8plMnU5HApY6IbWz4K65yQzAUcc2w1mn2FIigENzcVBGf9hkkRdYo8lATpZFu1FdRqCNwwvh%2FWZSU2FzP0NcU57Oyxg%2Fe87byx8h2ABdvGtHRO09zAYDrk4f0%2Fq9j%2BrqsFkvdNwHYug0LPhYr2S3HWoWJ9AMv3c3%2FMkw4KrBZ6TAoDvCXNJI%2Fa6LcF3SYBt6yme9%2BMni6ygAeWhHFQSuVILD8ZQq32qJjUEWn&X-Amz-Signature=90b35e2e1bba51ae12fc002e8294acf2e1a1d56d343bdd42d6262c05609f35db&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                alt="Shivam Agarwal - AI Frontend Engineer"
                className="relative w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl"
                whileHover={{ 
                  scale: 1.05, 
                  transition: { type: "spring", stiffness: 300 } 
                }}
                loading="eager"
              />
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white relative">
              <motion.span variants={titleSpan1Variants}>
                Shivam{' '}
              </motion.span>
              <motion.span variants={titleSpan2Variants}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Agarwal
              </motion.span>
              <motion.div
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-xl sm:text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </h1>

            <motion.div
              variants={slowItemVariants}
              className="flex items-center justify-center space-x-2"
            >
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                AI Frontend Engineer & Founding Engineer
              </p>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
            </motion.div>
          </div>

          <motion.p
            variants={slowItemVariants}
            className="text-xs sm:text-sm md:text-base text-white/80 max-w-xs sm:max-w-lg md:max-w-xl mx-auto leading-relaxed"
          >
            Building the future of AI-powered frontend development at{' '}
            <span className="text-cyan-400 font-semibold">Dualite</span>. 
            Passionate about creating intelligent systems that generate beautiful, 
            responsive user interfaces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
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
                className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 text-white/90 text-xs"
              >
                <item.icon size={12} sm:size={14} />
                <span className="hidden sm:inline">{item.text}</span>
                <span className="sm:hidden">{item.text.split('@')[0] || item.text.split(' ')[0]}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-3 sm:space-x-4"
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
                whileHover={{ scale: 1.1, y: -3, transition: { type: "spring", stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className="group p-2.5 sm:p-3 bg-white/10 backdrop-blur-md text-white rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <social.icon size={16} sm:size={18} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
            className="pt-2 sm:pt-4"
          >
            <motion.a
              href="#about"
              aria-label="Scroll to about section"
              className="inline-block group"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="p-2 sm:p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <ArrowDown className="text-white group-hover:text-cyan-400 transition-colors" size={16} sm:size={18} />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
