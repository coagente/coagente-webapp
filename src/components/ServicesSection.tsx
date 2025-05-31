"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      y: 100,
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

  const services = [
    {
      title: "Desarrollo de agentes de IA",
      description: "Creamos agentes inteligentes que toman decisiones autónomas y aprenden constantemente, transformando la manera en que tu empresa interactúa y opera.",
      demo: "chat"
    },
    {
      title: "Consultoría de AI para productividad",
      description: "Te asesoramos estratégicamente para implementar soluciones de IA impulsando el crecimiento y la transformación de tu negocio.",
      demo: "generator"
    },
    {
      title: "Casos de uso personalizados de IA",
      description: "Creamos soluciones de IA que automatizan y optimizan los procesos de tu empresa, impulsando resultados medibles alineados con tus objetivos de negocio.",
      demo: "charts"
    },
    {
      title: "Automatización de procesos de negocio",
      description: "Automatizamos tareas repetitivas con IA para impulsar la eficiencia, ahorrar tiempo y eliminar errores en tus procesos empresariales.",
      demo: "automation"
    },
    {
      title: "Desarrollo de LLMs",
      description: "Creamos e integramos LLMs personalizados que revolucionan cómo tu empresa procesa información e interactúa con clientes.",
      demo: "llm"
    }
  ];

  const renderDemo = (type: string) => {
    switch(type) {
      case "chat":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                <div className="text-sm text-gray-400">Message AI Assistant…</div>
                <div className="text-sm text-gray-400 ml-auto">Google Meet with John</div>
              </motion.div>

              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                  T
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">You</div>
                  <motion.div 
                    className="glass px-3 py-2 rounded-lg text-sm interactive"
                    whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.3)" }}
                  >
                    Schedule a Google meeting with John for 3:45PM tomorrow!
                  </motion.div>
                  <div className="text-xs text-gray-500 mt-1">8:15 AM</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                  AI
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">AI Assistant</div>
                  <motion.div 
                    className="bg-purple-900/50 px-3 py-2 rounded-lg text-sm interactive"
                    whileHover={{ backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                  >
                    I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.
                  </motion.div>
                  <div className="text-xs text-gray-500 mt-1">8:15 AM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "generator":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.input
                type="text"
                value="Generate an image of a smiling quokka on the beach."
                readOnly
                className="w-full glass px-4 py-2 rounded-lg text-sm text-gray-300 interactive"
                whileFocus={{ scale: 1.02 }}
              />

              <div className="flex gap-2">
                <motion.input
                  type="text"
                  value="Generate an image of…"
                  readOnly
                  className="glass px-4 py-2 rounded-lg text-sm flex-grow text-gray-400 interactive"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ripple interactive hover-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Generate
                </motion.button>
              </div>

              <motion.div 
                className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-center py-3 rounded-lg text-sm text-purple-200 pulse-slow"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Generating image…
              </motion.div>
            </div>
          </motion.div>
        );

      case "charts":
        return (
          <motion.div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="glass-strong rounded-lg p-4 text-center hover-glow"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-red-400 font-semibold mb-2">Cost -67%</div>
              <motion.svg 
                width="60" 
                height="30" 
                viewBox="0 0 120 60" 
                className="mx-auto opacity-60"
                whileHover={{ opacity: 1 }}
              >
                <motion.path 
                  d="M0,50 Q30,20 60,30 Q90,10 120,40" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </motion.svg>
            </motion.div>

            <motion.div 
              className="glass-strong rounded-lg p-4 text-center hover-glow"
              whileHover={{ scale: 1.05, rotateY: -5 }}
            >
              <div className="text-green-400 font-semibold mb-2">Efficiency +103%</div>
              <motion.svg 
                width="60" 
                height="30" 
                viewBox="0 0 120 60" 
                className="mx-auto opacity-60"
                whileHover={{ opacity: 1 }}
              >
                <motion.path 
                  d="M0,50 Q30,40 60,20 Q90,10 120,5" 
                  stroke="#22c55e" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.7 }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        );

      case "automation":
        return (
          <div>
            <motion.div 
              className="grid grid-cols-4 gap-3 mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  className="flex justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: i * 0.1 }
                    }
                  }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded hover-scale"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 20px rgba(99, 152, 229, 0.5)"
                    }}
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="text-3xl font-bold gradient-text mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                87+
              </motion.div>
              <div className="text-sm text-gray-300">Automations</div>
            </motion.div>
          </div>
        );

      case "llm":
        return (
          <motion.div 
            className="glass-strong rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="glass px-4 py-3 rounded-lg interactive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-medium text-sm mb-1">Where do Quokka's live?</div>
                <div className="text-gray-300 text-sm">Quokka's live on Rottnest Island.</div>
              </motion.div>

              <div className="flex gap-2">
                <motion.input
                  type="text"
                  value="Write your prompt…"
                  readOnly
                  className="glass px-4 py-2 rounded-lg text-sm flex-grow text-gray-400 interactive"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  className="glass hover:bg-gray-600 p-2 rounded-lg transition-colors interactive"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12L3 3L6 12L3 21L22 12Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>

              <motion.div 
                className="glass px-4 py-3 rounded-lg interactive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="font-medium text-sm">And are Quokka's big?</div>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-20 gradient-bg relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-fluid-4xl font-bold mb-16 text-center gradient-text text-shadow-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          ¿Que hacemos?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass-strong text-white hover-glow hover-float group h-full interactive shadow-elevation-2">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {renderDemo(service.demo)}
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

export default ServicesSection;
