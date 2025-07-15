"use client";

import { motion } from "./motion-shim";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Clock, Users, Award, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Clock, text: "30 días", subtext: "Implementación garantizada" },
    { icon: Users, text: "98%", subtext: "Satisfacción del cliente" },
    { icon: Award, text: "50+", subtext: "Proyectos completados" }
  ];

  const benefits = [
    "✓ Implementación: 30 días",
    "✓ ROI positivo: 6 meses", 
    "✓ Soporte 24/7",
    "✓ Consulta gratuita"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative pt-16 md:pt-20 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Neo-Minimalist: Clean background overlay */}
      <div className="absolute inset-0 bg-gradient-primary/20 z-5" />

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div 
            className="text-center mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Shield size={16} className="text-brand-blue" />
              <span className="text-sm font-medium text-white/90">
                Consultora AI Certificada
              </span>
              <Sparkles size={14} className="text-brand-purple" />
            </motion.div>
          </motion.div>

          {/* Main Content Grid - Optimized */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 text-center lg:text-left">
              
              {/* Main Headline */}
              <motion.div 
                className="space-y-6 mb-8"
                variants={itemVariants}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <motion.span 
                    className="block text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Transformamos tu empresa
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    con{" "}
                    <span className="gradient-text">
                      Inteligencia Artificial
                    </span>
                  </motion.span>
                </h1>

                <motion.p 
                  className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Automatizamos procesos empresariales con IA. 
                  Resultados medibles en 30 días.
                </motion.p>
              </motion.div>

              {/* Benefits List - Improved layout */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3 text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  >
                    <span className="text-success text-lg font-semibold">✓</span>
                    <span className="text-sm font-medium">{benefit.slice(2)}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons - Optimized */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/#contact">
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-glow transition-all duration-300 min-w-[200px]">
                      <span>Comenzar Proyecto</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/#services">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 glass border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm min-w-[200px]">
                      Ver Servicios
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Trust Indicators - Improved */}
            <div className="lg:col-span-4">
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    className="glass border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary/20 rounded-lg">
                        <indicator.icon size={24} className="text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{indicator.text}</div>
                        <div className="text-sm text-white/60">{indicator.subtext}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Process Preview - Simplified */}
                <motion.div
                  className="bg-gradient-primary/10 glass border border-white/10 rounded-xl p-6"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Nuestro Proceso</h4>
                  <div className="space-y-3">
                    {[
                      { step: "1", text: "Análisis", status: "completed" },
                      { step: "2", text: "Desarrollo", status: "active" },
                      { step: "3", text: "Implementación", status: "pending" }
                    ].map((item, index) => (
                      <div key={item.step} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          item.status === 'completed' ? 'bg-success/20 text-success' :
                          item.status === 'active' ? 'bg-brand-blue/20 text-brand-blue' :
                          'bg-white/10 text-white/40'
                        }`}>
                          {item.step}
                        </div>
                        <span className={`text-sm ${
                          item.status === 'completed' ? 'text-white' :
                          item.status === 'active' ? 'text-white' :
                          'text-white/40'
                        }`}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section - Optimized */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
          >
            {/* Value Proposition - Optimized */}
            <motion.div 
              className="max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="space-y-6">
                {/* Main Statement */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  <span className="block mb-3">
                    Somos <span className="gradient-text">coagente</span>.
                  </span>
                  <span className="block text-white/90 text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
                    <span className="text-success font-bold">30 días</span> para transformar tu empresa con 
                    <span className="text-brand-blue font-bold">IA personalizada</span>.
                  </span>
                </h2>

                {/* Value Highlights - Improved Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <motion.div 
                    className="glass border border-white/10 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">30 días</div>
                    <div className="text-white/70 text-sm">Implementación garantizada</div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass border border-white/10 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">ROI 6m</div>
                    <div className="text-white/70 text-sm">Retorno garantizado</div>
                  </motion.div>
                  
                  <motion.div 
                    className="glass border border-white/10 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-white/70 text-sm">Soporte especializado</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/#contact">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-glow transition-all duration-300">
                    <span>Consulta Gratuita</span>
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
