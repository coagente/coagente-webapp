"use client";

import { motion } from "./motion-shim";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Clock, Users, Award, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSources = [
    "/part_1.mp4",
    "/part_2.mp4", 
    "/part_3.mp4",
    "/part_4.mp4",
    "/part_5.mp4"
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [videoSources.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload video with new source
      video.play().catch(console.error);
    }
  }, [currentVideo]);
  const trustIndicators = [
    { icon: Clock, text: "$4.6M MXN", subtext: "Ahorro promedio anual" },
    { icon: Users, text: "47%", subtext: "Reducción SG&A" },
    { icon: Award, text: "ISO 27001", subtext: "Certificación de seguridad" }
  ];

  const benefits = [
    "Implementación en 30-90 días",
    "ROI documentado promedio 3.2x", 
    "Integración con sistemas existentes",
    "Sin disruption operacional"
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
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src={videoSources[currentVideo]} type="video/mp4" />
      </video>

      {/* Enhanced overlay for better contrast - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/30 to-slate-800/40 z-5" />
      
      {/* Additional overlay for extra contrast - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-primary/5 z-6" />

      <div className="container-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


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
                    Inteligencia Artificial
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    para empresas{" "}
                    <span className="gradient-text-hero" data-text="con potencial">
                      con potencial
                    </span>
                  </motion.span>
                </h1>

                <motion.p 
                  className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg"
                  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  Reducimos costos operativos 40-60% mediante automatización inteligente 
                  de procesos críticos de negocio.
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
                    className="text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  >
                    <span className="text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button - Single, Professional */}
              <motion.div 
                className="flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Link href="/#contact">
                    <button className="btn-secondary btn-md group">
                      <span>Solicitar diagnóstico</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
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
                    className="glass border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 backdrop-blur-md shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, y: -1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary/30 rounded-lg shadow-lg">
                        <indicator.icon size={24} className="text-brand-blue drop-shadow-sm" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white drop-shadow-sm">{indicator.text}</div>
                        <div className="text-sm text-white/80 drop-shadow-sm">{indicator.subtext}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}


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

              </div>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
