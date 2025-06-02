"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Search, 
  ChevronDown,
  HelpCircle,
  Settings,
  Shield,
  TrendingUp,
  Users,
  CheckCircle
} from "lucide-react";

export default function FAQPage() {
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
        answer: "Nos especializamos exclusivamente en soluciones de AI empresarial con un enfoque en ROI medible. Nuestro equipo combina experiencia técnica profunda con conocimiento de negocio, garantizando implementaciones que generan valor real desde el primer día. Tenemos más de 200 proyectos exitosos con 98% de satisfacción del cliente."
      },
      {
        question: "¿Qué tipos de empresas se benefician más de sus soluciones?",
        answer: "Trabajamos principalmente con empresas medianas y grandes (50+ empleados) que buscan automatizar procesos, optimizar operaciones o mejorar la toma de decisiones. Sectores como manufactura, servicios financieros, retail y logística ven los mayores beneficios. Nuestros clientes típicamente ven ROI de 3x en el primer año."
      },
      {
        question: "¿Necesitamos tener conocimiento técnico previo en AI?",
        answer: "No es necesario. Nos encargamos de toda la implementación técnica y proporcionamos capacitación completa a su equipo. Nuestro enfoque es hacer la AI accesible y práctica para cualquier organización, sin importar su nivel técnico actual."
      },
      {
        question: "¿Cómo garantizan el éxito del proyecto?",
        answer: "Tenemos una metodología probada en más de 200 proyectos. Garantizamos ROI positivo en 6 meses o trabajamos sin costo adicional hasta lograrlo. Además, seguimos estándares internacionales de calidad y proporcionamos soporte 24/7."
      }
    ],
    implementation: [
      {
        question: "¿Cuánto tiempo toma implementar una solución de AI?",
        answer: "Los proyectos típicos toman entre 4-12 semanas, dependiendo de la complejidad. Proyectos simples de automatización pueden estar listos en 30 días, mientras que sistemas más complejos pueden requerir 3-6 meses. Siempre proporcionamos un timeline detallado en la fase de evaluación."
      },
      {
        question: "¿Cómo se integra con nuestros sistemas existentes?",
        answer: "Diseñamos todas nuestras soluciones para integrarse perfectamente con su infraestructura actual. Utilizamos APIs estándar y protocolos seguros para minimizar disrupciones y maximizar compatibilidad. Realizamos pruebas exhaustivas antes del despliegue en producción."
      },
      {
        question: "¿Qué sucede si necesitamos cambios durante la implementación?",
        answer: "Nuestro proceso ágil permite ajustes durante el desarrollo. Incluimos hasta 3 rondas de revisiones sin costo adicional, y mantenemos comunicación constante para asegurar que el resultado final cumpla exactamente con sus expectativas."
      },
      {
        question: "¿Proporcionan capacitación para nuestro equipo?",
        answer: "Sí, incluimos capacitación completa para usuarios finales y administradores. Proporcionamos documentación detallada, sesiones de entrenamiento en vivo, y acceso a nuestro portal de conocimiento con tutoriales y mejores prácticas."
      },
      {
        question: "¿Cómo manejan la migración de datos existentes?",
        answer: "Realizamos un análisis completo de sus datos actuales, desarrollamos un plan de migración sin interrupciones, y ejecutamos la transferencia en horarios que no afecten sus operaciones. Incluimos validación completa y backup de seguridad."
      }
    ],
    security: [
      {
        question: "¿Cómo protegen nuestros datos sensibles?",
        answer: "Implementamos cifrado de extremo a extremo, cumplimos con estándares SOC 2 Type II, y podemos trabajar completamente on-premise si es requerido. Sus datos nunca se utilizan para entrenar modelos externos. Tenemos certificaciones ISO 27001 y cumplimos con GDPR."
      },
      {
        question: "¿Qué certificaciones de seguridad tienen?",
        answer: "Contamos con certificaciones ISO 27001, SOC 2 Type II, y cumplimos con GDPR y otras regulaciones de privacidad. Nuestro equipo incluye especialistas en ciberseguridad certificados y realizamos auditorías de seguridad regulares."
      },
      {
        question: "¿Pueden trabajar con datos altamente confidenciales?",
        answer: "Sí, tenemos experiencia con datos financieros, médicos y de defensa. Podemos firmar NDAs específicos y trabajar bajo los más altos estándares de confidencialidad requeridos por su industria. También ofrecemos despliegues completamente aislados."
      },
      {
        question: "¿Qué medidas toman contra ciberataques?",
        answer: "Implementamos múltiples capas de seguridad: firewalls avanzados, detección de intrusiones en tiempo real, monitoreo 24/7, y protocolos de respuesta a incidentes. Todos nuestros sistemas pasan por pruebas de penetración regulares."
      },
      {
        question: "¿Cómo aseguran la privacidad de los datos?",
        answer: "Aplicamos principios de privacy-by-design, minimización de datos, y anonimización cuando es posible. Todos los accesos están auditados y registrados. Cumplimos estrictamente con regulaciones locales e internacionales de privacidad."
      }
    ],
    pricing: [
      {
        question: "¿Cómo estructuran sus precios?",
        answer: "Ofrecemos modelos flexibles: proyecto fijo, retainer mensual, o revenue-share. Los proyectos típicos van desde $50K para automatizaciones simples hasta $500K+ para transformaciones completas. Siempre proporcionamos una estimación detallada después de la evaluación inicial."
      },
      {
        question: "¿Garantizan el retorno de inversión?",
        answer: "Sí, garantizamos ROI positivo en 6 meses o trabajamos sin costo adicional hasta lograrlo. Nuestros clientes ven en promedio 3x ROI en el primer año, con reducciones de costos del 30-50% y aumentos de productividad del 40-60%."
      },
      {
        question: "¿Qué incluye el costo del proyecto?",
        answer: "Incluye análisis inicial, desarrollo, implementación, capacitación, y 3 meses de soporte post-lanzamiento. Los costos de infraestructura cloud se facturan por separado a precio de costo. No hay costos ocultos."
      },
      {
        question: "¿Ofrecen planes de financiamiento?",
        answer: "Sí, ofrecemos varios modelos de pago: pagos por hitos, financiamiento a 12-24 meses, y modelos de revenue-share donde pagamos parte de la inversión inicial a cambio de un porcentaje de los ahorros generados."
      },
      {
        question: "¿Hay costos adicionales después de la implementación?",
        answer: "Los primeros 3 meses de soporte están incluidos. Después, ofrecemos planes de soporte opcionales desde $2K/mes que incluyen monitoreo, mantenimiento, y actualizaciones. Los clientes pueden optar por soporte por incidentes o planes anuales."
      }
    ],
    support: [
      {
        question: "¿Qué tipo de soporte ofrecen post-implementación?",
        answer: "Ofrecemos soporte 24/7 con SLA de 4 horas para issues críticos. Incluye monitoreo proactivo, actualizaciones de seguridad, y optimizaciones continuas del rendimiento. Tenemos diferentes niveles de soporte según las necesidades del cliente."
      },
      {
        question: "¿Capacitan a nuestro equipo interno?",
        answer: "Sí, incluimos capacitación completa para usuarios finales y administradores. Proporcionamos documentación detallada, sesiones de entrenamiento, y acceso a nuestro portal de conocimiento. También ofrecemos certificaciones internas para su equipo técnico."
      },
      {
        question: "¿Qué pasa si necesitamos expandir la solución?",
        answer: "Diseñamos todas nuestras soluciones para ser escalables. Podemos agregar nuevas funcionalidades, usuarios, o casos de uso con mínima interrupción al sistema existente. Ofrecemos evaluaciones trimestrales para identificar oportunidades de expansión."
      },
      {
        question: "¿Cómo manejan las actualizaciones y mejoras?",
        answer: "Las actualizaciones de seguridad y mantenimiento se realizan automáticamente. Las mejoras de funcionalidad se planifican en conjunto con el cliente. Mantenemos compatibilidad hacia atrás y siempre probamos en ambiente de staging primero."
      },
      {
        question: "¿Qué sucede si hay problemas técnicos?",
        answer: "Tenemos monitoreo 24/7 que detecta issues antes de que afecten a los usuarios. Para problemas críticos, nuestro equipo responde en menos de 4 horas. Mantenemos logs detallados y herramientas de diagnóstico para resolución rápida."
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory as keyof typeof faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container-6xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-6xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <HelpCircle size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestras soluciones de AI empresarial y proceso de implementación.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
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
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={20} className="text-white/60" />
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
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
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para responder cualquier pregunta específica sobre tu proyecto de AI.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Contactar Especialista</span>
              <CheckCircle size={20} className="ml-2" />
            </Link>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 