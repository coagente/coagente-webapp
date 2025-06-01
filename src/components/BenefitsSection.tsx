"use client";

import { motion, useInView } from "framer-motion";
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
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "💰",
      title: "Ahorro en costos",
      value: "60%",
      description: "Optimización de recursos operativos",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📈",
      title: "Incremento en productividad",
      value: "150%",
      description: "Mejora en eficiencia de equipos",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: "🎯",
      title: "Precisión en resultados",
      value: "95%",
      description: "Análisis y decisiones basadas en datos",
      color: "from-red-500 to-orange-500"
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
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Beneficios
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-slate-800/50 border-slate-700 text-white text-center hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardContent className="pt-8 pb-8">
                  <div className="text-4xl mb-4">
                    {benefit.icon}
                  </div>

                  <h3 className="text-lg text-gray-300 mb-6 font-medium leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {benefit.value}
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
