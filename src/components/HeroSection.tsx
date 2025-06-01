"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  TrendingUp,
  ChevronDown,
  Sparkles,
  Shield
} from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const trustIndicators = [
    { icon: Users, text: "50+ Empresas", subtext: "Confían en nosotros" },
    { icon: Award, text: "98% Éxito", subtext: "Tasa de implementación" },
    { icon: TrendingUp, text: "3x ROI", subtext: "Promedio de retorno" }
  ];

  const benefits = [
    "Implementación en 30 días",
    "Soporte 24/7 especializado", 
    "ROI garantizado en 6 meses"
  ];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
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
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Shield size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-white/90">
                Consultora AI Certificada
              </span>
              <Sparkles size={14} className="text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
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
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                  Desarrollamos soluciones de AI personalizadas que automatizan procesos, 
                  optimizan operaciones y generan resultados medibles para tu negocio.
                </motion.p>
              </motion.div>

              {/* Benefits List */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center space-x-2 text-white/80"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                    >
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="/#contact">
                    <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 min-w-[200px]">
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
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white/90 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm min-w-[200px]">
                      Ver Servicios
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="text-center lg:text-left"
                variants={itemVariants}
              >
                <p className="text-sm text-white/50 mb-4">
                  Empresas líderes confían en nuestras soluciones
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                  {/* Placeholder for company logos */}
                  <div className="h-8 w-20 bg-white/10 rounded"></div>
                  <div className="h-8 w-20 bg-white/10 rounded"></div>
                  <div className="h-8 w-20 bg-white/10 rounded"></div>
                  <div className="h-8 w-20 bg-white/10 rounded"></div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Trust Indicators */}
            <div className="lg:col-span-4">
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <indicator.icon size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{indicator.text}</div>
                        <div className="text-sm text-white/60">{indicator.subtext}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Process Preview */}
                <motion.div
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6"
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
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
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

          {/* Bottom Section */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
          >
            {/* Value Proposition */}
            <motion.div 
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 leading-tight">
                <span className="block mb-2">Somos coagente.</span>
                <span className="text-white/80">
                  Desarrollamos soluciones de AI para compañías que buscan 
                  <span className="text-blue-400"> resultados extraordinarios</span>.
                </span>
              </h2>
            </motion.div>

            {/* Final CTA */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              <Link href="/#contact">
                <motion.button 
                  className="group inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white/90 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Descubre tu potencial con AI</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex flex-col items-center space-y-2 text-white/40 hover:text-white/60 transition-colors cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <span className="text-sm font-medium">Explorar servicios</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center group-hover:border-white/40 transition-colors"
                >
                  <ChevronDown size={16} className="mt-2" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
