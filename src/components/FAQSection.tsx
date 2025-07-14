"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "./motion-shim";
import { 
  ChevronDown, 
  Search, 
  Clock, 
  Shield, 
  Zap, 
  Users,
  TrendingUp,
  Settings,
  HelpCircle,
  CheckCircle
} from "lucide-react";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "general", name: "General", icon: HelpCircle },
    { id: "implementation", name: "Implementación", icon: Settings },
    { id: "security", name: "Seguridad", icon: Shield },
    { id: "pricing", name: "Inversión", icon: TrendingUp },
    { id: "support", name: "Soporte", icon: Users }
  ];

  const faqs = {
    general: [
      {
        question: "¿Qué hace diferente a coagente de otras consultoras de AI?",
        answer: "Nos especializamos exclusivamente en soluciones de AI empresarial con un enfoque en ROI medible. Nuestro equipo combina experiencia técnica profunda con conocimiento de negocio, garantizando implementaciones que generan valor real desde el primer día."
      },
      {
        question: "¿Qué tipos de empresas se benefician más de sus soluciones?",
        answer: "Trabajamos principalmente con empresas medianas y grandes (50+ empleados) que buscan automatizar procesos, optimizar operaciones o mejorar la toma de decisiones. Sectores como manufactura, servicios financieros, retail y logística ven los mayores beneficios."
      },
      {
        question: "¿Necesitamos tener conocimiento técnico previo en AI?",
        answer: "No es necesario. Nos encargamos de toda la implementación técnica y proporcionamos capacitación completa a su equipo. Nuestro enfoque es hacer la AI accesible y práctica para cualquier organización."
      }
    ],
    implementation: [
      {
        question: "¿Cuánto tiempo toma implementar una solución de AI?",
        answer: "Los proyectos típicos toman entre 4-12 semanas, dependiendo de la complejidad. Proyectos simples de automatización pueden estar listos en 30 días, mientras que sistemas más complejos pueden requerir 3-6 meses."
      },
      {
        question: "¿Cómo se integra con nuestros sistemas existentes?",
        answer: "Diseñamos todas nuestras soluciones para integrarse perfectamente con su infraestructura actual. Utilizamos APIs estándar y protocolos seguros para minimizar disrupciones y maximizar compatibilidad."
      },
      {
        question: "¿Qué sucede si necesitamos cambios durante la implementación?",
        answer: "Nuestro proceso ágil permite ajustes durante el desarrollo. Incluimos hasta 3 rondas de revisiones sin costo adicional, y mantenemos comunicación constante para asegurar que el resultado final cumpla exactamente con sus expectativas."
      }
    ],
    security: [
      {
        question: "¿Cómo protegen nuestros datos sensibles?",
        answer: "Implementamos cifrado de extremo a extremo, cumplimos con estándares SOC 2 Type II, y podemos trabajar completamente on-premise si es requerido. Sus datos nunca se utilizan para entrenar modelos externos."
      },
      {
        question: "¿Qué certificaciones de seguridad tienen?",
        answer: "Contamos con certificaciones ISO 27001, SOC 2 Type II, y cumplimos con GDPR y otras regulaciones de privacidad. Nuestro equipo incluye especialistas en ciberseguridad certificados."
      },
      {
        question: "¿Pueden trabajar con datos altamente confidenciales?",
        answer: "Sí, tenemos experiencia con datos financieros, médicos y de defensa. Podemos firmar NDAs específicos y trabajar bajo los más altos estándares de confidencialidad requeridos por su industria."
      }
    ],
    pricing: [
      {
        question: "¿Cómo estructuran sus precios?",
        answer: "Ofrecemos modelos flexibles: proyecto fijo, retainer mensual, o revenue-share. Los proyectos típicos van desde $50K para automatizaciones simples hasta $500K+ para transformaciones completas."
      },
      {
        question: "¿Garantizan el retorno de inversión?",
        answer: "Sí, garantizamos ROI positivo en 6 meses o trabajamos sin costo adicional hasta lograrlo. Nuestros clientes ven en promedio 3x ROI en el primer año."
      },
      {
        question: "¿Qué incluye el costo del proyecto?",
        answer: "Incluye análisis inicial, desarrollo, implementación, capacitación, y 3 meses de soporte post-lanzamiento. Los costos de infraestructura cloud se facturan por separado a precio de costo."
      }
    ],
    support: [
      {
        question: "¿Qué tipo de soporte ofrecen post-implementación?",
        answer: "Ofrecemos soporte 24/7 con SLA de 4 horas para issues críticos. Incluye monitoreo proactivo, actualizaciones de seguridad, y optimizaciones continuas del rendimiento."
      },
      {
        question: "¿Capacitan a nuestro equipo interno?",
        answer: "Sí, incluimos capacitación completa para usuarios finales y administradores. Proporcionamos documentación detallada, sesiones de entrenamiento, y acceso a nuestro portal de conocimiento."
      },
      {
        question: "¿Qué pasa si necesitamos expandir la solución?",
        answer: "Diseñamos todas nuestras soluciones para ser escalables. Podemos agregar nuevas funcionalidades, usuarios, o casos de uso con mínima interrupción al sistema existente."
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestras soluciones de AI empresarial
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Buscar en preguntas frecuentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                  >
                    <motion.button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between group"
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={20} className="text-white/60" />
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="border-t border-white/10 pt-4">
                              <p className="text-white/80 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <HelpCircle size={48} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/60 text-lg">
                  No se encontraron preguntas que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Limpiar búsqueda
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 pt-12 border-t border-white/10"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para responder cualquier pregunta específica sobre tu proyecto de AI.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span>Contactar Especialista</span>
                <CheckCircle size={20} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 