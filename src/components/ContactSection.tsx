"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  User,
  Building,
  MessageSquare,
  Award,
  Users,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
  ChevronRight
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Directo",
      description: "Respuesta en 2 horas",
      value: "info@coagente.com",
      action: "mailto:info@coagente.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Agendar Llamada",
      description: "Consulta gratuita 30 min",
      value: "Calendly",
      action: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Llamada Directa",
      description: "Lun-Vie 9AM-6PM",
      value: "+52 81 1234 5678",
      action: "tel:+528112345678",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const trustIndicators = [
    { icon: Clock, text: "Respuesta en 2 horas" },
    { icon: Shield, text: "Consulta confidencial" },
    { icon: CheckCircle, text: "Sin compromiso" },
    { icon: Award, text: "Expertos certificados" }
  ];

  const stats = [
    { number: "50+", label: "Proyectos Completados", icon: Award },
    { number: "98%", label: "Satisfacción Cliente", icon: Users },
    { number: "24/7", label: "Soporte Técnico", icon: Shield },
    { number: "3+", label: "Años Experiencia", icon: Award }
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="container-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle size={40} className="text-white" />
            </motion.div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              ¡Mensaje Enviado!
            </h2>
            
            <p className="text-xl text-white/70 mb-8">
              Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo en las próximas 2 horas para discutir tu proyecto de AI.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Próximos pasos:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm font-semibold">1</span>
                  </div>
                  <span className="text-white/80">Revisaremos tu solicitud y prepararemos preguntas específicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-sm font-semibold">2</span>
                  </div>
                  <span className="text-white/80">Te contactaremos para agendar una consulta gratuita de 30 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm font-semibold">3</span>
                  </div>
                  <span className="text-white/80">Desarrollaremos una propuesta técnica personalizada</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative bg-slate-800 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Form Section */}
          <div className="py-20">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comencemos tu Proyecto de AI
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la inteligencia artificial puede transformar tu negocio
              </p>
            </motion.div>

            {/* Team Section */}
            <div id="team" className="py-20 border-t border-slate-700/50">
              <motion.div 
                className="text-center mb-16"
                variants={itemVariants}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nuestro Equipo
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Expertos en inteligencia artificial comprometidos con transformar tu negocio
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "Dr. Ana García",
                    role: "CEO & AI Strategist",
                    description: "15+ años en AI empresarial. PhD en Machine Learning por Stanford. Ex-Google AI.",
                    image: "/api/placeholder/300/300"
                  },
                  {
                    name: "Carlos Mendoza",
                    role: "CTO & Lead Developer",
                    description: "Arquitecto de soluciones AI. Ex-Microsoft Azure AI. Especialista en MLOps y escalabilidad.",
                    image: "/api/placeholder/300/300"
                  },
                  {
                    name: "María Rodriguez",
                    role: "Head of Implementation",
                    description: "Gestión de proyectos AI. MBA + Certificación PMP. 200+ implementaciones exitosas.",
                    image: "/api/placeholder/300/300"
                  }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-16"
                variants={itemVariants}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    ¿Quieres unirte a nuestro equipo?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Estamos siempre buscando talento excepcional en AI, desarrollo y consultoría empresarial.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="mailto:careers@coagente.com"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <span>Enviar CV</span>
                      <ArrowRight size={20} className="ml-2" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column - Contact Methods & Info */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Contact Methods */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-white mb-6">Múltiples formas de contacto</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.a
                        key={method.title}
                        href={method.action}
                        className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg group-hover:scale-110 transition-transform`}>
                            <method.icon size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-white/60 text-sm">{method.description}</p>
                            <p className="text-white/80 font-medium">{method.value}</p>
                          </div>
                          <ArrowRight size={20} className="text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-xl font-semibold text-white mb-4">¿Por qué elegirnos?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {trustIndicators.map((indicator, index) => (
                      <motion.div
                        key={indicator.text}
                        className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <indicator.icon size={18} className="text-blue-400" />
                        <span className="text-white/80 text-sm font-medium">{indicator.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Office Info */}
                <motion.div 
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <MapPin size={20} className="mr-2 text-blue-400" />
                    Nuestra oficina
                  </h3>
                  <div className="text-white/80 space-y-1">
                    <p>Frida Kahlo 303, Valle Oriente</p>
                    <p>San Pedro Garza García, México</p>
                    <p className="text-white/60 text-sm mt-3">
                      Lunes a Viernes: 9:00 AM - 6:00 PM (CST)
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-7">
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  variants={itemVariants}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Cuéntanos sobre tu proyecto
                    </h3>
                    <p className="text-white/70">
                      Completa el formulario y te contactaremos en las próximas 2 horas
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <div className="relative">
                          <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Email corporativo *
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                            placeholder="tu@empresa.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Empresa *
                        </label>
                        <div className="relative">
                          <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">
                          Tipo de proyecto
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="automation">Automatización de procesos</option>
                          <option value="chatbot">Agente de atención al cliente</option>
                          <option value="analytics">Análisis de datos con AI</option>
                          <option value="custom">Solución personalizada</option>
                          <option value="consultation">Consultoría general</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Presupuesto estimado
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="50k-100k">$50K - $100K USD</option>
                        <option value="100k-250k">$100K - $250K USD</option>
                        <option value="250k-500k">$250K - $500K USD</option>
                        <option value="500k+">$500K+ USD</option>
                        <option value="discuss">Prefiero discutirlo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Cuéntanos sobre tu proyecto *
                      </label>
                      <div className="relative">
                        <MessageSquare size={18} className="absolute left-3 top-3 text-white/40" />
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 resize-none"
                          placeholder="Describe tu proyecto, objetivos y cualquier requerimiento específico..."
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar solicitud</span>
                          <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>

                    <p className="text-white/50 text-sm text-center">
                      Al enviar este formulario, aceptas que nos pongamos en contacto contigo sobre tu proyecto.
                      <br />
                      Respetamos tu privacidad y nunca compartimos tu información.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-slate-700/50"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-600/50 transition-colors">
                    <stat.icon size={24} className="text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Section */}
          <div className="border-t border-slate-700/50 pt-12 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              
              {/* Company Section */}
              <motion.div 
                className="lg:col-span-1 space-y-6"
                variants={itemVariants}
              >
                {/* Enhanced Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 bg-white rounded-sm opacity-90" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      coagente
                    </h3>
                    <p className="text-xs text-blue-400 font-medium tracking-wider uppercase opacity-80">
                      AI Solutions
                    </p>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                  Desarrollamos soluciones de inteligencia artificial personalizadas para empresas que buscan transformar sus procesos y maximizar su productividad.
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Github, href: "#", label: "GitHub" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="text-white/60 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services Section */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">Servicios</h4>
                <nav className="space-y-3">
                  {[
                    { href: "/#services", text: "Agentes de IA" },
                    { href: "/#services", text: "Análisis de Datos" },
                    { href: "/#services", text: "Automatización" },
                    { href: "/#services", text: "Consultoría AI" },
                    { href: "/#process", text: "Implementación" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <ChevronRight size={14} className="mr-2 text-white/40 group-hover:text-blue-400 transition-colors" />
                        {item.text}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Company Info */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">Empresa</h4>
                <nav className="space-y-3">
                  {[
                    { href: "/#process", text: "Nuestro Proceso" },
                    { href: "/#faq", text: "Preguntas Frecuentes" },
                    { href: "/#team", text: "Nuestro Equipo" },
                    { href: "/privacy", text: "Privacidad" },
                    { href: "/terms", text: "Términos" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={item.href}
                        className="group flex items-center text-sm text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <ChevronRight size={14} className="mr-2 text-white/40 group-hover:text-blue-400 transition-colors" />
                        {item.text}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Quick Contact */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white">Contacto Rápido</h4>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3 text-sm text-white/60"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail size={16} className="text-blue-400" />
                    <a href="mailto:info@coagente.com" className="hover:text-white transition-colors">
                      info@coagente.com
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-3 text-sm text-white/60"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone size={16} className="text-blue-400" />
                    <a href="tel:+528112345678" className="hover:text-white transition-colors">
                      +52 81 1234 5678
                    </a>
                  </motion.div>
                </div>

                {/* Quick CTA */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Comenzar Proyecto</span>
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700/50 pt-6">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                
                {/* Copyright */}
                <motion.div 
                  className="text-sm text-white/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  © {currentYear} Coagente. Todos los derechos reservados.
                </motion.div>

                {/* Legal Links */}
                <motion.div 
                  className="flex items-center space-x-6 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                  <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                    Términos de Servicio
                  </Link>
                  <Link href="/cookies" className="text-white/50 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </motion.div>

                {/* Back to Top */}
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Volver arriba"
                >
                  <ArrowUp size={18} className="text-white/60 group-hover:text-white transition-colors" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
