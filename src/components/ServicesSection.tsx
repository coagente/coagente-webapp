"use client";

import { motion, useInView } from "./motion-shim";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Gestión de",
      subtitle: "Procesos Complejos",
      description: "Automatización end-to-end de workflows multi-departamentales y optimización de bottlenecks operacionales.",
      demo: "automation",
      color: "gradient-primary"
    },
    {
      title: "Gestión de",
      subtitle: "Canales", 
      description: "Unificación omnicanal con analytics en tiempo real y personalización dinámica de experiencias.",
      demo: "chatbot",
      color: "gradient-accent"
    },
    {
      title: "Gestión de",
      subtitle: "Conocimiento",
      description: "Knowledge graphs inteligentes para captura, estructuración y distribución automatizada de expertise organizacional.",
      demo: "documents",
      color: "gradient-primary"
    },
    {
      title: "Despliegue de",
      subtitle: "Agentes Especializados",
      description: "AI agents dedicados por vertical: logística, regulatorio, personalización, marketing y migración de código.",
      demo: "analysis",
      color: "gradient-accent"
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

  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case "chatbot":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4 space-y-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center">
                <span className="text-brand-blue text-xs font-medium">AI</span>
              </div>
              <div className="flex-1">
                <div className="glass rounded-lg p-3">
                  <p className="text-xs text-white/80">¡Hola! ¿En qué puedo ayudarte hoy?</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 justify-end">
              <div className="flex-1 max-w-[70%]">
                <div className="bg-brand-blue/20 rounded-lg p-3">
                  <p className="text-xs text-white/80">Necesito información sobre productos</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-neutral-600 rounded-full"></div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center">
                <span className="text-brand-blue text-xs font-medium">AI</span>
              </div>
              <div className="flex-1">
                <motion.div 
                  className="glass rounded-lg p-3"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <p className="text-xs text-white/80">Te ayudo con nuestro catálogo completo...</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      case "analysis":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-white">Análisis de Ventas</h4>
              <span className="text-xs text-success">+23%</span>
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Producto A", value: 85, trend: "up" },
                { name: "Producto B", value: 67, trend: "up" },
                { name: "Producto C", value: 43, trend: "down" },
                { name: "Producto D", value: 78, trend: "up" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                >
                  <span className="text-xs text-white/70">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-1 bg-neutral-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                      />
                    </div>
                    <span className={`text-xs ${item.trend === 'up' ? 'text-success' : 'text-warning'}`}>
                      {item.trend === 'up' ? '↗' : '↘'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "automation":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="text-center mb-3">
              <h4 className="text-xs font-semibold text-white mb-2">Flujo Automatizado</h4>
            </div>
            
            <div className="space-y-3">
              {[
                { step: "Recibir solicitud", status: "completed", delay: 0.8 },
                { step: "Validar datos", status: "completed", delay: 1.0 },
                { step: "Procesar información", status: "active", delay: 1.2 },
                { step: "Enviar respuesta", status: "pending", delay: 1.4 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 0.4 }}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'completed' ? 'bg-success' :
                    item.status === 'active' ? 'bg-brand-blue animate-pulse' :
                    'bg-neutral-600'
                  }`} />
                  <span className={`text-xs ${
                    item.status === 'completed' ? 'text-white' :
                    item.status === 'active' ? 'text-brand-blue' :
                    'text-white/50'
                  }`}>
                    {item.step}
                  </span>
                  {item.status === 'completed' && (
                    <span className="text-xs text-success">✓</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case "documents":
        return (
          <motion.div
            className="glass border border-white/10 rounded-lg p-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold text-white">Documentos Procesados</h4>
                <span className="text-xs text-brand-blue">IA activa</span>
              </div>
              
              {[
                { name: "Contrato_2024.pdf", status: "Analizado", confidence: 98 },
                { name: "Legal_doc.docx", status: "Procesando", confidence: 45 },
                { name: "Terms_new.pdf", status: "En cola", confidence: 0 }
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  className="glass rounded p-3 space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/80 truncate">{doc.name}</span>
                    <span className={`text-xs ${
                      doc.status === 'Analizado' ? 'text-success' :
                      doc.status === 'Procesando' ? 'text-brand-blue' :
                      'text-white/50'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                  {doc.confidence > 0 && (
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-1 bg-neutral-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${doc.confidence}%` }}
                          transition={{ delay: 1 + i * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-xs text-white/60">{doc.confidence}%</span>
                    </div>
                  )}
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
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Optimized background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary/10" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Capacidades
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="glass border-slate-700 text-white hover:bg-white/10 transition-all duration-300 h-full group">
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

        {/* Enhanced bottom section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >

        </motion.div>

        {/* New Verticals Section */}
        <motion.div 
          className="mt-24 pt-16 border-t border-slate-700/50"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nuestros Agentes Especializados
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Soluciones SaaS de negocio customizadas con AI agents para maximizar ROI por vertical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Agentes Logísticos",
                description: "Optimización end-to-end de supply chain con predicción de demanda",
                potential: "Reducción 35% costos logísticos",
                icon: "🚛"
              },
              {
                title: "Agentes Regulatorios", 
                description: "Compliance automatizado y gestión normativa inteligente",
                potential: "87% menos tiempo regulatorio",
                icon: "📋"
              },
              {
                title: "Agentes de Personalización",
                description: "Experiencias hiperpersonalizadas con ML behavioral",
                potential: "Incremento 4.2x conversión",
                icon: "🎯"
              },
              {
                title: "Agentes de Marketing",
                description: "Attribution models y campaign optimization en tiempo real",
                potential: "ROI marketing +280%",
                icon: "📊"
              },
              {
                title: "Agentes de Migración",
                description: "Modernización de legacy systems y code transformation",
                potential: "90% aceleración migración",
                icon: "⚡"
              }
            ].map((vertical, index) => (
              <motion.div
                key={vertical.title}
                className="glass border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl mb-4">{vertical.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {vertical.title}
                </h4>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {vertical.description}
                </p>
                <div className="px-3 py-2 bg-gradient-primary/20 rounded-lg">
                  <span className="text-xs text-brand-blue font-medium">
                    {vertical.potential}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 glass border border-white/10 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-white/80 text-sm">
                <strong className="text-white">SaaS Implementation:</strong> Deployment completo en 60-120 días
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
