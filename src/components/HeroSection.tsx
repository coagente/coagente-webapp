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
    hidden: { opacity: 0, y: 60 },
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
    hidden: { opacity: 0, scale: 0.9 },
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
      y: [0, -30, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative section-padding overflow-hidden min-h-screen flex items-center">
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 gradient-hero -z-10"></div>
      
      {/* Enhanced floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 3 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1.5 }}
      />

      <div className="container mx-auto container-padding text-center relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced brand name */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-fluid-2xl font-bold text-white/90 glass-strong rounded-full px-8 py-3 inline-block interactive shadow-elevation-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(99, 152, 229, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              coagente
            </motion.h1>
          </motion.div>

          {/* Enhanced main title */}
          <motion.div
            variants={titleVariants}
            className="space-y-6"
          >
            <motion.h1 
              className="text-fluid-6xl font-bold leading-tight gpu-accelerated"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                coagente{" "}
              </motion.span>
              <motion.span 
                className="gradient-text-fast text-shadow-glow block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 40px rgba(99, 152, 229, 0.8)"
                }}
              >
                AI
              </motion.span>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.h2 
              className="text-fluid-3xl font-medium text-gray-200 max-w-4xl mx-auto content-width"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Desarrollamos soluciones de AI personalizadas
            </motion.h2>
          </motion.div>

          {/* Enhanced action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 pt-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300 ripple interactive shadow-elevation-2 hover:shadow-glow" 
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
                className="glass-strong border-gray-400/30 text-gray-300 hover:bg-white/10 hover:border-gray-300/50 px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300 interactive shadow-elevation-1 hover:shadow-glow-purple" 
                asChild
              >
                <Link href="/#contact">
                  contáctanos
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced large bottom text */}
          <motion.div 
            className="pt-20 space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-fluid-5xl font-bold leading-tight text-white text-shadow-soft content-width mx-auto"
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
              className="text-fluid-5xl font-bold leading-tight text-white text-shadow-soft content-width mx-auto"
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

          {/* Enhanced final CTA */}
          <motion.div 
            className="pt-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.92 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="glass-strong border-gray-400/30 text-gray-300 hover:bg-white/10 hover:border-gray-300/50 px-12 py-5 text-xl font-medium rounded-xl transition-all duration-300 interactive shadow-elevation-3 hover:shadow-glow" 
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

          {/* Enhanced scroll indicator */}
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
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-12 border-2 border-white/20 rounded-full flex justify-center glass"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
