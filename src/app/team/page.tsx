import Link from "next/link";
import { ArrowLeft, Mail, Linkedin, ChevronRight } from "lucide-react";
import { motion } from "../../components/motion-shim";
import Navbar from "@/components/Navbar";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Elisa Ramírez Urón",
      role: "Directora Comercial",
      experience: "10+ años en ventas enterprise",
      description: "Especialista en crecimiento empresarial y expansión en Latinoamérica. Track record en transformación digital y desarrollo de alianzas estratégicas con resultados medibles.",
      education: "MBA Marketing, Universidad de Chile"
    },
    {
      name: "Alberto Acuña",
      role: "CTO & Lead Developer",
      experience: "12+ años en arquitectura AI",
      description: "Arquitecto de soluciones cloud-native y especialista en escalabilidad. Experto en sistemas de alta disponibilidad con 100+ implementaciones exitosas.",
      education: "MS Computer Science"
    },
    {
      name: "Eduardo Treviño",
      role: "Chief Growth Officer",
      experience: "8+ años en expansión internacional",
      description: "Estratega de crecimiento y desarrollo de mercados. Especialista en penetración estratégica y construcción de alianzas comerciales sostenibles.",
      education: "Growth Strategy Expert"
    }
  ];

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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Navbar />
      
      {/* Subtle background gradient matching main site */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 opacity-50" />
      
      <div className="container-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Hero with integrated design system */}
          <motion.div className="mb-32" variants={itemVariants}>
            <nav className="flex items-center space-x-3 text-sm text-white/60 mb-12">
              <Link 
                href="/"
                className="hover:text-brand-blue transition-colors duration-200"
              >
                Inicio
              </Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/90">Equipo</span>
            </nav>

            <h1 className="text-display mb-6">
              Nuestro{" "}
              <span className="gradient-text-hero">
                Equipo
              </span>
            </h1>
            
            <p className="text-body-large text-white/70 max-w-3xl leading-relaxed">
              Expertos comprometidos con la excelencia en inteligencia artificial y 
              transformación empresarial. Resultados medibles, implementación ágil.
            </p>
          </motion.div>

          {/* Key Metrics with glass effect */}
          <motion.div className="grid md:grid-cols-3 gap-8 mb-32" variants={itemVariants}>
            {[
              { value: "15+", label: "Años de experiencia promedio", accent: "brand-blue" },
              { value: "200+", label: "Proyectos completados", accent: "brand-purple" },
              { value: "50+", label: "Empresas transformadas", accent: "brand-blue" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass p-8 text-center hover-glow group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-4xl font-extralight text-${stat.accent} mb-3`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-light leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Members with enhanced design */}
          <motion.div className="space-y-16 mb-32" variants={itemVariants}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={itemVariants}
              >
                <div className="glass p-8 md:p-12 hover-lift">
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    
                    {/* Name & Role */}
                    <div className="md:col-span-4">
                      <h2 className="text-headline mb-3 leading-tight">
                        {member.name}
                      </h2>
                      <p className="text-brand-blue font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-body-small text-white/50 font-light">
                        {member.experience}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-6">
                      <p className="text-body text-white/80 leading-relaxed mb-6">
                        {member.description}
                      </p>
                      <p className="text-body-small text-white/60 font-light mb-6">
                        {member.education}
                      </p>
                      
                      {/* Contact with brand integration */}
                      <div className="flex items-center space-x-6">
                        <a 
                          href="mailto:info@coagente.com"
                          className="text-body-small text-brand-blue hover:text-brand-blue-light transition-colors duration-200 font-medium"
                        >
                          Contactar
                        </a>
                        <a 
                          href="#"
                          className="text-body-small text-white/60 hover:text-brand-purple transition-colors duration-200 font-light"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* Elegant index */}
                    <div className="md:col-span-2 text-right">
                      <span className="text-6xl font-extralight text-white/10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values with brand integration */}
          <motion.div className="mb-32" variants={itemVariants}>
            <div className="glass p-12">
              <h2 className="text-headline mb-12 text-center">
                Nuestros <span className="gradient-text-hero">Principios</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                  <h3 className="text-subheadline text-brand-blue mb-6">
                    Excelencia Técnica
                  </h3>
                  <p className="text-body text-white/70 leading-relaxed">
                    Comprometidos con la más alta calidad en cada implementación y entrega.
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-subheadline text-brand-purple mb-6">
                    Resultados Medibles
                  </h3>
                  <p className="text-body text-white/70 leading-relaxed">
                    Enfoque en impacto empresarial tangible y transformación sostenible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career section with system integration */}
          <motion.div className="mb-24" variants={itemVariants}>
            <div className="glass p-12">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-headline mb-8">
                    Únete al{" "}
                    <span className="gradient-text-hero">equipo</span>
                  </h2>
                  <p className="text-body text-white/70 leading-relaxed mb-8">
                    Buscamos profesionales excepcionales comprometidos con la excelencia 
                    en inteligencia artificial y consultoría empresarial.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="text-body-small">
                      <span className="text-white/60">• Compensación competitiva</span>
                    </div>
                    <div className="text-body-small">
                      <span className="text-white/60">• Desarrollo profesional continuo</span>
                    </div>
                    <div className="text-body-small">
                      <span className="text-white/60">• Flexibilidad y autonomía</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.a 
                    href="mailto:info@coagente.com"
                    className="block group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass-strong p-6 hover-glow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-body font-medium text-white mb-1">Enviar solicitud</h3>
                          <p className="text-body-small text-white/60">info@coagente.com</p>
                        </div>
                        <div className="text-brand-blue group-hover:text-brand-blue-light transition-colors duration-200">
                          <Mail size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:info@coagente.com?subject=Agendar entrevista"
                    className="block group"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass-strong p-6 hover-glow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-body font-medium text-white mb-1">Agendar entrevista</h3>
                          <p className="text-body-small text-white/60">Conversación inicial</p>
                        </div>
                        <div className="text-brand-purple group-hover:text-brand-purple-light transition-colors duration-200">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation with brand colors */}
          <motion.div className="text-center" variants={itemVariants}>
            <Link 
              href="/"
              className="inline-flex items-center space-x-3 text-white/70 hover:text-brand-blue transition-colors duration-200 text-body font-light group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Volver al inicio</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
} 