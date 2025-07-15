"use client";

import { motion, useInView } from "./motion-shim";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      title: "Diagnóstico",
      subtitle: "operacional",
      description: "Análisis cuantitativo de procesos core. Identificación de bottlenecks y oportunidades de optimización.",
      demo: "evaluation",
      color: "gradient-primary"
    },
    {
      number: "2",
      title: "Arquitectura",
      subtitle: "de solución",
      description: "Diseño de modelos y pipelines específicos. Integración con stack tecnológico existente.",
      demo: "development",
      color: "gradient-accent"
    },
    {
      number: "3",
      title: "Deployment",
      subtitle: "y escalamiento",
      description: "Rollout progresivo con KPIs definidos. Monitoreo continuo y optimización iterativa.",
      demo: "monitoring",
      color: "gradient-primary"
    }
  ];

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
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case "evaluation":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <div className="text-center mb-3">
              <h4 className="text-xs font-semibold text-white mb-2">Análisis de Eficiencia</h4>
            </div>
            
            <div className="space-y-3">
              {[
                { process: "Atención al cliente", efficiency: 65, status: "Mejorable" },
                { process: "Procesamiento de datos", efficiency: 40, status: "Crítico" },
                { process: "Generación de reportes", efficiency: 30, status: "Crítico" },
                { process: "Gestión de inventario", efficiency: 85, status: "Óptimo" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: i * 0.1 + 0.7 }
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-300 font-medium">{item.process}</span>
                    <span className={`text-xs ${
                      item.efficiency > 70 ? 'text-success' : 
                      item.efficiency > 50 ? 'text-warning' : 
                      'text-error'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="flex-1 bg-neutral-700 rounded-full h-1"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    >
                      <motion.div 
                        className={`h-1 rounded-full ${
                          item.efficiency > 70 ? 'bg-gradient-success' : 
                          item.efficiency > 50 ? 'bg-gradient-warning' : 
                          'bg-gradient-error'
                        }`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.efficiency}%` }}
                        transition={{ delay: 1.1 + i * 0.1, duration: 1 }}
                      />
                    </motion.div>
                    <span className="text-xs text-gray-400 w-8">{item.efficiency}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "development":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <div className="text-center mb-3">
              <h4 className="text-xs font-semibold text-white mb-2">Progreso de Desarrollo</h4>
            </div>
            
            <div className="space-y-3">
              {[
                { phase: "Arquitectura del sistema", progress: 100, status: "Completado" },
                { phase: "Módulo de procesamiento", progress: 75, status: "En progreso" },
                { phase: "Interface de usuario", progress: 45, status: "En progreso" },
                { phase: "Testing e integración", progress: 0, status: "Pendiente" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.1 + 0.5 }
                    }
                  }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-300 font-medium">{item.phase}</span>
                    <span className={`text-xs ${
                      item.status === 'Completado' ? 'text-success' :
                      item.status === 'En progreso' ? 'text-brand-blue' :
                      'text-white/50'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="flex-1 bg-neutral-700 rounded-full h-1"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                    >
                      <motion.div 
                        className="bg-gradient-primary h-1 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ delay: 1.3 + i * 0.1, duration: 1 }}
                      />
                    </motion.div>
                    <span className="text-xs text-gray-400 w-8">{item.progress}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "monitoring":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
          >
            <div className="text-center mb-3">
              <h4 className="text-xs font-semibold text-white mb-2">Monitoreo en Tiempo Real</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300">Estado del Sistema</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs text-success">Activo</span>
                </div>
              </div>

              {[
                { metric: "Rendimiento CPU", value: 23, unit: "%" },
                { metric: "Memoria utilizada", value: 45, unit: "%" },
                { metric: "Precisión del modelo", value: 98.5, unit: "%" },
                { metric: "Latencia promedio", value: 120, unit: "ms" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.1 + 0.6 }
                    }
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-300">{item.metric}</span>
                    <span className="text-xs text-brand-blue font-medium">
                      {item.value}{item.unit}
                    </span>
                  </div>
                  <motion.div 
                    className="w-full bg-neutral-700 rounded-full h-1 mt-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
                  >
                    <motion.div 
                      className="bg-gradient-primary h-1 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: item.metric.includes('Precisión') ? `${item.value}%` : 
                              item.metric.includes('CPU') || item.metric.includes('Memoria') ? `${item.value}%` :
                              `${Math.min(item.value / 2, 100)}%`
                      }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 1 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Optimized background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Metodología
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass border-slate-700 text-white hover:bg-white/10 transition-all duration-300 h-full relative group">
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-lg group-hover:scale-110 transition-transform"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {step.number}
                </motion.div>
                
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <motion.div 
                      className="bg-gradient-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <CardTitle className="text-white text-xl leading-tight">
                        {step.title}
                        <br />
                        <span className="text-brand-blue">{step.subtitle}</span>
                      </CardTitle>
                    </div>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <motion.p 
                    className="text-gray-300 leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.2 }}
                  >
                    {step.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.2 }}
                  >
                    {renderDemo(step.demo)}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
