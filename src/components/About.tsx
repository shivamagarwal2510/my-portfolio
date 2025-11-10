import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Sparkles, Zap, ChevronRight } from 'lucide-react';

const About: React.FC = () => {

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const cardVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };
  
  const cardVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const skillItemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: i * 0.05 }
    })
  };

  const skillCategoryVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, delay: i * 0.1 }
    })
  };
  
  const skillTextVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { type: "tween", ease: "easeOut", duration: 0.3, delay: i * 0.05 }
    })
  };

  const skillCategories = [
    {
      icon: <Code className="text-primary" size={28} sm:size={32} />,
      title: 'Frontend Magic',
      skills: ['React, Next.js, TypeScript', 'TailwindCSS, Framer Motion', 'Figma API, RTK Query', 'Streamlit, FastAPI']
    },
    {
      icon: <Brain className="text-primary" size={28} sm:size={32} />,
      title: 'Programming',
      skills: ['C++, Python', 'JavaScript, TypeScript', 'Advanced Algorithms']
    },
    {
      icon: <Database className="text-primary" size={28} sm:size={32} />,
      title: 'Backend & DB',
      skills: ['Node.js, Express.js', 'MongoDB, Firebase', 'SQL, Git, GitHub']
    },
    {
      icon: <Zap className="text-primary" size={28} sm:size={32} />,
      title: 'AI & Tools',
      skills: ['OpenAI, Claude', 'Langchain, RAG', 'Dualite Alpha, Cursor']
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.08) 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
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
            <Sparkles className="text-primary" size={18} sm:size={20} />
            <span className="text-foreground font-medium text-sm sm:text-base">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Crafting Digital
            <span className="text-primary block">
              Experiences
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Engineer and AI specialist. Currently a{' '}
            <span className="text-primary font-semibold">Founding Engineer at Dualite</span>, developing 
            Alpha - an AI Frontend Engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <motion.div
            variants={cardVariantLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-surface/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-1.5 sm:space-y-2 flex-grow">
                <h4 className="text-lg sm:text-xl font-medium text-primary">
                  Bachelor of Technology
                </h4>
                <p className="text-muted-foreground font-medium text-sm sm:text-base">Information Technology</p>
                <p className="text-muted-foreground/80 text-sm sm:text-base">Harcourt Butler Technical University</p>
                <div className="flex items-center justify-between text-xs sm:text-sm pt-2">
                  <p className="text-muted-foreground/80">Dec 2020 - May 2024</p>
                  <div className="bg-primary text-primary-foreground px-2.5 py-1 rounded-full font-semibold">
                    GPA: 8.22
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariantRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-surface/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Core Fundamentals</h3>
              </div>
              <div className="flex-grow">
                <p className="text-muted-foreground/80 text-xs sm:text-sm mb-4 leading-relaxed">
                  Strong foundation in computer science fundamentals and theoretical concepts.
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {['Operating System', 'OOPs', 'DBMS', 'Computer Networks'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      custom={index}
                      variants={skillItemVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-primary/10 border border-primary/20 text-blue-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                   <motion.span
                      custom={4}
                      variants={skillItemVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      className="col-span-2 bg-primary/10 border border-primary/20 text-blue-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-200"
                    >
                      Data Structures & Algorithms
                    </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Skills &{' '}
            <span className="text-primary">
              Expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                custom={index}
                variants={skillCategoryVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl blur-lg transition-all duration-500"></div>
                <div className="relative bg-surface/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border hover:border-border/80 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ rotate: 15, transition: { type: "spring", stiffness: 400 } }}
                      className="p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl mr-2 sm:mr-3"
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <div className="space-y-1 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        custom={skillIndex}
                        variants={skillTextVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="group/skill flex items-center space-x-1.5 sm:space-x-2 rounded-md p-1.5 hover:bg-foreground/[0.05] transition-all duration-200"
                      >
                        <ChevronRight className="flex-shrink-0 w-4 h-4 text-primary transition-transform duration-200 group-hover/skill:scale-125" />
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed group-hover/skill:text-foreground transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
