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
    { href: "/#statistics", text: "Beneficios", id: "statistics" },
    { href: "/#contact", text: "Contacto", id: "contact" }
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-[60] origin-left"
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
                  <div className="relative flex items-center justify-center h-[36px] md:h-[44px] w-auto group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/api/logo"
                      alt="Coagente Logo"
                      width={140}
                      height={44}
                      className="h-full w-auto object-contain rounded-lg shadow-lg md:max-h-[44px]"
                      style={{ 
                        maxHeight: '36px'
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
                      <div className="absolute inset-0 bg-white/8 rounded-lg border border-white/10" />
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    
                    {/* Subtle Bottom Indicator */}
                    <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-6 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 group"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                
                {/* Menu Button Indicator */}
                <div className="absolute inset-0 border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-slate-900/95 border-b border-white/10 shadow-2xl">
              <div className="px-6 py-6 space-y-1">
                {navigationItems.map((item, index) => (
                <div key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                    <span className="font-medium">{item.text}</span>
                      
                      <ChevronRight 
                        size={16} 
                        className="text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </Link>
                </div>
                ))}
              </div>
          </div>
          )}
      </nav>
    </>
  );
};

export default Navbar;
