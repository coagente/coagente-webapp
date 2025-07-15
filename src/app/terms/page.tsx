import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Users } from "lucide-react";

export default function TermsPage() {
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
                <Scale size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Términos de Servicio
            </h1>
            <p className="text-xl text-white/70">
              Estos términos rigen el uso de nuestros servicios de inteligencia artificial y consultoría.
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
                <FileText size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Aceptación de Términos</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Al acceder y utilizar los servicios de Coagente, aceptas estar sujeto a estos 
                  términos de servicio y todas las leyes y regulaciones aplicables.
                </p>
                <p>
                  Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Users size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Descripción de Servicios</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Coagente.com es una empresa líder en consultoría e implementación de inteligencia artificial empresarial, que proporciona:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Desarrollo e implementación de agentes de IA personalizados para automatización empresarial</li>
                  <li>Consultoría estratégica en transformación digital con IA</li>
                  <li>Análisis predictivo y procesamiento de datos con machine learning</li>
                  <li>Integración de sistemas empresariales existentes con tecnologías de IA</li>
                  <li>Capacitación y soporte técnico especializado 24/7</li>
                  <li>Desarrollo de chatbots inteligentes y asistentes virtuales</li>
                  <li>Optimización de procesos mediante automatización inteligente (RPA + IA)</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Todos nuestros servicios incluyen garantía de ROI positivo en 6 meses y cumplimiento con estándares internacionales de seguridad.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle size={24} className="text-blue-400" />
                <h2 className="text-2xl font-bold">Responsabilidades del Cliente</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Como cliente, te comprometes a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proporcionar información precisa y completa</li>
                  <li>Colaborar activamente en el proceso de implementación</li>
                  <li>Cumplir con los plazos acordados para revisiones y feedback</li>
                  <li>Mantener la confidencialidad de información sensible compartida</li>
                  <li>Utilizar los servicios de manera legal y ética</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Propiedad Intelectual</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>Soluciones Personalizadas:</strong> Las soluciones de AI desarrolladas específicamente 
                  para tu empresa son de tu propiedad una vez completado el pago.
                </p>
                <p>
                  <strong>Metodologías y Frameworks:</strong> Nuestras metodologías, frameworks y herramientas 
                  propietarias permanecen como propiedad intelectual de Coagente.
                </p>
                <p>
                  <strong>Datos del Cliente:</strong> Mantienes la propiedad completa de todos tus datos. 
                  No utilizamos datos del cliente para entrenar modelos para otros clientes.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Garantías y Compromisos de Calidad</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>Garantías de Rendimiento:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ROI positivo garantizado en 6 meses o continuamos trabajando sin costo adicional</li>
                  <li>Reducción mínima del 30% en costos operativos en áreas automatizadas</li>
                  <li>Tiempo de implementación no mayor a 90 días para proyectos estándar</li>
                  <li>Disponibilidad del sistema del 99.9% (SLA garantizado)</li>
                  <li>Soporte técnico con tiempo de respuesta máximo de 4 horas</li>
                </ul>
                <p className="mt-4">
                  <strong>Estándares de Seguridad y Compliance:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cumplimiento con estándares SOC 2 Type II</li>
                  <li>Certificación ISO 27001 en seguridad de la información</li>
                  <li>Cumplimiento con GDPR y Ley Federal de Protección de Datos Personales de México</li>
                  <li>Encriptación end-to-end de todos los datos del cliente</li>
                </ul>
                <p className="mt-4">
                  <strong>Limitaciones de Responsabilidad:</strong> Nuestra responsabilidad total se limita al valor total del contrato firmado. 
                  No asumimos responsabilidad por daños indirectos, pérdida de beneficios esperados, o interrupciones del negocio no relacionadas directamente con nuestros servicios.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Confidencialidad</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Ambas partes se comprometen a mantener la confidencialidad de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Información comercial sensible</li>
                  <li>Datos técnicos y metodologías</li>
                  <li>Estrategias empresariales</li>
                  <li>Cualquier información marcada como confidencial</li>
                </ul>
                <p>
                  Esta obligación permanece vigente durante 5 años después de la terminación del contrato.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Términos Comerciales y Facturación</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <strong>Estructura de Pagos:</strong> Los proyectos se facturan según hitos específicos acordados, típicamente: 30% al inicio, 40% en entrega de prototipo, 30% en implementación completa.
                </p>
                <p>
                  <strong>Métodos de Pago Aceptados:</strong> Transferencias bancarias (preferido), cheques corporativos, pagos ACH, y tarjetas corporativas para montos menores a $10,000 USD.
                </p>
                <p>
                  <strong>Política de Pagos Atrasados:</strong> Los pagos vencidos generan un interés del 2% mensual. Después de 45 días de atraso, podemos suspender servicios hasta regularizar la situación.
                </p>
                <p>
                  <strong>Moneda y Facturación:</strong> Todos los precios se expresan en USD o MXN según el contrato. La facturación se realiza mensualmente por servicios recurrentes.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle size={24} className="text-yellow-400" />
                <h2 className="text-2xl font-bold">Terminación</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Cualquiera de las partes puede terminar el contrato con 30 días de aviso por escrito.
                </p>
                <p>
                  <strong>Terminación Inmediata:</strong> Podemos terminar inmediatamente en caso de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Incumplimiento material de estos términos</li>
                  <li>Falta de pago después de 30 días de vencimiento</li>
                  <li>Uso indebido o ilegal de nuestros servicios</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Ley Aplicable</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta 
                  en los tribunales competentes de Monterrey, Nuevo León.
                </p>
                <p>
                  Preferimos resolver disputas a través de mediación antes de proceder a litigio.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-primary/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Contacto Legal</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Para preguntas sobre estos términos de servicio o asuntos legales, contáctanos:
                </p>
                <div className="space-y-2">
                  <p><strong>Email Legal:</strong> <a href="mailto:info@coagente.com" className="text-blue-400 hover:text-blue-300">info@coagente.com</a></p>
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