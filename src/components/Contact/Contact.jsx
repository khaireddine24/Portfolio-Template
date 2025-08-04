import { getImageUrl } from "../../utils";
import { useRef } from "react";
import { useInView,motion } from "framer-motion";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  const contactItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      ref={ref}
      id="contact" 
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black py-20 px-[10%] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
            "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Contact Text Section */}
          <motion.div 
            className="text-center lg:text-left flex-1"
            variants={titleVariants}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #60a5fa, #a855f7, #ec4899, #60a5fa)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Contact
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0"
              variants={titleVariants}
              transition={{ delay: 0.2 }}
            >
              Feel free to reach out! Let's create something amazing together.
            </motion.p>
            
            {/* Additional CTA */}
            <motion.div 
              className="mt-8 inline-flex items-center gap-2 text-blue-400 text-lg"
              variants={titleVariants}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Available for new opportunities</span>
            </motion.div>
          </motion.div>
          
          {/* Contact Links Section */}
          <motion.div 
            className="flex-1 max-w-md w-full"
            variants={containerVariants}
          >
            <ul className="space-y-4 sm:space-y-6">
              
              {/* Email Link */}
              <motion.li 
                className="group"
                variants={contactItemVariants}
              >
                <motion.a 
                  href="mailto:myemail@email.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(239, 68, 68, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <img 
                      src={getImageUrl("contact/emailIcon.png")} 
                      alt="Email icon"
                      className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-base sm:text-lg font-medium group-hover:text-red-300 transition-colors duration-300 truncate">
                      myemail@email.com
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">Send me an email</div>
                  </div>
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </motion.a>
              </motion.li>

              {/* LinkedIn Link */}
              <motion.li 
                className="group"
                variants={contactItemVariants}
              >
                <motion.a 
                  href="https://www.linkedin.com/myname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    whileHover={{ rotate: -5 }}
                  >
                    <img 
                      src={getImageUrl("contact/linkedinIcon.png")} 
                      alt="LinkedIn icon"
                      className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-base sm:text-lg font-medium group-hover:text-blue-300 transition-colors duration-300 truncate">
                      linkedin.com/myname
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">Let's connect professionally</div>
                  </div>
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </motion.a>
              </motion.li>

              {/* GitHub Link */}
              <motion.li 
                className="group"
                variants={contactItemVariants}
              >
                <motion.a 
                  href="https://www.github.com/myname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <img 
                      src={getImageUrl("contact/githubIcon.png")} 
                      alt="Github icon"
                      className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-base sm:text-lg font-medium group-hover:text-purple-300 transition-colors duration-300 truncate">
                      github.com/myname
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">Check out my repositories</div>
                  </div>
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </motion.a>
              </motion.li>
              
            </ul>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 text-center"
          variants={footerVariants}
        >
          <motion.p 
            className="text-gray-400 text-sm"
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 Portfolio. Created By Khaireddine
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};