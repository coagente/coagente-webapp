"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      title: "Evaluación",
      subtitle: "de procesos",
      description: "Analizamos tus procesos actuales para identificar oportunidades de mejora y automatización.",
      demo: "evaluation",
      color: "from-blue-500 to-purple-500"
    },
    {
      number: "2",
      title: "Desarrollo",
      subtitle: "personalizado",
      description: "Creamos soluciones de AI específicas para tus necesidades y objetivos de negocio.",
      demo: "development",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Implementación",
      subtitle: "y monitoreo",
      description: "Desplegamos la solución y monitoreamos su rendimiento para garantizar resultados óptimos.",
      demo: "monitoring",
      color: "from-pink-500 to-red-500"
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

  const renderDemo = (type: string, index: number) => {
    switch (type) {
      case "evaluation":
        return (
          <motion.div 
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-blue-400">Análisis de Procesos</div>
                <div className="text-xs text-gray-400">Evaluación en tiempo real</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { process: "Atención al cliente", efficiency: 65, status: "Mejorable" },
                  { process: "Procesamiento de datos", efficiency: 40, status: "Crítico" },
                  { process: "Generación de reportes", efficiency: 30, status: "Crítico" },
                  { process: "Gestión de inventario", efficiency: 85, status: "Óptimo" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-700/50 rounded p-2"
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
                      <span className={`text-xs ${item.efficiency > 70 ? 'text-green-400' : item.efficiency > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="flex-1 bg-gray-600 rounded-full h-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      >
                        <motion.div 
                          className={`h-1 rounded-full ${item.efficiency > 70 ? 'bg-gradient-to-r from-green-500 to-blue-500' : item.efficiency > 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-red-500 to-pink-500'}`}
                          initial={{ width: "0%" }}
                          animate={{ width: `${item.efficiency}%` }}
                          transition={{ delay: 1.1 + i * 0.1, duration: 1 }}
                        />
                      </motion.div>
                      <span className="text-xs text-gray-400 w-8">{item.efficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        );

      case "development":
        return (
          <motion.div 
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-purple-400">Desarrollo en Progreso</div>
                <div className="text-xs text-gray-400">Sprint 3 de 5</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { feature: "Agente de Atención", progress: 95, status: "Testing" },
                  { feature: "OCR Inteligente", progress: 78, status: "Development" },
                  { feature: "Dashboard Analytics", progress: 60, status: "Development" },
                  { feature: "API Integration", progress: 30, status: "Planning" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-700/50 rounded p-2"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: i * 0.1 + 0.9 }
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-300 font-medium">{item.feature}</span>
                      <span className="text-xs text-purple-400">{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="flex-1 bg-gray-600 rounded-full h-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                      >
                        <motion.div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ delay: 1.3 + i * 0.1, duration: 1 }}
                        />
                      </motion.div>
                      <span className="text-xs text-gray-400 w-8">{item.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        );

      case "monitoring":
        return (
          <motion.div 
            className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-green-400">Sistema en Producción</div>
                <div className="text-xs text-gray-400">Monitoreo 24/7</div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { metric: "Uptime", value: "99.9%", status: "Excelente" },
                  { metric: "Respuesta", value: "0.2s", status: "Óptimo" },
                  { metric: "Precisión", value: "94.5%", status: "Excelente" },
                  { metric: "Usuarios", value: "1,247", status: "Activos" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-700/50 rounded p-2 text-center"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: i * 0.1 + 0.7 }
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs text-gray-400 mb-1">{item.metric}</div>
                    <div className="text-lg font-bold text-green-400">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.status}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mt-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Última actualización:</span>
                  <span className="text-green-400">Hace 2 días</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Próxima mejora:</span>
                  <span className="text-orange-400">En 1 semana</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          ¿Cómo lo hacemos?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800/70 transition-all duration-300 h-full relative">
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-lg"
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
                      className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.2 }}
                  >
                    <CardTitle className="text-white text-2xl leading-tight">
                      {step.title}<br />{step.subtitle}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + index * 0.2 }}
                  >
                    {step.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.2 }}
                  >
                    {renderDemo(step.demo, index)}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
