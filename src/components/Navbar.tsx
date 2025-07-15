"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sections = ["services", "process", "statistics", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Optimized Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-primary z-[60] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 py-1 md:py-1.5 backdrop-blur-xl bg-slate-900/80 border-b border-white/5 shadow-lg">
        <div className="container-6xl mx-auto px-6">
          <div className="flex justify-between items-center min-h-[48px] md:min-h-[56px]">
            
            {/* Enhanced Logo - Optimized */}
            <div className="flex items-center justify-start flex-shrink-0">
              <Link href="/" className="group block py-1">
                <div className="relative flex items-center justify-center">
                  {/* Logo Image - Maximized and Centered */}
                  <div className="relative flex items-center justify-center h-[48px] md:h-[56px] w-auto group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/api/logo"
                      alt="Coagente Logo"
                      width={180}
                      height={56}
                      className="h-full w-auto object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                      style={{ 
                        maxHeight: '56px'
                      }}
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navigationItems.map((item, index) => (
                <div key={item.href}>
                  <Link 
                    href={item.href} 
                    className="relative group px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-lg"
                  >
                    <span className="relative z-10">{item.text}</span>
                    
                    {/* Active Section Indicator */}
                    {activeSection === item.id && (
                      <motion.div 
                        className="absolute inset-0 glass border border-white/10 rounded-lg"
                        layoutId="activeSection"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    
                    {/* Enhanced Bottom Indicator */}
                    <motion.div 
                      className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-primary rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "50%", x: "-50%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={toggleMenu}
                className="btn-icon btn-md group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
                
                {/* Menu Button Indicator */}
                <div className="absolute inset-0 border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-slate-900/95 border-b border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-6 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{item.text}</span>
                      
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight 
                          size={16} 
                          className="text-white/40 group-hover:text-brand-blue transition-all duration-300" 
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="px-6 py-4 border-t border-white/10">
                <div className="flex items-center justify-center space-x-2 text-xs text-white/50">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full opacity-60" />
                  <span>Coagente AI Solutions</span>
                  <div className="w-2 h-2 bg-gradient-primary rounded-full opacity-60" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
