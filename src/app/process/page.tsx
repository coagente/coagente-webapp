import Link from "next/link";
import { ArrowLeft, Settings, CheckCircle, Zap, BarChart, Users, Clock } from "lucide-react";

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
                <Settings size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Proceso
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Una metodología probada en más de 200 proyectos que garantiza resultados excepcionales y ROI positivo en tiempo récord.
            </p>
          </div>

          {/* Process Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Step 1: Evaluación */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <BarChart size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Evaluación</h3>
                  <p className="text-blue-400">de procesos</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Analizamos profundamente tus procesos actuales para identificar oportunidades de mejora y automatización con mayor potencial de ROI.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    Análisis de Procesos Actuales
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Mapeo completo de flujos de trabajo</li>
                    <li>• Identificación de cuellos de botella</li>
                    <li>• Medición de eficiencia actual</li>
                    <li>• Evaluación de costos operativos</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap size={16} className="text-yellow-400 mr-2" />
                    Oportunidades de AI
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Automatización de tareas repetitivas</li>
                    <li>• Optimización de toma de decisiones</li>
                    <li>• Mejora de experiencia del cliente</li>
                    <li>• Análisis predictivo de datos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: Desarrollo */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Settings size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Desarrollo</h3>
                  <p className="text-purple-400">personalizado</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Creamos soluciones de AI específicamente diseñadas para tus necesidades, objetivos de negocio y infraestructura existente.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    Diseño de Arquitectura
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Arquitectura escalable y segura</li>
                    <li>• Integración con sistemas existentes</li>
                    <li>• Selección de tecnologías óptimas</li>
                    <li>• Planificación de infraestructura</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap size={16} className="text-yellow-400 mr-2" />
                    Desarrollo Ágil
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Sprints de 2 semanas con demos</li>
                    <li>• Feedback continuo del cliente</li>
                    <li>• Testing automatizado</li>
                    <li>• Documentación completa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: Implementación */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Implementación</h3>
                  <p className="text-green-400">y monitoreo</p>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                Desplegamos la solución en producción y monitoreamos su rendimiento para garantizar resultados óptimos y mejora continua.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    Despliegue en Producción
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Migración sin interrupciones</li>
                    <li>• Capacitación del equipo</li>
                    <li>• Configuración de monitoreo</li>
                    <li>• Testing en ambiente real</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Clock size={16} className="text-blue-400 mr-2" />
                    Soporte Continuo
                  </h4>
                  <ul className="text-sm text-white/70 space-y-2">
                    <li>• Monitoreo 24/7</li>
                    <li>• Optimizaciones automáticas</li>
                    <li>• Reportes de rendimiento</li>
                    <li>• Actualizaciones regulares</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Details */}
          <div className="space-y-12 mb-20">
            
            {/* Timeline */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Timeline Típico de Proyecto</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-400">1-2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Semanas</h3>
                  <p className="text-white/70 text-sm">Evaluación y análisis completo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-400">2-8</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Semanas</h3>
                  <p className="text-white/70 text-sm">Desarrollo y testing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-400">1-2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Semanas</h3>
                  <p className="text-white/70 text-sm">Implementación y lanzamiento</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">∞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Continuo</h3>
                  <p className="text-white/70 text-sm">Soporte y optimización</p>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Métricas de Éxito Garantizadas</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">30-50%</div>
                  <div className="text-white/70">Reducción de costos operativos</div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">40-60%</div>
                  <div className="text-white/70">Aumento en productividad</div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-white/70">Disponibilidad del sistema</div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3X</div>
                  <div className="text-white/70">ROI en el primer año</div>
                </div>
              </div>
            </section>

            {/* Differentiators */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Lo que nos hace únicos</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Metodología Probada</h3>
                      <p className="text-white/70">200+ proyectos exitosos con 98% de satisfacción del cliente.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Implementación Rápida</h3>
                      <p className="text-white/70">Resultados tangibles en 30-90 días, no meses o años.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Equipo Experto</h3>
                      <p className="text-white/70">Ex-Google, Microsoft, Stanford. 15+ años de experiencia promedio.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">ROI Garantizado</h3>
                      <p className="text-white/70">Si no ves ROI positivo en 6 meses, trabajamos gratis hasta lograrlo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
                      <div className="bg-gradient-primary/20 rounded-xl p-8 border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Listo para transformar tu negocio con AI?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita de 30 minutos y descubre cómo nuestro proceso puede generar resultados extraordinarios en tu empresa.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <span>Comenzar Ahora</span>
              <ArrowLeft size={20} className="rotate-180" />
            </Link>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
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