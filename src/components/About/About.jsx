import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 px-[10%] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" 
      id="about"
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
            "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
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
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
              backgroundImage: 'linear-gradient(90deg, #60a5fa, #a855f7, #60a5fa)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            About
          </motion.span>
        </motion.h2>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
         
          
          {/* About Items */}
          <div className="flex-1 space-y-8">
            {/* Frontend Developer */}
            <motion.div 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
              }}
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={getImageUrl("about/cursorIcon.png")} 
                    alt="Cursor icon"
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
                    layoutId="frontend-title"
                  >
                    Frontend Developer
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-lg leading-relaxed"
                    layoutId="frontend-desc"
                  >
                    I'm a frontend developer with experience in building responsive
                    and optimized sites
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Backend Developer */}
            <motion.div 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)"
              }}
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: -10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={getImageUrl("about/serverIcon.png")} 
                    alt="Server icon"
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
                    layoutId="backend-title"
                  >
                    Backend Developer
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-lg leading-relaxed"
                    layoutId="backend-desc"
                  >
                    I have experience developing fast and optimised back-end systems
                    and APIs
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* UI Designer */}
            <motion.div 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
              }}
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={getImageUrl("about/cursorIcon.png")} 
                    alt="UI icon"
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300"
                    layoutId="ui-title"
                  >
                    UI Designer
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-lg leading-relaxed"
                    layoutId="ui-desc"
                  >
                    I have designed multiple landing pages and have created design
                    systems as well
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-6 h-6 bg-purple-500 rounded-full opacity-20"
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-20 w-2 h-2 bg-green-500 rounded-full opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </section>
  );
};