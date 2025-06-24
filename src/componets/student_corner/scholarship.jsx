'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ScholarshipPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="flex flex-col md:flex-row w-full min-h-[400px] bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* Left Image Section */}
      <motion.div 
        className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[500px]"
        variants={slideInLeft}
      >
        {/* Mobile: Simple image */}
        <motion.div 
          className="block md:hidden absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/studentcorner/student2.png"
            alt="Students writing exam"
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Desktop: Clipped image with overlay */}
        <motion.div 
          className="hidden md:block absolute inset-0 overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/studentcorner/student2.png"
            alt="Students writing exam"
            fill
            className="object-cover"
          />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: '#1F2A4459',
              clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Heading */}
        <motion.h1 
          className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-6xl break-words absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-0 md:mx-20 z-10 max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] md:max-w-none"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          Scholarship Opportunities
        </motion.h1>
      </motion.div>

      {/* Right Text Section */}
      <motion.div 
        className="w-full md:w-1/2 px-4 py-4 sm:px-6 sm:py-6 md:py-6 flex flex-col justify-center bg-white"
        variants={slideInRight}
      >
        <motion.p 
          className="text-gray-800 text-sm sm:text-base md:text-2xl mx-2 sm:mx-4 text-center mb-4 sm:mb-5"
          variants={fadeInUp}
        >
          Our institution supports students in availing various government-funded scholarships through recognized digital platforms. Eligible students can apply for scholarships using the following official portals:
        </motion.p>
        
        <motion.ul 
          className="text-gray-800 list-disc list-inside mx-4 sm:mx-8 md:mx-20 text-sm sm:text-base md:text-2xl space-y-2 sm:space-y-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6
              }
            }
          }}
        >
          <motion.li variants={listItemVariants}>
            <strong>NSP (National Scholarship Portal)</strong><br />
            <span className="text-xs sm:text-sm md:text-xl">Website: </span>
            <motion.a
              href="https://scholarships.gov.in"
              className="text-gray-800 underline text-xs sm:text-sm md:text-xl break-all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                color: '#1F2A44',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              https://scholarships.gov.in
            </motion.a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>MahaDBT (Maharashtra Direct Benefit Transfer Scholarship)</strong><br />
            <span className="text-xs sm:text-sm md:text-xl">Website: </span>
            <motion.a
              href="https://mahadbt.maharashtra.gov.in"
              className="text-gray-800 underline text-xs sm:text-sm md:text-xl break-all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                color: '#1F2A44',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              https://mahadbt.maharashtra.gov.in
            </motion.a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}