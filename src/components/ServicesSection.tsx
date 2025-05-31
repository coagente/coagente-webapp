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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
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
      demo: "agents"
    },
    {
      title: "Consultoría de AI para productividad",
      description: "Te asesoramos estratégicamente para implementar soluciones de IA impulsando el crecimiento y la transformación de tu negocio.",
      demo: "consulting"
    },
    {
      title: "Casos de uso personalizados de IA",
      description: "Creamos soluciones de IA que automatizan y optimizan los procesos de tu empresa, impulsando resultados medibles alineados con tus objetivos de negocio.",
      demo: "customcases"
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
      case "agents":
        return (
          <motion.div 
            className="glass-strong rounded-xl p-5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-semibold text-blue-400">Agente de Ventas AI</div>
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full shadow-glow"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Leads procesados</span>
                  <span className="text-green-400 font-semibold">+247%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Tiempo de respuesta</span>
                  <span className="text-blue-400 font-semibold">2.3s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Conversión</span>
                  <span className="text-green-400 font-semibold">+89%</span>
                </div>
              </motion.div>

              <motion.div 
                className="glass px-4 py-3 rounded-lg text-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-gray-500 mb-1">Última acción:</div>
                <div className="text-gray-300">Calificó lead de empresa tecnológica → Prioridad Alta</div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "consulting":
        return (
          <motion.div 
            className="glass-strong rounded-xl p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-lg font-bold text-blue-400 mb-1">Análisis de Oportunidades</div>
                <div className="text-xs text-gray-400">Evaluación completa de procesos</div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { area: "Atención al Cliente", potential: "Alto", color: "text-green-400" },
                  { area: "Gestión Documental", potential: "Medio", color: "text-yellow-400" },
                  { area: "Análisis de Datos", potential: "Alto", color: "text-green-400" },
                  { area: "Recursos Humanos", potential: "Bajo", color: "text-red-400" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="glass rounded-lg p-3 text-xs hover:shadow-elevation-1 transition-all duration-300"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: i * 0.1 + 0.5 }
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-gray-300 font-medium">{item.area}</div>
                    <div className={`${item.color} font-semibold`}>{item.potential}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="text-center text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                ROI estimado: <span className="text-green-400 font-semibold">340%</span> en 12 meses
              </motion.div>
            </div>
          </motion.div>
        );

      case "customcases":
        return (
          <motion.div 
            className="glass-strong rounded-xl p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-purple-400">Caso: E-commerce</div>
                <div className="text-xs text-gray-400">Recomendaciones Personalizadas</div>
              </motion.div>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="glass rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Precisión de recomendaciones</span>
                    <span className="text-green-400 font-semibold">94.2%</span>
                  </div>
                  <motion.div 
                    className="w-full bg-gray-700 rounded-full h-1.5 mt-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-1.5 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "94%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                  </motion.div>
                </div>

                <div className="glass rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Incremento en ventas</span>
                    <span className="text-green-400 font-semibold">+156%</span>
                  </div>
                </div>

                <div className="glass rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Tiempo de implementación</span>
                    <span className="text-blue-400 font-semibold">6 semanas</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "automation":
        return (
          <motion.div 
            className="glass-strong rounded-xl p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-orange-400">Flujo de Automatización</div>
                <div className="text-xs text-gray-400">Procesamiento de Facturas</div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { step: "Recepción", icon: "📧", status: "completed" },
                  { step: "Extracción", icon: "🔍", status: "processing" },
                  { step: "Validación", icon: "✅", status: "pending" },
                  { step: "Archivo", icon: "📁", status: "pending" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.2 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm mb-2 shadow-elevation-1 ${
                        item.status === 'completed' ? 'bg-green-600' :
                        item.status === 'processing' ? 'bg-blue-600' : 'bg-gray-600'
                      }`}
                      animate={item.status === 'processing' ? { 
                        scale: [1, 1.1, 1],
                        boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="text-xs text-gray-400 text-center">{item.step}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="text-center text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="text-gray-400">Tiempo promedio: <span className="text-green-400">2.3 min</span></div>
                <div className="text-gray-400">Precisión: <span className="text-green-400">99.7%</span></div>
              </motion.div>
            </div>
          </motion.div>
        );

      case "llm":
        return (
          <motion.div 
            className="glass-strong rounded-xl p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-sm font-medium text-cyan-400">LLM Empresarial</div>
                <div className="text-xs text-gray-400">Asistente Legal Especializado</div>
              </motion.div>

              <motion.div 
                className="glass px-4 py-3 rounded-lg text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-gray-500 mb-1">Consulta:</div>
                <div className="text-gray-300">"Analiza este contrato de servicios y identifica cláusulas de riesgo"</div>
              </motion.div>

              <motion.div 
                className="glass px-4 py-3 rounded-lg text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-cyan-400 mb-1">Análisis completado:</div>
                <div className="text-gray-300">• 3 cláusulas de alto riesgo identificadas</div>
                <div className="text-gray-300">• Recomendaciones de modificación generadas</div>
                <div className="text-gray-300">• Precedentes legales relevantes encontrados</div>
              </motion.div>

              <motion.div 
                className="flex justify-between text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-gray-400">Tiempo de análisis:</span>
                <span className="text-green-400">12 segundos</span>
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="section-padding gradient-bg relative overflow-hidden">
      {/* Enhanced floating decorative elements */}
      <motion.div 
        className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto container-padding" ref={ref}>
        <motion.h2 
          className="text-fluid-4xl font-bold mb-20 text-center gradient-text text-shadow-glow"
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
              <Card className="glass-strong text-white hover-glow hover-float group h-full interactive shadow-elevation-2 rounded-2xl border-0 transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.p 
                    className="text-gray-300 leading-relaxed content-width"
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
