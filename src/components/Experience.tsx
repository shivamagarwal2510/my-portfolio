import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Sparkles } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Founding Engineer',
      company: 'Dualite',
      location: 'Remote',
      period: 'October 2024 - Present',
      type: 'Full-time',
      achievements: [
        'Building Alpha, an AI Frontend Engineer using Remix and TypeScript with sophisticated architecture integrating Anthropic\'s AI models',
        'Engineered AI-driven code generation system with custom prompt engineering techniques for high-quality, modular code structures'
      ],
      metrics: { funding: '₹1.25Cr', users: '15k+', precision: '90%' }
    },
    {
      title: 'SDE Intern',
      company: 'Dualite',
      location: 'Remote',
      period: 'November 2023 - September 2024',
      type: 'Internship',
      achievements: [
        'Developed dashboard using Next.js and MongoDB with Figma OAuth, increasing user base from 4,000 to 15,000',
        'Built Component mode improving graphical precision by 90%, securing ₹1.25 crore in investor funding',
        'Redesigned modern UI for plugin, driving 30% boost in user engagement'
      ],
      metrics: { growth: '275%', engagement: '+30%', funding: '₹1.25Cr' }
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Gagahealth',
      location: 'Remote',
      period: 'March 2023 - April 2023',
      type: 'Internship',
      achievements: [
        'Built babynama.com from scratch using Next.js 13, TypeScript, and Tailwind CSS, attracting 10,000+ visitors in first month',
        'Integrated Payment APIs leading to 20% increase in conversion rates',
        'Created 5+ reusable ReactJS components, reducing development time by 40%'
      ],
      metrics: { visitors: '10k+', conversion: '+20%', efficiency: '+40%' }
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 } }
  };

  const experienceItemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 }
    })
  };

  const metricItemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: i * 0.05 + 0.2 }
    })
  };

  const achievementTextVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.4, delay: i * 0.07 + 0.3 }
    })
  };


  return (
    <section id="experience" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
            <span className="text-foreground font-medium text-sm sm:text-base">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Work
            <span className="text-primary block">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            My journey through innovative companies, building cutting-edge solutions 
            and driving technological advancement.
          </p>
        </motion.div>

        <div className="max-w-2xl md:max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={experienceItemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-8 sm:pl-10 mb-10 sm:mb-12 last:mb-0"
            >
              <motion.div
                className="absolute left-0 top-1 sm:top-2.5 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full shadow-lg shadow-primary/40"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 + index * 0.15 }}
                viewport={{ once: true }}
              />
              {index < experiences.length - 1 && (
                <div className="absolute left-[5px] sm:left-[7px] top-5 sm:top-7 w-px h-[calc(100%_-_0.5rem)] bg-border/60" />
              )}

              <div className="relative bg-surface/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-border/60 hover:border-border/80 transition-colors duration-300">
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-md mr-2 sm:mr-3 border border-primary/20">
                      <Building size={16} sm:size={18} className="text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                  </div>

                  <div className="pl-0 sm:pl-1 space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Building size={12} sm:size={14} className="mr-1.5 sm:mr-2 opacity-60" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <MapPin size={12} sm:size={14} className="mr-1.5 sm:mr-2 opacity-60" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-primary font-medium text-xs sm:text-sm">
                      <Calendar size={12} sm:size={14} className="mr-1.5 sm:mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="pl-0 sm:pl-1">
                    <span className="bg-primary text-primary-foreground px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {Object.entries(exp.metrics).map(([key, value], metricIndex) => (
                    <motion.div
                      key={key}
                      custom={metricIndex}
                      variants={metricItemVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-center p-1.5 px-2 sm:p-2 sm:px-2.5 bg-background/70 rounded-md sm:rounded-lg border border-border/50 min-w-[60px] sm:min-w-[70px] flex-grow sm:flex-grow-0"
                    >
                      <div className="text-xs sm:text-sm font-bold text-foreground">{value}</div>
                      <div className="text-[9px] sm:text-xs text-muted-foreground capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      custom={achIndex}
                      variants={achievementTextVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-[6px] sm:mt-[7px] mr-2 sm:mr-2.5 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
