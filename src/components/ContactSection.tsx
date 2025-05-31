"use client";

import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Contáctanos
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-black/40 rounded-lg p-8 border border-slate-700">
              <div className="space-y-4 text-lg text-gray-300">
                <div>
                  <span className="block font-medium text-white mb-2">Oficina:</span>
                  Frida Kahlo 303, Valle Oriente.
                </div>
                <div>
                  San Pedro Garza García, México
                </div>
                
                <div className="pt-4">
                  <Link
                    href="mailto:info@coagente.com"
                    className="text-xl font-medium text-white hover:text-accent transition-colors"
                  >
                    info@coagente.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
