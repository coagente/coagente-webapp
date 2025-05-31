"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateY: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const steps = [
    {
      number: "01",
      title: "Analizamos el",
      subtitle: "problema",
      description: "Comenzamos con un análisis detallado de tus flujos de trabajo para descubrir oportunidades de mejora mediante IA.",
      color: "from-blue-500 to-cyan-500",
      demo: "analysis"
    },
    {
      number: "02",
      title: "Desarrollamos &",
      subtitle: "Implementamos",
      description: "Desarrollamos soluciones y agentes de IA a medida para tu negocio, con un enfoque constante en calidad y seguridad",
      color: "from-purple-500 to-violet-500",
      demo: "development"
    },
    {
      number: "03",
      title: "Mantenemos &",
      subtitle: "mejoramos",
      description: "Creamos soluciones de IA sólidas y resilientes, garantizando un rendimiento óptimo y confiable bajo cualquier circunstancia",
      color: "from-orange-500 to-red-500",
      demo: "maintenance"
    }
  ];

  const renderDemo = (type: string, index: number) => {
    switch(type) {
      case "analysis":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-sm font-medium text-blue-400">Evaluación de Procesos</div>
              <div className="text-xs text-gray-400">Análisis de flujos de trabajo actuales</div>
            </motion.div>

            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { process: "Atención al Cliente", time: "45 min/ticket", efficiency: "23%", color: "text-red-400" },
                { process: "Procesamiento Docs", time: "2.5 hrs/doc", efficiency: "67%", color: "text-yellow-400" },
                { process: "Análisis de Datos", time: "Manual", efficiency: "12%", color: "text-red-400" },
                { process: "Gestión de Inventario", time: "Daily", efficiency: "78%", color: "text-green-400" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2 text-xs"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.1 + 0.9 }
                    }
                  }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{item.process}</span>
                    <span className={`${item.color} font-semibold`}>{item.efficiency}</span>
                  </div>
                  <div className="text-gray-500 text-xs">{item.time}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center text-xs text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Oportunidades de mejora identificadas: <span className="text-blue-400 font-semibold">8 procesos</span>
            </motion.div>
          </motion.div>
        );

      case "development":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-sm font-medium text-purple-400">Desarrollo en Progreso</div>
              <div className="text-xs text-gray-400">Sprint 3 de 4 - Semana 8</div>
            </motion.div>

            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { feature: "Agente de Atención", progress: 95, status: "Testing" },
                { feature: "OCR Inteligente", progress: 78, status: "Development" },
                { feature: "Dashboard Analytics", progress: 60, status: "Development" },
                { feature: "API Integration", progress: 30, status: "Planning" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2"
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
                      className="flex-1 bg-gray-700 rounded-full h-1"
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

            <motion.div 
              className="text-center text-xs text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Progreso general: <span className="text-purple-400 font-semibold">68%</span> • Entrega estimada: <span className="text-green-400">2 semanas</span>
            </motion.div>
          </motion.div>
        );

      case "maintenance":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-sm font-medium text-orange-400">Sistema en Producción</div>
              <div className="text-xs text-gray-400">Monitoreo 24/7 • Uptime 99.9%</div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { metric: "Requests/min", value: "2,847", trend: "up", color: "text-green-400" },
                { metric: "Response Time", value: "127ms", trend: "stable", color: "text-blue-400" },
                { metric: "Error Rate", value: "0.02%", trend: "down", color: "text-green-400" },
                { metric: "CPU Usage", value: "34%", trend: "stable", color: "text-blue-400" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-2 text-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.1 + 0.9 }
                    }
                  }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="text-xs text-gray-400">{item.metric}</div>
                  <motion.div 
                    className={`font-semibold ${item.color} text-sm`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-xs text-gray-500">
                    {item.trend === 'up' ? '↗️' : item.trend === 'down' ? '↘️' : '→'} {item.trend}
                  </div>
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
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 bg-black/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-fluid-4xl font-bold mb-16 text-center gradient-text text-shadow-glow"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              <Card className="glass-strong text-white hover-glow hover-float group h-full interactive shadow-elevation-3 relative overflow-hidden">
                {/* Animated number badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-elevation-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(99, 152, 229, 0.6)"
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Animated background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  initial={{ scale: 0, rotate: 90 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-elevation-2`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: "0 0 20px rgba(99, 152, 229, 0.5)"
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
                    <CardTitle className="text-white text-2xl leading-tight group-hover:gradient-text transition-all duration-300">
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

                  {/* Connection line to next step */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 z-20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 2 + index * 0.3, duration: 0.8 }}
                    />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated process flow visualization */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div 
            className="flex items-center space-x-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            />
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
