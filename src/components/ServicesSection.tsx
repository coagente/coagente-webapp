"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Agentes de Atención",
      subtitle: "al Cliente",
      description: "Agentes de IA que manejan consultas de clientes 24/7 con respuestas precisas y naturales.",
      demo: "chatbot",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Análisis de",
      subtitle: "Oportunidades",
      description: "Sistemas que identifican oportunidades de negocio mediante análisis inteligente de datos.",
      demo: "analysis",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automatización de",
      subtitle: "Procesos",
      description: "Automatización inteligente de flujos de trabajo para maximizar la eficiencia operativa.",
      demo: "automation",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Análisis de",
      subtitle: "Documentos",
      description: "Procesamiento y análisis automático de documentos legales y contratos empresariales.",
      demo: "documents",
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
      scale: 0.9
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

  const renderDemo = (type: string) => {
    switch (type) {
      case "chatbot":
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
                <div className="text-sm font-medium text-blue-400">Dashboard de Ventas AI</div>
                <div className="text-xs text-gray-400">Agente especializado en conversiones</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Leads calificados hoy</span>
                    <span className="text-green-400 font-semibold">47</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tasa de conversión</span>
                    <span className="text-blue-400 font-semibold">23.5%</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tiempo promedio respuesta</span>
                    <span className="text-purple-400 font-semibold">0.8s</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "analysis":
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
                <div className="text-sm font-medium text-purple-400">Análisis de Oportunidades</div>
                <div className="text-xs text-gray-400">Mercado B2B - Sector Tecnología</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Oportunidades detectadas</span>
                    <span className="text-green-400 font-semibold">12</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Valor potencial estimado</span>
                    <span className="text-blue-400 font-semibold">$2.4M</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Probabilidad de éxito</span>
                    <span className="text-purple-400 font-semibold">78%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "automation":
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
                <div className="text-sm font-medium text-pink-400">Procesamiento de Facturas</div>
                <div className="text-xs text-gray-400">Automatización OCR + Validación</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Facturas procesadas hoy</span>
                    <span className="text-green-400 font-semibold">1,247</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Precisión de extracción</span>
                    <span className="text-blue-400 font-semibold">99.2%</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tiempo ahorrado</span>
                    <span className="text-purple-400 font-semibold">18.5h</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "documents":
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
                <div className="text-sm font-medium text-orange-400">Análisis de Contratos</div>
                <div className="text-xs text-gray-400">Revisión Legal Automatizada</div>
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Contratos analizados</span>
                    <span className="text-green-400 font-semibold">89</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Riesgos identificados</span>
                    <span className="text-red-400 font-semibold">7</span>
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tiempo de revisión</span>
                    <span className="text-blue-400 font-semibold">2.3 min</span>
                  </div>
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
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          ¿Qué hacemos?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl leading-tight">
                    {service.title}<br />{service.subtitle}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div>
                    {renderDemo(service.demo)}
                  </div>
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
