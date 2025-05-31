"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Count animation hook
  const useCountAnimation = (endValue: number, suffix: string = "", delay: number = 0) => {
    const [displayValue, setDisplayValue] = useState("0");
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
      if (suffix === "%" || suffix === "+") {
        return Math.round(latest) + suffix;
      } else if (suffix === "h") {
        return Math.round(latest) + " h";
      } else if (suffix === "k (usd)") {
        return Math.round(latest) + "k (usd)";
      }
      return Math.round(latest) + suffix;
    });

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, endValue, {
          duration: 2,
          delay: delay,
          ease: "easeOut",
        });
        
        const unsubscribe = rounded.onChange(setDisplayValue);
        
        return () => {
          controls.stop();
          unsubscribe();
        };
      }
    }, [isInView, count, endValue, delay, rounded]);

    return displayValue;
  };

  const benefits = [
    {
      title: "Soluciones entregadas",
      value: useCountAnimation(27, "+", 0.5),
      description: "Casos de uso exitosos implementados con resultados excepcionales",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Usuarios satisfechos",
      value: useCountAnimation(100, "%", 0.7),
      description: "Satisfacción garantizada para todos nuestros clientes",
      icon: "⭐",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Horas operativas ahorradas por mes",
      value: useCountAnimation(300, "h", 0.9),
      description: "Nuestras soluciones ahorran a nuestros clientes un promedio de 300 horas de trabajo mensuales",
      icon: "⏰",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Costos ahorrados por mes",
      value: useCountAnimation(45, "k (usd)", 1.1),
      description: "Nuestras soluciones generan ahorros promedio de $45,000 usd mensuales para nuestros clientes",
      icon: "💰",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="statistics" className="py-20 gradient-bg relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -70, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-fluid-4xl font-bold mb-16 text-center gradient-text text-shadow-glow"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <Card className="glass-strong text-white text-center hover-glow hover-float group h-full interactive shadow-elevation-3 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                <CardContent className="pt-8 pb-8 relative z-10">
                  {/* Icon with float animation */}
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {benefit.icon}
                  </motion.div>

                  <h3 className="text-lg text-gray-300 mb-6 font-medium leading-tight">
                    {benefit.title}
                  </h3>
                  
                  {/* Animated counter */}
                  <motion.div 
                    className="text-6xl md:text-7xl font-bold mb-6 gradient-text-fast text-shadow-glow"
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 30px rgba(99, 152, 229, 0.8)"
                    }}
                  >
                    {benefit.value}
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {benefit.description}
                  </motion.p>

                  {/* Pulse effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                    whileHover={{
                      borderColor: "rgba(99, 152, 229, 0.5)",
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated bottom decoration */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div 
            className="flex space-x-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
