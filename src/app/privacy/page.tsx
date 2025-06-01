import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container-6xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-6xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-xl">
                <Shield size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Privacidad
            </h1>
            <p className="text-xl text-white/70">
              En Coagente, protegemos tu privacidad y datos personales con los más altos estándares de seguridad.
            </p>
            <p className="text-sm text-white/50 mt-4">
              Última actualización: Diciembre 2024
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Lock size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Información que Recopilamos</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Completas nuestro formulario de contacto</li>
                  <li>Te suscribes a nuestros servicios</li>
                  <li>Participas en consultas o demostraciones</li>
                  <li>Nos contactas por email o teléfono</li>
                </ul>
                <p>
                  Esta información puede incluir: nombre, email corporativo, empresa, teléfono, 
                  y detalles sobre tu proyecto de AI.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Eye size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Cómo Usamos tu Información</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder a tus consultas y proporcionar información sobre nuestros servicios</li>
                  <li>Desarrollar propuestas técnicas personalizadas</li>
                  <li>Programar consultas y demostraciones</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales y contractuales</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Database size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Protección de Datos</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Implementamos medidas de seguridad robustas para proteger tu información:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cifrado de extremo a extremo para todas las comunicaciones</li>
                  <li>Servidores seguros con certificaciones SOC 2 Type II</li>
                  <li>Acceso restringido solo a personal autorizado</li>
                  <li>Auditorías de seguridad regulares</li>
                  <li>Cumplimiento con GDPR y regulaciones locales</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Tus Derechos</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acceder a la información personal que tenemos sobre ti</li>
                  <li>Solicitar correcciones o actualizaciones de tu información</li>
                  <li>Solicitar la eliminación de tus datos personales</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Recibir una copia de tus datos en formato portable</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contáctanos en{" "}
                  <a href="mailto:privacy@coagente.com" className="text-blue-400 hover:text-blue-300">
                    privacy@coagente.com
                  </a>
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Compartir Información</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>No vendemos, alquilamos o compartimos tu información personal</strong> con terceros 
                  para fines comerciales. Solo compartimos información cuando:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Es necesario para proporcionar nuestros servicios</li>
                  <li>Tenemos tu consentimiento explícito</li>
                  <li>Es requerido por ley o autoridades competentes</li>
                  <li>Es necesario para proteger nuestros derechos legales</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Cookies y Tecnologías Similares</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mejorar la funcionalidad de nuestro sitio web</li>
                  <li>Analizar el uso y rendimiento del sitio</li>
                  <li>Personalizar tu experiencia</li>
                  <li>Recordar tus preferencias</li>
                </ul>
                <p>
                  Puedes controlar las cookies a través de la configuración de tu navegador.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contacto</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                  tu información personal, contáctanos:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:privacy@coagente.com" className="text-blue-400 hover:text-blue-300">privacy@coagente.com</a></p>
                  <p><strong>Teléfono:</strong> <a href="tel:+528112345678" className="text-blue-400 hover:text-blue-300">+52 81 1234 5678</a></p>
                  <p><strong>Dirección:</strong> Frida Kahlo 303, Valle Oriente, San Pedro Garza García, México</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Volver al Inicio</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 