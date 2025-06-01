"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp,
  Shield,
  Award,
  Users,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Main Footer Content */}
      <motion.div 
        className="container-6xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
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

            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Desarrollamos soluciones de inteligencia artificial personalizadas para empresas que buscan transformar sus procesos y maximizar su productividad.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-500"
                whileHover={{ scale: 1.05 }}
              >
                <Shield size={16} className="text-green-400" />
                <span>Seguro & Confiable</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-xs text-gray-500"
                whileHover={{ scale: 1.05 }}
              >
                <Award size={16} className="text-blue-400" />
                <span>Certificado</span>
              </motion.div>
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
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" />
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
                { href: "/#statistics", text: "Casos de Éxito" },
                { href: "/#contact", text: "Equipo" },
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
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight size={14} className="mr-2 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact & CTA Section */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-sm text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@coagente.com" className="hover:text-white transition-colors">
                  info@coagente.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3 text-sm text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <div>
                  <p>Frida Kahlo 303, Valle Oriente</p>
                  <p>San Pedro Garza García, México</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div 
              className="pt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/#contact">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Comenzar Proyecto</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 mt-12 border-t border-slate-800/50"
          variants={containerVariants}
        >
          {[
            { number: "50+", label: "Proyectos Completados", icon: Award },
            { number: "98%", label: "Satisfacción Cliente", icon: Users },
            { number: "24/7", label: "Soporte Técnico", icon: Shield },
            { number: "3+", label: "Años Experiencia", icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-slate-700/50 transition-colors">
                  <stat.icon size={24} className="text-blue-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
        <div className="container-6xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <motion.div 
              className="text-sm text-gray-500"
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
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Términos de Servicio
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </Link>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
