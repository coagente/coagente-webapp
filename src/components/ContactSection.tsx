"use client";

import { useState } from "react";
import { motion } from "./motion-shim";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
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
  const [submitError, setSubmitError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_coagente';
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact';
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_email: 'info@coagente.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.projectType || 'No especificado',
        budget: formData.budget || 'No especificado',
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
        budget: ""
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente a info@coagente.com');
    }
    
    setIsSubmitting(false);
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
      icon: Phone,
      title: "Consulta Telefónica",
      content: "Disponible Lun-Vie 9:00-18:00 CST",
      value: "+52 811 999 3390",
      action: "tel:+528119993390",
      gradient: "from-slate-800/40 via-slate-700/30 to-slate-800/40",
      iconBg: "from-brand-blue/20 to-brand-purple/20",
      borderGlow: "group-hover:shadow-brand-blue/20"
    },
    {
      icon: Mail,
      title: "Comunicación Directa",
      content: "Respuesta garantizada < 2 horas",
      value: "info@coagente.com",
      action: "mailto:info@coagente.com",
      gradient: "from-slate-800/40 via-slate-700/30 to-slate-800/40",
      iconBg: "from-brand-blue/20 to-brand-purple/20",
      borderGlow: "group-hover:shadow-brand-blue/20"
    },
    {
      icon: Calendar,
      title: "Diagnóstico Estratégico",
      content: "Sesión gratuita de 30 minutos",
      value: "Agendar con Elisa",
      action: "https://calendly.com/elisa-coagente/30min?month=2025-07",
      gradient: "from-slate-800/40 via-slate-700/30 to-slate-800/40",
      iconBg: "from-brand-purple/20 to-brand-blue/20",
      borderGlow: "group-hover:shadow-brand-purple/20"
    },
  ];

  const trustIndicators = [
    { 
      icon: Clock, 
      text: "Respuesta 2h", 
      subtitle: "Tiempo garantizado",
      gradient: "from-slate-800/30 to-slate-700/30"
    },
    { 
      icon: Shield, 
      text: "ISO 27001", 
      subtitle: "Certificación",
      gradient: "from-slate-800/30 to-slate-700/30"
    },
    { 
      icon: CheckCircle, 
      text: "NDA Incluido", 
      subtitle: "Confidencialidad",
      gradient: "from-slate-800/30 to-slate-700/30"
    },
    { 
      icon: Award, 
      text: "Fortune 500", 
      subtitle: "Experiencia",
      gradient: "from-slate-800/30 to-slate-700/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24,
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
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
              className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto mb-8"
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
            
            <div className="glass border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Próximos pasos:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-blue text-sm font-semibold">1</span>
                  </div>
                  <span className="text-white/80">Revisaremos tu solicitud y prepararemos preguntas específicas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-purple/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-purple text-sm font-semibold">2</span>
                  </div>
                  <span className="text-white/80">Te contactaremos para agendar una consulta gratuita de 30 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-blue text-sm font-semibold">3</span>
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
      {/* Optimized background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-blue/3 rounded-full blur-3xl" />
      </div>

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Enhanced Header with Modern Design */}
          <div className="py-20 md:py-32">
            <motion.div 
              className="text-center mb-20 md:mb-32"
              variants={itemVariants}
            >
              {/* Animated Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 animate-pulse"></div>
                <span className="text-body-small text-white/80 font-medium">
                  Disponibles para nuevos proyectos
                </span>
              </motion.div>

              {/* Main Title with Enhanced Animation */}
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Iniciemos tu{" "}
                <motion.span 
                  className="gradient-text-hero font-normal relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  Transformación
                  {/* Subtle underline animation */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.span>
              </motion.h2>
              
              {/* Enhanced Subtitle with Staggered Animation */}
              <motion.div
                className="max-w-4xl mx-auto space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                  Conectemos para explorar cómo la inteligencia artificial puede{" "}
                  <span className="text-white font-medium">revolucionar tus operaciones</span>{" "}
                  y generar valor mensurable
                </p>
                
                {/* Value Proposition Points */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-8 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  {[
                    { icon: "⚡", text: "Resultados en 30-90 días", delay: 0 },
                    { icon: "📊", text: "ROI documentado 3.2x", delay: 0.1 },
                    { icon: "🔒", text: "Seguridad ISO 27001", delay: 0.2 }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + item.delay, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-body-small text-white/70 font-medium whitespace-nowrap">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Call to Action Arrow */}
              <motion.div 
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <motion.div
                  className="w-8 h-8 flex items-center justify-center rounded-full glass border border-white/20"
                  animate={{ 
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ChevronRight 
                    size={16} 
                    className="text-white/60 rotate-90" 
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Grid Layout with Visual Flow */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Left Column - Essential Contact & Info */}
              <div className="md:col-span-5 space-y-12 lg:space-y-16">
                
                {/* Visual Connection Line */}
                <div className="hidden md:block absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                {/* Essential Contact Methods */}
                <motion.div variants={itemVariants}>
                  <div className="space-y-6 relative">
                    {/* Section Header with Enhanced Design */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-white/10 flex items-center justify-center">
                        <span className="text-white/80 font-bold text-lg">01</span>
                      </div>
                      <div>
                        <h3 className="text-headline font-light text-white/90">
                          Contacto Directo
                        </h3>
                        <p className="text-body-small text-white/50">
                          Múltiples canales disponibles
                        </p>
                      </div>
                    </div>
                    
                    {/* Email Contact */}
                    <motion.a
                      href="mailto:info@coagente.com"
                      className="group relative block glass border border-white/10 rounded-2xl p-8 hover-glow transition-all duration-300 overflow-hidden"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center space-x-6">
                        <div className="p-4 bg-brand-blue/20 rounded-xl group-hover:bg-brand-blue/30 transition-colors duration-300 group-hover:scale-110">
                          <Mail size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-body font-medium text-white mb-2 group-hover:text-white transition-colors">
                            Comunicación Directa
                          </h4>
                          <p className="text-body-small text-white/60 mb-3 group-hover:text-white/80 transition-colors">
                            Respuesta garantizada en 2 horas
                          </p>
                          <p className="text-body-small text-white/80 font-medium group-hover:text-brand-blue transition-colors">
                            info@coagente.com
                          </p>
                        </div>
                        <ArrowRight size={18} className="text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      {/* Subtle border animation */}
                      <div className="absolute inset-0 rounded-2xl border border-brand-blue/0 group-hover:border-brand-blue/30 transition-colors duration-300"></div>
                    </motion.a>

                    {/* Calendar Contact */}
                    <motion.a
                      href="https://calendly.com/elisa-coagente/30min?month=2025-07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block glass border border-white/10 rounded-2xl p-8 hover-glow transition-all duration-300 overflow-hidden"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative flex items-center space-x-6">
                        <div className="p-4 bg-brand-purple/20 rounded-xl group-hover:bg-brand-purple/30 transition-colors duration-300 group-hover:scale-110">
                          <Calendar size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-body font-medium text-white mb-2 group-hover:text-white transition-colors">
                            Diagnóstico Estratégico
                          </h4>
                          <p className="text-body-small text-white/60 mb-3 group-hover:text-white/80 transition-colors">
                            Sesión gratuita de 30 minutos
                          </p>
                          <p className="text-body-small text-white/80 font-medium group-hover:text-brand-purple transition-colors">
                            Agendar con Elisa
                          </p>
                        </div>
                        <ArrowRight size={18} className="text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      
                      {/* Subtle border animation */}
                      <div className="absolute inset-0 rounded-2xl border border-brand-purple/0 group-hover:border-brand-purple/30 transition-colors duration-300"></div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Essential Trust Indicators */}
                <motion.div variants={itemVariants}>
                  <div className="space-y-6 relative">
                    {/* Section Header with Enhanced Design */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-white/10 flex items-center justify-center">
                        <span className="text-white/80 font-bold text-lg">02</span>
                      </div>
                      <div>
                        <h3 className="text-headline font-light text-white/90">
                          Garantías
                        </h3>
                        <p className="text-body-small text-white/50">
                          Compromiso y certificaciones
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="glass border border-white/10 rounded-xl p-6">
                        <div className="flex items-center space-x-4">
                          <Clock size={20} className="text-brand-blue" />
                          <div>
                            <p className="text-body font-medium text-white">Respuesta 2h</p>
                            <p className="text-body-small text-white/60">Tiempo garantizado</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass border border-white/10 rounded-xl p-6">
                        <div className="flex items-center space-x-4">
                          <Shield size={20} className="text-brand-purple" />
                          <div>
                            <p className="text-body font-medium text-white">ISO 27001</p>
                            <p className="text-body-small text-white/60">Certificación</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Contact Form */}
              <div className="md:col-span-7 relative">
                {/* Subtle background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 rounded-3xl opacity-50 blur-xl"></div>
                
                <motion.div 
                  className="relative glass-strong border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-sm"
                  variants={formVariants}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Enhanced Form Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 border border-white/10 flex items-center justify-center">
                        <span className="text-white/80 font-bold text-lg">03</span>
                      </div>
                      <div>
                        <h3 className="text-headline font-light text-white">
                          Información del Proyecto
                        </h3>
                        <p className="text-body-small text-white/50">
                          Propuesta técnica personalizada
                        </p>
                      </div>
                    </div>
                    <p className="text-body text-white/60 leading-relaxed font-light ml-16">
                      Compártenos los detalles para ofrecerte una{" "}
                      <span className="text-white/90">solución completamente adaptada</span>{" "}
                      a tus necesidades específicas
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-body-small text-white/80 font-medium mb-3">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-blue/50 transition-all duration-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div>
                        <label className="block text-body-small text-white/80 font-medium mb-3">
                          Email corporativo *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-blue/50 transition-all duration-300"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-body-small text-white/80 font-medium mb-3">
                          Empresa *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-blue/50 transition-all duration-300"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>

                      <div>
                        <label className="block text-body-small text-white/80 font-medium mb-3">
                          Área de interés
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-brand-blue/50 transition-all duration-300"
                        >
                          <option value="" className="bg-slate-800">Seleccionar vertical</option>
                          <option value="operations" className="bg-slate-800">Optimización operacional</option>
                          <option value="analytics" className="bg-slate-800">Analytics predictivo</option>
                          <option value="automation" className="bg-slate-800">Automatización</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-body-small text-white/80 font-medium mb-3">
                        Descripción del requerimiento *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-blue/50 transition-all duration-300 resize-none"
                        placeholder="Procesos a optimizar, objetivos de negocio..."
                      />
                    </div>

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                      >
                        <p className="text-red-300 text-sm">{submitError}</p>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-primary text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-3">
                          <span>Solicitar Diagnóstico</span>
                          <ArrowRight size={18} />
                        </div>
                      )}
                    </motion.button>

                    <p className="text-center text-body-small text-white/40 leading-relaxed">
                      Información tratada con confidencialidad ISO 27001
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="border-t border-slate-700/50 pt-12 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              
              {/* Company Section */}
              <motion.div 
                className="lg:col-span-1 space-y-6"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="relative flex items-center justify-center h-[48px] md:h-[56px] w-auto">
                    <Image
                      src="/api/logo"
                      alt="Coagente Logo"
                      width={160}
                      height={56}
                      className="h-full w-auto object-contain filter drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all duration-300"
                      style={{ 
                        maxHeight: '48px'
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Services Section */}
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mr-3" />
                  Servicios
                </h4>
                <nav className="space-y-4">
                  {[
                    { href: "/#services", text: "Capacidades", icon: "⚡" },
                    { href: "/process", text: "Metodología", icon: "🔄" },
                    { href: "/team", text: "Equipo", icon: "👥" },
                    { href: "/faq", text: "FAQ", icon: "❓" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        x: 6,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                    >
                      <Link 
                        href={item.href}
                        className="group relative flex items-center p-3 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-brand-blue/5 hover:to-brand-purple/5 border border-transparent hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            {item.icon}
                          </span>
                          <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300 font-medium">
                            {item.text}
                          </span>
                        </div>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={14} className="text-brand-blue" />
                        </motion.div>
                        
                        {/* Elegant hover line */}
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-500 rounded-full" />
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
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mr-3" />
                  Empresa
                </h4>
                <nav className="space-y-4">
                  {[
                    { href: "/process", text: "Nuestro Proceso", icon: "🚀" },
                    { href: "/faq", text: "Preguntas Frecuentes", icon: "💡" },
                    { href: "/team", text: "Nuestro Equipo", icon: "🏆" },
                    { href: "/privacy", text: "Privacidad", icon: "🔒" },
                    { href: "/terms", text: "Términos", icon: "📋" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        x: 6,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                    >
                      <Link 
                        href={item.href}
                        className="group relative flex items-center p-3 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-brand-purple/5 hover:to-brand-blue/5 border border-transparent hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            {item.icon}
                          </span>
                          <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300 font-medium">
                            {item.text}
                          </span>
                        </div>
                        <motion.div
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={14} className="text-brand-purple" />
                        </motion.div>
                        
                        {/* Elegant hover line */}
                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-purple to-brand-blue group-hover:w-full transition-all duration-500 rounded-full" />
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
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mr-3" />
                  Contacto Rápido
                </h4>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:info@coagente.com"
                    className="group flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-brand-blue/5 hover:to-brand-purple/5 border border-transparent hover:border-white/10 transition-all duration-300"
                    whileHover={{ 
                      x: 4,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="p-2 bg-brand-blue/20 rounded-lg group-hover:bg-brand-blue/30 transition-colors duration-300">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300 font-medium">
                        info@coagente.com
                      </span>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ChevronRight size={14} className="text-brand-blue" />
                    </motion.div>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+528119993390"
                    className="group flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-brand-purple/5 hover:to-brand-blue/5 border border-transparent hover:border-white/10 transition-all duration-300"
                    whileHover={{ 
                      x: 4,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="p-2 bg-brand-purple/20 rounded-lg group-hover:bg-brand-purple/30 transition-colors duration-300">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-300 font-medium">
                        +52 811 999 3390
                      </span>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <ChevronRight size={14} className="text-brand-purple" />
                    </motion.div>
                  </motion.a>
                </div>
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
                  className="btn-icon btn-md group"
                  whileHover={{ scale: 1.05, y: -1 }}
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