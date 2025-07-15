import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart, Shield, Info } from "lucide-react";

export default function CookiesPage() {
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
                <Cookie size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de Cookies
            </h1>
            <p className="text-xl text-white/70">
              Información sobre cómo utilizamos cookies y tecnologías similares en nuestro sitio web.
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
                <Info size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">¿Qué son las Cookies?</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                  visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia y proporcionar 
                  funcionalidades esenciales.
                </p>
                <p>
                  Utilizamos cookies para recordar tus preferencias, analizar el uso del sitio y 
                  personalizar tu experiencia de navegación.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Settings size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Tipos de Cookies que Utilizamos</h2>
              </div>
              <div className="space-y-6 text-white/80">
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Cookies Esenciales</h3>
                  <p className="mb-3">
                    Estas cookies son necesarias para el funcionamiento básico del sitio web:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mantener tu sesión activa</li>
                    <li>Recordar configuraciones de seguridad</li>
                    <li>Habilitar funcionalidades del formulario de contacto</li>
                  </ul>
                  <p className="text-sm text-white/60 mt-3">
                    <strong>Duración:</strong> Sesión o hasta 1 año
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Cookies de Rendimiento</h3>
                  <p className="mb-3">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Páginas más visitadas</li>
                    <li>Tiempo de permanencia en el sitio</li>
                    <li>Rutas de navegación</li>
                    <li>Errores encontrados</li>
                  </ul>
                  <p className="text-sm text-white/60 mt-3">
                    <strong>Duración:</strong> Hasta 2 años
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Cookies de Funcionalidad</h3>
                  <p className="mb-3">
                    Mejoran tu experiencia recordando tus preferencias:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Idioma preferido</li>
                    <li>Configuraciones de visualización</li>
                    <li>Información de formularios previamente completados</li>
                  </ul>
                  <p className="text-sm text-white/60 mt-3">
                    <strong>Duración:</strong> Hasta 1 año
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Herramientas de Análisis</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Utilizamos herramientas de análisis para mejorar nuestro sitio web:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                  <p className="mb-3">
                    Nos ayuda a entender el comportamiento de los visitantes y mejorar nuestro contenido.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Estadísticas de visitantes anónimas</li>
                    <li>Análisis de rendimiento del sitio</li>
                    <li>Identificación de contenido popular</li>
                  </ul>
                  <p className="text-sm text-white/60 mt-3">
                    Los datos se procesan de forma anónima y agregada.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Shield size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Control de Cookies</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Tienes control total sobre las cookies en tu navegador:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-3">Configuración del Navegador</h3>
                    <p className="mb-3">
                      Puedes controlar las cookies a través de la configuración de tu navegador:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                      <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
                      <li><strong>Safari:</strong> Preferencias → Privacidad</li>
                      <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                    <h3 className="text-lg font-semibold text-white mb-3">Opciones Disponibles</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Bloquear todas las cookies</li>
                      <li>Permitir solo cookies esenciales</li>
                      <li>Eliminar cookies existentes</li>
                      <li>Configurar notificaciones para nuevas cookies</li>
                    </ul>
                    <p className="text-sm text-yellow-400 mt-3">
                      <strong>Nota:</strong> Bloquear cookies puede afectar la funcionalidad del sitio.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Cookies de Terceros</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Algunos servicios de terceros pueden establecer cookies en nuestro sitio:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                    <h4 className="font-semibold text-white">Google Analytics</h4>
                    <p className="text-sm">Para análisis de tráfico web</p>
                    <a href="https://policies.google.com/privacy" className="text-blue-400 hover:text-blue-300 text-sm">
                      Ver política de privacidad de Google
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                    <h4 className="font-semibold text-white">Calendly</h4>
                    <p className="text-sm">Para programación de reuniones</p>
                    <a href="https://calendly.com/privacy" className="text-blue-400 hover:text-blue-300 text-sm">
                      Ver política de privacidad de Calendly
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Actualizaciones de esta Política</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Podemos actualizar esta política de cookies ocasionalmente para reflejar 
                  cambios en nuestras prácticas o por razones legales.
                </p>
                <p>
                  Te notificaremos sobre cambios significativos a través de nuestro sitio web 
                  o por email si tienes una cuenta con nosotros.
                </p>
                <p>
                  Te recomendamos revisar esta página periódicamente para mantenerte informado 
                  sobre nuestro uso de cookies.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-primary/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contacto</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Si tienes preguntas sobre nuestra política de cookies, contáctanos:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:info@coagente.com" className="text-blue-400 hover:text-blue-300">info@coagente.com</a></p>
                  <p><strong>Email General:</strong> <a href="mailto:info@coagente.com" className="text-blue-400 hover:text-blue-300">info@coagente.com</a></p>
                  <p><strong>Teléfono:</strong> <a href="tel:+528119993390" className="text-blue-400 hover:text-blue-300">+52 811 999 3390</a></p>
                  <p><strong>Dirección:</strong> Frida Kahlo 303, Valle Oriente, San Pedro Garza García, México</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link 
              href="/"
                              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
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