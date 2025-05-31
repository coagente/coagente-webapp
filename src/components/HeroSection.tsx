"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -16, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background with subtle gradients */}
      <div className="absolute inset-0 gradient-hero -z-10"></div>
      
      {/* Very subtle background elements - barely visible */}
      <motion.div 
        className="absolute top-24 left-12 w-96 h-96 bg-gradient-to-r from-blue-500/2 to-purple-500/2 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-24 right-12 w-80 h-80 bg-gradient-to-r from-purple-500/2 to-cyan-500/2 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 3 }}
      />

      <div className="container-6xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand badge with enhanced styling */}
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <motion.div 
              className="glass-strong rounded-full px-8 py-3 inline-block border border-white/10"
              whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg font-semibold text-white/90 tracking-wide">
                coagente
              </span>
            </motion.div>
          </motion.div>

          {/* Main title with enhanced typography */}
          <motion.div 
            className="space-y-6"
            variants={titleVariants}
          >
            <motion.h1 
              className="text-fluid-6xl font-bold leading-none tracking-tighter"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="text-white"
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                coagente{" "}
              </motion.span>
              <motion.span 
                className="gradient-text text-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                AI
              </motion.span>
            </motion.h1>

            {/* Subtitle with optimal line length */}
            <motion.h2 
              className="text-fluid-3xl font-medium text-white/80 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Desarrollamos soluciones de AI personalizadas
            </motion.h2>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/#services">
                <button className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Ver Servicios
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/#contact">
                <button className="btn-ghost px-8 py-4 text-lg font-semibold">
                  Contáctanos
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Value proposition with enhanced spacing */}
          <motion.div 
            className="pt-20 space-y-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-fluid-4xl font-bold leading-tight text-white/95"
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 1.2 }
                }
              }}
            >
              Somos coagente. Desarrollamos soluciones de AI
            </motion.h3>
            <motion.h3 
              className="text-fluid-4xl font-bold leading-tight text-white/95"
              variants={{
                hidden: { opacity: 0, x: 24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 1.4 }
                }
              }}
            >
              para compañías que buscan productividad.
            </motion.h3>
          </motion.div>

          {/* Final CTA with enhanced interaction */}
          <motion.div 
            className="pt-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/#contact">
                <button className="glass-strong border border-white/20 hover:border-white/30 text-white/90 hover:text-white px-12 py-5 text-xl font-semibold rounded-xl transition-all duration-200 hover:shadow-glow">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    Comenzar Proyecto
                  </motion.span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Refined scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 2 }
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center cursor-pointer hover:border-white/40 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-white/40 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
