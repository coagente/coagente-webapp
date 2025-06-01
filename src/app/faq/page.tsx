"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, Search, ChevronDown, ChevronUp, Clock, Shield, DollarSign, Zap, Users } from "lucide-react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "Todas", icon: HelpCircle },
    { id: "general", name: "General", icon: HelpCircle },
    { id: "implementation", name: "Implementación", icon: Zap },
    { id: "security", name: "Seguridad", icon: Shield },
    { id: "investment", name: "Inversión", icon: DollarSign },
    { id: "support", name: "Soporte", icon: Users }
  ];

  const faqs = [
    // General
    {
      id: 1,
      category: "general",
      question: "¿Qué es exactamente la inteligencia artificial empresarial?",
      answer: "La inteligencia artificial empresarial son sistemas que automatizan procesos, analizan datos y toman decisiones para mejorar la eficiencia operativa. Incluye chatbots, análisis predictivo, automatización de documentos y optimización de procesos. En Coagente desarrollamos soluciones personalizadas que se integran perfectamente con tus sistemas existentes."
    },
    {
      id: 2,
      category: "general",
      question: "¿Mi empresa está lista para implementar AI?",
      answer: "La mayoría de empresas pueden beneficiarse de AI, independientemente de su tamaño. Los requisitos básicos son: procesos repetitivos que se puedan automatizar, datos disponibles (aunque sean básicos), y disposición al cambio. Realizamos una evaluación gratuita para identificar las mejores oportunidades en tu empresa específica."
    },
    {
      id: 3,
      category: "general",
      question: "¿Qué diferencia a Coagente de otras consultoras de AI?",
      answer: "Nos enfocamos en resultados medibles y garantizamos ROI positivo en 6 meses. Nuestro equipo combina experiencia técnica (ex-Google, Microsoft) con conocimiento empresarial profundo. Además, proporcionamos soporte 24/7 y mantenimiento continuo, no solo desarrollo y abandono."
    },

    // Implementation
    {
      id: 4,
      category: "implementation",
      question: "¿Cuánto tiempo toma implementar una solución de AI?",
      answer: "Depende de la complejidad: automatizaciones simples toman 2-4 semanas, chatbots empresariales 4-6 semanas, y sistemas de análisis avanzado 6-12 semanas. Trabajamos en sprints de 2 semanas con demos regulares para que veas el progreso constantemente."
    },
    {
      id: 5,
      category: "implementation",
      question: "¿Necesito cambiar mis sistemas actuales?",
      answer: "No necesariamente. Diseñamos nuestras soluciones para integrarse con tus sistemas existentes (CRM, ERP, bases de datos). Utilizamos APIs y conectores estándar para minimizar disrupciones. Solo recomendamos cambios cuando realmente agregan valor significativo."
    },
    {
      id: 6,
      category: "implementation",
      question: "¿Qué pasa si mi equipo no tiene conocimientos técnicos?",
      answer: "Incluimos capacitación completa para tu equipo como parte del proyecto. Creamos interfaces intuitivas que cualquier usuario puede manejar. Además, proporcionamos documentación detallada y soporte continuo para garantizar la adopción exitosa."
    },
    {
      id: 7,
      category: "implementation",
      question: "¿Pueden trabajar con nuestros datos confidenciales?",
      answer: "Absolutamente. Firmamos acuerdos de confidencialidad estrictos y cumplimos con SOC 2 Type II. Tus datos nunca salen de tu infraestructura sin autorización explícita. Podemos trabajar on-premise o en tu cloud privado si es necesario."
    },

    // Security
    {
      id: 8,
      category: "security",
      question: "¿Qué medidas de seguridad implementan?",
      answer: "Implementamos cifrado end-to-end, autenticación multi-factor, auditorías de seguridad regulares, y cumplimiento con GDPR/SOC 2. Todos nuestros sistemas pasan por penetration testing antes del despliegue. Mantenemos logs detallados y monitoreo 24/7."
    },
    {
      id: 9,
      category: "security",
      question: "¿Dónde se almacenan nuestros datos?",
      answer: "Tus datos se almacenan donde tú decidas: en tu infraestructura on-premise, en tu cloud privado (AWS, Azure, GCP), o en servidores certificados en México. Nunca mezclamos datos de diferentes clientes y mantienes control total sobre la ubicación y acceso."
    },
    {
      id: 10,
      category: "security",
      question: "¿Qué pasa si hay una brecha de seguridad?",
      answer: "Tenemos protocolos de respuesta inmediata: notificación en menos de 2 horas, análisis forense completo, y plan de remediación. Contamos con seguro de responsabilidad cibernética y un equipo de respuesta a incidentes disponible 24/7."
    },

    // Investment
    {
      id: 11,
      category: "investment",
      question: "¿Cuánto cuesta implementar AI en mi empresa?",
      answer: "Los proyectos van desde $50K USD para automatizaciones básicas hasta $500K+ para transformaciones completas. El costo depende de la complejidad, integración requerida, y alcance. Ofrecemos una consulta gratuita para darte un estimado preciso basado en tus necesidades específicas."
    },
    {
      id: 12,
      category: "investment",
      question: "¿Cuál es el retorno de inversión esperado?",
      answer: "Nuestros clientes típicamente ven ROI de 3x en el primer año. Los beneficios incluyen: reducción de costos operativos (30-50%), aumento en productividad (40-60%), y mejora en satisfacción del cliente (20-30%). Garantizamos ROI positivo en 6 meses o trabajamos sin costo adicional."
    },
    {
      id: 13,
      category: "investment",
      question: "¿Ofrecen opciones de financiamiento?",
      answer: "Sí, ofrecemos varias opciones: pago por fases según entregables, modelos de revenue sharing donde cobramos un porcentaje de los ahorros generados, y planes de pago extendidos. También trabajamos con partners financieros para proyectos grandes."
    },

    // Support
    {
      id: 14,
      category: "support",
      question: "¿Qué tipo de soporte proporcionan después del lanzamiento?",
      answer: "Incluimos 3 meses de soporte completo post-lanzamiento, luego ofrecemos planes de mantenimiento con soporte 24/7, actualizaciones regulares, monitoreo proactivo, y mejoras continuas. También proporcionamos capacitación adicional cuando sea necesario."
    },
    {
      id: 15,
      category: "support",
      question: "¿Pueden escalar la solución conforme crezca mi empresa?",
      answer: "Absolutamente. Diseñamos todas nuestras soluciones con escalabilidad en mente. Utilizamos arquitecturas cloud-native que se adaptan automáticamente al crecimiento. Incluimos planes de escalamiento y revisiones trimestrales para optimizar el rendimiento."
    }
  ];

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Encuentra respuestas a las preguntas más comunes sobre implementación de inteligencia artificial en empresas.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Buscar preguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-white/40" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No se encontraron resultados</h3>
                <p className="text-white/60">Intenta con otros términos de búsqueda o selecciona una categoría diferente.</p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openQuestions.includes(faq.id) ? (
                      <ChevronUp size={20} className="text-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-white/60 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openQuestions.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está disponible para responder cualquier pregunta específica sobre tu proyecto de AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Contactar Experto
              </Link>
              <Link 
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Nuestro Proceso
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-3">
                <Clock size={24} className="text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">2 horas</div>
              <div className="text-sm text-white/60">Tiempo de respuesta promedio</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-3">
                <Users size={24} className="text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/60">Empresas asesoradas</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-3">
                <Shield size={24} className="text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/60">Satisfacción del cliente</div>
            </div>
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