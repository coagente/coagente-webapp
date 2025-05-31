"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 py-4 glass-strong border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center interactive">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <Image
                src="/logo.avif"
                alt="Coagente Logo"
                width={120}
                height={50}
                className="h-auto hover-glow"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex space-x-8 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { href: "/#services", text: "¿Qué hacemos?" },
            { href: "/#process", text: "¿Cómo lo hacemos?" },
            { href: "/#statistics", text: "Beneficios" },
            { href: "/#contact", text: "Contacto" }
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Link 
                href={item.href} 
                className="text-sm font-medium hover:text-accent transition-colors interactive relative group"
              >
                <span className="relative z-10">{item.text}</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-lg -z-10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10 glass interactive"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 glass-strong border-b border-white/10 py-6 px-6 space-y-4 shadow-elevation-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {[
              { href: "/#services", text: "¿Qué hacemos?" },
              { href: "/#process", text: "¿Cómo lo hacemos?" },
              { href: "/#statistics", text: "Beneficios" },
              { href: "/#contact", text: "Contacto" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-3 text-center font-medium hover:text-accent transition-colors interactive glass rounded-lg px-4 hover-glow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.text}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
