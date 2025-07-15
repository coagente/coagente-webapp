"use client";

import { motion, useInView } from "./motion-shim";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: "⚡",
      title: "Reducción de tiempo",
      value: "80%",
      description: "Automatización de procesos repetitivos",
      color: "gradient-primary",
      metric: "tiempo"
    },
    {
      icon: "💰",
      title: "Ahorro en costos",
      value: "60%",
      description: "Optimización de recursos operativos",
      color: "gradient-success",
      metric: "costos"
    },
    {
      icon: "📈",
      title: "Incremento en productividad",
      value: "150%",
      description: "Mejora en eficiencia de equipos",
      color: "gradient-accent",
      metric: "productividad"
    },
    {
      icon: "🎯",
      title: "Precisión en resultados",
      value: "95%",
      description: "Análisis y decisiones basadas en datos",
      color: "gradient-primary",
      metric: "precisión"
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="statistics" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Optimized background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Beneficios
        </motion.h2>

        <motion.p 
          className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Resultados reales y medibles que transforman tu operación desde el primer día
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass border-slate-700 text-white text-center hover:bg-white/10 transition-all duration-300 h-full group">
                <CardContent className="pt-8 pb-8">
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className="text-4xl mb-6"
                    initial={{ scale: 0.5, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.5, rotate: -180 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {benefit.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg text-gray-300 mb-6 font-medium leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  
                  {/* Value with gradient text */}
                  <motion.div 
                    className="text-6xl md:text-7xl font-bold mb-6 gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ 
                      delay: 0.9 + index * 0.1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    {benefit.value}
                  </motion.div>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  >
                    {benefit.description}
                  </motion.p>

                  {/* Enhanced visual indicator */}
                  <motion.div 
                    className="mt-6 pt-4 border-t border-white/10"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-white/50 font-medium capitalize">{benefit.metric}</span>
                      <div className="w-2 h-2 bg-gradient-primary rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="glass border border-white/10 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70 text-sm">Empresas transformadas</div>
              </motion.div>
              
              <motion.div 
                className="glass border border-white/10 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70 text-sm">Satisfacción garantizada</div>
              </motion.div>
              
              <motion.div 
                className="glass border border-white/10 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-2xl font-bold text-white mb-2">6 meses</div>
                <div className="text-white/70 text-sm">ROI garantizado</div>
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              ¿Listo para <span className="gradient-text">transformar tu empresa</span>?
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Resultados medibles en 30 días. ROI positivo garantizado.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-glow transition-all duration-300"
              >
                <span>Análisis Gratuito</span>
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
