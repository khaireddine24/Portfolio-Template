import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Top blur effect */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Bottom blur effect */}
        <motion.div 
          className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Floating particles */}
        <motion.div 
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-40"
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
        <motion.div 
          className="absolute bottom-32 left-40 w-1 h-1 bg-pink-400 rounded-full opacity-80"
          animate={{
            y: [-15, 15, -15],
            x: [10, -10, 10],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full opacity-50"
          animate={{
            y: [5, -5, 5],
            rotate: [0, 360],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-20 pt-20 lg:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={textVariants}
          >
            <motion.span 
              className="text-white block lg:inline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block lg:inline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #60a5fa, #a855f7, #ec4899, #60a5fa)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              <ReactTyped
                strings={['Fouleni Flen']}
                typeSpeed={70}
                backSpeed={60}
                loop
              />
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            I'm a{" "}
            <motion.span 
              className="text-blue-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
            >
              full-stack developer
            </motion.span>{" "}
            with{" "}
            <motion.span 
              className="text-purple-400 font-semibold"
              whileHover={{ scale: 1.05, color: "#a855f7" }}
              transition={{ duration: 0.2 }}
            >
              5 years of experience
            </motion.span>{" "}
            using React and NodeJS. Reach out if you'd like to learn more!
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={buttonVariants}
            transition={{ delay: 0.5 }}
          >
            {/* Contact Me Button */}
            <motion.a 
              href="mailto:myemail@email.com" 
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ opacity: 0.2 }}
              />
              
              {/* Arrow icon */}
              <motion.svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>

            {/* Download CV Button */}
            <motion.a 
              href="/path-to-your-cv.pdf" 
              download="Fouleni_Flen_CV.pdf"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download CV</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ opacity: 0.2 }}
              />
              
              {/* Download icon */}
              <motion.svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ y: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
            </motion.a>
          </motion.div>
          
          {/* Tech Stack Indicators */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-6 lg:pt-8"
            variants={techStackVariants}
          >
            {['React', 'Node.js', 'Full-Stack'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
                variants={techItemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Hero Image */}
        <motion.div 
          className="flex-shrink-0 relative group order-1 lg:order-2"
          variants={imageVariants}
        >
          {/* Glow effect behind image */}
          <motion.div 
            className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Image container */}
          <div className="relative">
            <motion.img
              src={getImageUrl("hero/user-image.jpg")}
              alt="Hero image of me"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] object-cover rounded-full border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-500 hover:border-blue-400/50"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(96, 165, 250, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating ring animations */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border border-purple-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              height: ['12px', '16px', '12px']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};