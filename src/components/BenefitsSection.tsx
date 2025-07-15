"use client";

import { motion, useInView } from "./motion-shim";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "Reducción SG&A",
      value: "42%",
      description: "Gastos generales en primeros 12 meses",
      color: "gradient-primary"
    },
    {
      title: "Tiempo Ocioso",
      value: "-67%",
      description: "Reducción en esperas y bottlenecks",
      color: "gradient-success"
    },
    {
      title: "Gastos Personal",
      value: "31%",
      description: "Optimización de recursos humanos",
      color: "gradient-accent"
    },
    {
      title: "Ciclos Operativos",
      value: "3.4x",
      description: "Aceleración en procesos críticos",
      color: "gradient-primary"
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
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Métricas clave
        </motion.h2>

        <motion.p 
          className="text-lg text-white/70 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Resultados promedio en empresas mexicanas del sector industrial y servicios
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
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="text-2xl font-bold text-white mb-2">Fortune 500</div>
                <div className="text-white/70 text-sm">Clientes activos</div>
              </motion.div>
              
              <motion.div 
                className="glass border border-white/10 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="text-2xl font-bold text-white mb-2">$460M MXN</div>
                <div className="text-white/70 text-sm">Ahorro acumulado</div>
              </motion.div>
              
              <motion.div 
                className="glass border border-white/10 rounded-lg p-6 text-center"
                whileHover={{ scale: 1.02, y: -1 }}
              >
                <div className="text-2xl font-bold text-white mb-2">ISO 27001</div>
                <div className="text-white/70 text-sm">Certificados</div>
              </motion.div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
