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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 gradient-hero -z-10"></div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand name at top */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-fluid-2xl font-bold text-white/90 glass rounded-full px-6 py-2 inline-block interactive"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              coagente
            </motion.h1>
          </motion.div>

          {/* Main title with spectacular animation */}
          <motion.h1 
            className="text-fluid-6xl font-bold leading-tight gpu-accelerated"
            variants={titleVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              coagente{" "}
            </motion.span>
            <motion.span 
              className="gradient-text-fast text-shadow-glow"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 30px rgba(99, 152, 229, 0.8)"
              }}
            >
              AI
            </motion.span>
          </motion.h1>

          {/* Subtitle with typewriter effect */}
          <motion.h2 
            className="text-fluid-3xl font-medium text-gray-200 max-w-4xl mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Desarrollamos soluciones de AI personalizadas
          </motion.h2>

          {/* Action buttons with hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors ripple interactive hover-glow shadow-elevation-2" 
                asChild
              >
                <Link href="/#services">
                  Servicios
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="glass border-gray-400 text-gray-300 hover:bg-gray-800/50 hover:border-gray-300 px-8 py-4 text-lg font-medium rounded-lg transition-colors interactive hover-glow" 
                asChild
              >
                <Link href="/#contact">
                  contáctanos
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Large bottom text with stagger animation */}
          <motion.div 
            className="pt-16 space-y-4"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-fluid-5xl font-bold leading-tight text-white text-shadow-soft"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 2 }
                }
              }}
            >
              Somos coagente. Desarrollamos soluciones de AI
            </motion.h3>
            <motion.h3 
              className="text-fluid-5xl font-bold leading-tight text-white text-shadow-soft"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 2.3 }
                }
              }}
            >
              para compañías que buscan productividad.
            </motion.h3>
          </motion.div>

          {/* Final CTA with magnetic effect */}
          <motion.div 
            className="pt-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glass-strong border-gray-400 text-gray-300 hover:bg-gray-800/50 hover:border-gray-300 px-10 py-4 text-xl font-medium rounded-lg transition-colors interactive hover-glow shadow-elevation-3" 
                asChild
              >
                <Link href="/#contact">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Contáctanos
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 3.5 }
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
