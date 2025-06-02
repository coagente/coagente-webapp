import Link from "next/link";
import { ArrowLeft, Users, Award, Linkedin, Mail, Calendar, Star, Globe, Code, Brain } from "lucide-react";

export default function TeamPage() {
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
                <Users size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expertos en inteligencia artificial comprometidos con transformar tu negocio a través de soluciones innovadoras y resultados medibles.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-white/70">Años de Experiencia Promedio</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-white/70">Proyectos Completados</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white/70">Empresas Transformadas</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-white/70">Soporte Disponible</div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Equipo Directivo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* CCO - Elisa Ramírez Urón */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={48} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Elisa Ramírez Urón</h3>
                  <p className="text-pink-400 font-semibold mb-2">Directora Comercial (CCO)</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <p className="text-white/80 leading-relaxed">
                    Estratega de crecimiento con +10 años impulsando ventas y alianzas en Latinoamérica. Ha liderado equipos de hasta 25 personas, 
                    gestionado cuentas enterprise y fundado negocios e-commerce rentables.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award size={14} className="text-pink-400" />
                      <span className="text-white/70">MBA Marketing - Universidad de Chile</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe size={14} className="text-pink-400" />
                      <span className="text-white/70">Ex-Option Business Specialist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} className="text-pink-400" />
                      <span className="text-white/70">30% aumento en ventas</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">Ventas Enterprise</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">IA Generativa</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Transformación Digital</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <a href="mailto:info@coagente.com" className="p-2 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg transition-colors">
                      <Mail size={16} className="text-pink-400" />
                    </a>
                    <a href="#" className="p-2 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg transition-colors">
                      <Linkedin size={16} className="text-pink-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTO - Alberto Acuña */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code size={48} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Alberto Acuña</h3>
                  <p className="text-purple-400 font-semibold mb-2">CTO & Lead Developer</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <p className="text-white/80 leading-relaxed">
                    Arquitecto de soluciones AI con 12+ años de experiencia. Especialista en escalabilidad y arquitecturas cloud-native, 
                    con enfoque en sistemas de alta disponibilidad y MLOps.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award size={14} className="text-purple-400" />
                      <span className="text-white/70">MS Computer Science</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe size={14} className="text-purple-400" />
                      <span className="text-white/70">Cloud & AI Architecture Expert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code size={14} className="text-purple-400" />
                      <span className="text-white/70">100+ sistemas desplegados</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">MLOps</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Cloud Architecture</span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Scalability</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <a href="mailto:info@coagente.com" className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors">
                      <Mail size={16} className="text-purple-400" />
                    </a>
                    <a href="#" className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors">
                      <Linkedin size={16} className="text-purple-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CGO - Eduardo Treviño */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe size={48} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Eduardo Treviño</h3>
                  <p className="text-green-400 font-semibold mb-2">Chief Growth Officer (CGO)</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                    <Star size={16} className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <p className="text-white/80 leading-relaxed">
                    Experto en crecimiento empresarial con enfoque en expansión internacional y desarrollo de mercados. 
                    Especialista en estrategias de penetración y alianzas estratégicas.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award size={14} className="text-green-400" />
                      <span className="text-white/70">Growth Strategy Expert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe size={14} className="text-green-400" />
                      <span className="text-white/70">International Business Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} className="text-green-400" />
                      <span className="text-white/70">Market Expansion Leader</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Growth Strategy</span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Market Development</span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Strategic Partnerships</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <a href="mailto:info@coagente.com" className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors">
                      <Mail size={16} className="text-green-400" />
                    </a>
                    <a href="#" className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors">
                      <Linkedin size={16} className="text-green-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Culture */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Nuestra Cultura</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain size={32} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovación</h3>
                <p className="text-white/70 text-sm">Siempre explorando las últimas tecnologías y metodologías en AI</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Colaboración</h3>
                <p className="text-white/70 text-sm">Trabajamos como un equipo unido con nuestros clientes</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Excelencia</h3>
                <p className="text-white/70 text-sm">Comprometidos con la calidad y resultados excepcionales</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Impacto</h3>
                <p className="text-white/70 text-sm">Creamos soluciones que transforman negocios y vidas</p>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                ¿Quieres unirte a nuestro equipo?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando talento excepcional en AI, desarrollo y consultoría empresarial. 
                Únete a nosotros y ayuda a transformar el futuro de los negocios con inteligencia artificial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Beneficios Competitivos</h4>
                  <p className="text-white/70 text-sm">Salarios top del mercado + equity + bonos por performance</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Crecimiento Profesional</h4>
                  <p className="text-white/70 text-sm">Capacitación continua, conferencias y certificaciones</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Flexibilidad</h4>
                  <p className="text-white/70 text-sm">Trabajo remoto/híbrido + horarios flexibles</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@coagente.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail size={20} className="mr-2" />
                  Enviar CV
                </a>
                <a
                  href="mailto:info@coagente.com?subject=Agendar entrevista"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <Calendar size={20} className="mr-2" />
                  Agendar Entrevista
                </a>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
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