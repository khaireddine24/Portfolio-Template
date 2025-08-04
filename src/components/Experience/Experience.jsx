import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const historyCardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const experienceItemVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 px-[10%] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" 
      id="experience"
    >
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at center, rgba(67, 56, 202, 0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.2) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center  mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          variants={titleVariants}
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #22d3ee, #3b82f6, #22d3ee)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Experience
          </motion.span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Skills Section */}
          <motion.div 
            className="space-y-8"
            variants={sectionVariants}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
              variants={titleVariants}
            >
              <motion.div 
                className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Technical Skills
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {skills.map((skill, id) => (
                <motion.div
                  key={id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                  variants={skillCardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110"
                      whileHover={{ rotate: 5, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img 
                        src={getImageUrl(skill.imageSrc)} 
                        alt={skill.title}
                        className="w-10 h-10 object-contain filter drop-shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                    <motion.p 
                      className="text-white font-medium text-center group-hover:text-cyan-300 transition-colors duration-300"
                      layoutId={`skill-title-${id}`}
                    >
                      {skill.title}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Work History Section */}
          <motion.div 
            className="space-y-8"
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
              variants={titleVariants}
            >
              <motion.div 
                className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              Work History
            </motion.h3>
            
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {history.map((historyItem, id) => (
                <motion.div
                  key={id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                  variants={historyCardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110"
                      whileHover={{ rotate: -5, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                        className="w-10 h-10 object-contain filter drop-shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                    
                    {/* Job Details */}
                    <div className="flex-1 space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: id * 0.1 + 0.5 }}
                      >
                        <motion.h4 
                          className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300"
                          layoutId={`role-${id}`}
                        >
                          {historyItem.role}
                        </motion.h4>
                        <motion.p 
                          className="text-purple-300 font-medium"
                          layoutId={`org-${id}`}
                        >
                          {historyItem.organisation}
                        </motion.p>
                        <motion.p 
                          className="text-gray-400 text-sm"
                          layoutId={`date-${id}`}
                        >
                          {historyItem.startDate} - {historyItem.endDate}
                        </motion.p>
                      </motion.div>
                      
                      {/* Experience List */}
                      <motion.ul 
                        className="space-y-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: id * 0.1 + 0.7 }}
                      >
                        {historyItem.experiences.map((experience, expId) => (
                          <motion.li
                            key={expId}
                            className="text-gray-300 flex items-start gap-3 group-hover:text-gray-200 transition-colors duration-300"
                            variants={experienceItemVariants}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-purple-300 transition-colors duration-300"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: expId * 0.2 }}
                            />
                            <span className="leading-relaxed">{experience}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-3 h-3 bg-cyan-500 rounded-full opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
          y: [-5, 5, -5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-4 h-4 bg-purple-500 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [-3, 3, -3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-25"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.8, 0.25],
          y: [10, -10, 10]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </section>
  );
};