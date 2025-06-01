import Link from "next/link";
import { ArrowLeft, Search, Code, Rocket, CheckCircle, Clock, Users, Target, BarChart, Shield } from "lucide-react";

export default function ProcessPage() {
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
        <div className="max-w-6xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <Target size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Proceso de Implementación
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Una metodología probada que garantiza el éxito de tu proyecto de inteligencia artificial desde la concepción hasta la implementación completa.
            </p>
          </div>

          {/* Process Overview */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Metodología Coagente: De la Idea al Impacto
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">30</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Días Promedio</h3>
                <p className="text-white/70 text-sm">Para proyectos de automatización</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Tasa de Éxito</h3>
                <p className="text-white/70 text-sm">En implementaciones completadas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3x</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">ROI Promedio</h3>
                <p className="text-white/70 text-sm">En el primer año</p>
              </div>
            </div>
          </div>

          {/* Detailed Process Steps */}
          <div className="space-y-16">
            
            {/* Phase 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Search size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">Fase 1</span>
                    <h2 className="text-3xl font-bold text-white">Análisis y Descubrimiento</h2>
                  </div>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Realizamos un análisis profundo de tu negocio para identificar las mejores oportunidades de implementación de AI.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Auditoría de Procesos</h4>
                      <p className="text-white/70 text-sm">Mapeo completo de workflows y identificación de cuellos de botella</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Análisis de Datos</h4>
                      <p className="text-white/70 text-sm">Evaluación de calidad y disponibilidad de datos existentes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Definición de Objetivos</h4>
                      <p className="text-white/70 text-sm">Establecimiento de KPIs y métricas de éxito claras</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Entregables Fase 1</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80">Reporte de análisis de procesos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80">Matriz de oportunidades AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80">Roadmap de implementación</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80">Estimación de ROI</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock size={16} className="text-blue-400" />
                    <span className="text-blue-400 font-semibold">Duración: 1-2 semanas</span>
                  </div>
                  <p className="text-white/70 text-sm">Incluye reuniones con stakeholders y análisis técnico</p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Entregables Fase 2</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">Arquitectura técnica detallada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">Prototipo funcional (MVP)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">Plan de integración</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">Documentación técnica</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock size={16} className="text-purple-400" />
                      <span className="text-purple-400 font-semibold">Duración: 2-4 semanas</span>
                    </div>
                    <p className="text-white/70 text-sm">Desarrollo iterativo con feedback continuo</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Fase 2</span>
                    <h2 className="text-3xl font-bold text-white">Diseño y Desarrollo</h2>
                  </div>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Creamos la solución de AI personalizada utilizando las mejores prácticas y tecnologías de vanguardia.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Arquitectura Escalable</h4>
                      <p className="text-white/70 text-sm">Diseño modular que crece con tu negocio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Desarrollo Ágil</h4>
                      <p className="text-white/70 text-sm">Sprints de 2 semanas con demos regulares</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Seguridad Integrada</h4>
                      <p className="text-white/70 text-sm">Cumplimiento SOC 2 y mejores prácticas de seguridad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Rocket size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">Fase 3</span>
                    <h2 className="text-3xl font-bold text-white">Implementación y Lanzamiento</h2>
                  </div>
                </div>
                <p className="text-white/80 text-lg mb-6">
                  Desplegamos la solución en tu entorno de producción con monitoreo continuo y soporte completo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Despliegue Gradual</h4>
                      <p className="text-white/70 text-sm">Implementación por fases para minimizar riesgos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Capacitación del Equipo</h4>
                      <p className="text-white/70 text-sm">Entrenamiento completo para usuarios y administradores</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Monitoreo 24/7</h4>
                      <p className="text-white/70 text-sm">Supervisión continua del rendimiento y alertas automáticas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Entregables Fase 3</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Sistema en producción</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Manual de usuario completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Dashboard de monitoreo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Plan de mantenimiento</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock size={16} className="text-green-400" />
                    <span className="text-green-400 font-semibold">Duración: 1-2 semanas</span>
                  </div>
                  <p className="text-white/70 text-sm">Incluye 3 meses de soporte post-lanzamiento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Methodologies */}
          <div className="mt-20 bg-white/5 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Metodologías y Frameworks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Agile/Scrum</h3>
                <p className="text-white/70 text-sm">Desarrollo iterativo con feedback continuo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart size={32} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">MLOps</h3>
                <p className="text-white/70 text-sm">Operaciones de machine learning automatizadas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">DevSecOps</h3>
                <p className="text-white/70 text-sm">Seguridad integrada en todo el ciclo de vida</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design Thinking</h3>
                <p className="text-white/70 text-sm">Enfoque centrado en el usuario y la experiencia</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                ¿Listo para comenzar tu proyecto de AI?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está preparado para guiarte a través de cada fase del proceso y garantizar el éxito de tu implementación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Comenzar Proyecto
                </Link>
                <Link 
                  href="/team"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  Conocer al Equipo
                </Link>
              </div>
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