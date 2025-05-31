"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Image
              src="/logo.avif"
              alt="Coagente Logo"
              width={60}
              height={40}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <Link href="/#services" className="text-sm hover:text-accent transition-colors text-center">
              ¿Qué hacemos?
            </Link>
            <Link href="/#process" className="text-sm hover:text-accent transition-colors text-center">
              ¿Cómo lo hacemos?
            </Link>
            <Link href="/#statistics" className="text-sm hover:text-accent transition-colors text-center">
              Beneficios
            </Link>
            <Link href="/#contact" className="text-sm hover:text-accent transition-colors text-center">
              Contacto
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-slate-800 text-sm text-gray-500">
          © {new Date().getFullYear()} Coagente. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
