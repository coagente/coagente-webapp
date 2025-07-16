"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingTo, setIsScrollingTo] = useState(false);
  const [currentSectionName, setCurrentSectionName] = useState("Inicio");
  const navRef = useRef<HTMLElement>(null);
  
  // Mouse tracking for ambient effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Track scroll progress and active section with enhanced logic
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Enhanced section detection with better boundaries
      const sections = [
        { id: "services", name: "Servicios" },
        { id: "process", name: "Proceso" }, 
        { id: "statistics", name: "Resultados" },
        { id: "contact", name: "Contacto" }
      ];
      
      let currentSection = { id: "", name: "Inicio" };
      
      // Check if we're at the very top
      if (scrolled < 100) {
        currentSection = { id: "", name: "Inicio" };
      } else {
        // Find the section that's most visible in viewport
        sections.forEach(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            
            // Section is active if its center is in the upper half of viewport
            if (elementCenter >= 0 && elementCenter <= viewportHeight * 0.6) {
              currentSection = section;
            }
          }
        });
      }
      
      setActiveSection(currentSection.id);
      setCurrentSectionName(currentSection.name);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Intelligent smooth scroll with easing
  const handleSmoothScroll = (href: string) => {
    const target = href.replace("/#", "");
    const element = document.getElementById(target);
    
    if (element) {
      setIsScrollingTo(true);
      
      // Custom easing smooth scroll
      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop - 80; // Account for navbar height
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) / 2, 1200); // Adaptive duration
      
      let start: number | null = null;
      
      const animation = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        
        // Custom easing function (ease-out-quart)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        window.scrollTo(0, startPosition + distance * easeOutQuart);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          setIsScrollingTo(false);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { href: "/#services", text: "Servicios", id: "services" },
    { href: "/#process", text: "Proceso", id: "process" },
    { href: "/#statistics", text: "Resultados", id: "statistics" },
    { href: "/#contact", text: "Contacto", id: "contact" }
  ];

  return (
    <>
      {/* Enhanced Multi-Layer Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1">
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-800/10 to-slate-900/20" />
        
        {/* Progress indicator */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-primary origin-left shadow-lg shadow-brand-blue/20"
          style={{ scaleX: scrollProgress / 100 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Active section pulse */}
        {isScrollingTo && (
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue/40 to-brand-purple/40 origin-left"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </div>

      <motion.nav 
        ref={navRef}
        className="fixed top-1 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/20 border border-white/10 shadow-lg mx-2 rounded-2xl overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Glass effect base layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 backdrop-blur-xl" />
        
        {/* Ambient lighting effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-brand-blue/8 via-brand-purple/4 to-transparent rounded-full blur-3xl pointer-events-none"
          style={{ 
            x: springX, 
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
        
        {/* Subtle glassmorphism layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-white/5 to-white/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/4 via-transparent to-white/2" />
        
        <div className="container-6xl mx-auto px-6 relative">
          <div className="flex justify-between items-center min-h-[56px] md:min-h-[64px]">
            
            {/* Enhanced Logo with Context */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Link href="/" className="group block py-2">
                <motion.div 
                  className="relative flex items-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative flex items-center justify-center h-[40px] md:h-[48px] w-auto">
                    <Image
                      src="/api/logo"
                      alt="Coagente Logo"
                      width={160}
                      height={48}
                      className="h-full w-auto object-contain filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                      style={{ maxHeight: '48px' }}
                      priority
                    />
                  </div>
                  
                  {/* Dynamic breadcrumb */}
                  <motion.div 
                    className="hidden md:flex items-center space-x-2 text-white/60"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-1 h-1 bg-brand-blue/60 rounded-full" />
                    <motion.span 
                      className="text-sm font-light tracking-wide"
                      key={currentSectionName}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {currentSectionName}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              {navigationItems.map((item, index) => (
                <motion.div 
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleSmoothScroll(item.href)}
                    className="relative group px-5 py-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10"
                  >
                    <span className="relative z-10 group-hover:drop-shadow-sm tracking-wide">
                      {item.text}
                    </span>
                    
                    {/* Enhanced Active Section Indicator */}
                    {activeSection === item.id && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-brand-blue/15 via-brand-purple/15 to-brand-blue/15 rounded-xl border border-white/30 backdrop-blur-sm"
                        layoutId="activeSection"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    )}
                    
                    {/* Premium Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/8 via-brand-purple/12 to-brand-blue/8 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-transparent group-hover:border-white/20 backdrop-blur-sm" />
                    
                    {/* Enhanced Bottom Indicator */}
                    <motion.div 
                      className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-primary rounded-full shadow-sm shadow-brand-blue/30"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "70%", x: "-50%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Ambient glow on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-transparent blur-md -z-10" />
                    
                    {/* Loading state for scroll */}
                    {isScrollingTo && activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-xl"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMenu}
                className="relative p-3 rounded-xl bg-white/8 border border-white/20 group hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
                </motion.div>
                
                {/* Enhanced button glow */}
                <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg shadow-brand-blue/10" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 backdrop-blur-xl bg-slate-900/25 border border-white/15 rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Mobile menu glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/12 to-white/6 backdrop-blur-xl" />
              
              <div className="px-6 py-6 space-y-2 relative">
                {navigationItems.map((item, index) => (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  >
                    <button
                      onClick={() => {
                        handleSmoothScroll(item.href);
                        setIsMenuOpen(false);
                      }}
                      className="group w-full flex items-center justify-between py-4 px-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl border border-transparent hover:border-white/10"
                    >
                      <span className="font-medium group-hover:drop-shadow-sm tracking-wide">
                        {item.text}
                      </span>
                      
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight 
                          size={16} 
                          className="text-white/50 group-hover:text-brand-blue transition-all duration-300 drop-shadow-sm" 
                        />
                      </motion.div>
                      
                      {/* Mobile item ambient effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-transparent blur-sm -z-10" />
                    </button>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Mobile Menu Footer */}
              <motion.div 
                className="px-6 py-4 border-t border-white/15 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-center space-x-3 text-xs text-white/60">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-light tracking-wider">Coagente AI Solutions</span>
                  <motion.div 
                    className="w-2 h-2 bg-gradient-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
