"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
          <div className="text-xl text-gray-300 max-w-2xl mx-auto">
            <p className="mb-2">Nos adelantamos y contestamos las preguntas más comunes de nuestros servicios</p>
            <p>Nos adelantamos y contestamos algunas de las preguntas que pudieras tener</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Es Coagente la solución adecuada?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                Coagente es ideal para empresas que buscan mejorar su productividad a través de soluciones de IA personalizadas.
                Evaluamos tus necesidades específicas y determinamos si nuestras soluciones pueden generar un impacto significativo
                en tu negocio antes de iniciar cualquier proyecto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Qué tan seguras son las soluciones de Coagente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                La seguridad es nuestra prioridad. Implementamos medidas robustas de protección de datos,
                cumplimos con regulaciones de privacidad y mantenemos estándares de seguridad de nivel empresarial
                en todas nuestras soluciones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Qué nivel de personalización ofrecen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                Cada solución es completamente personalizada. Adaptamos nuestras tecnologías a tus procesos específicos,
                integrándolas con tus sistemas existentes y atendiendo a los requisitos únicos de tu negocio y equipo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Cuánto tiempo toma implementar un agente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                El tiempo de implementación varía según la complejidad del proyecto. Proyectos simples pueden estar
                listos en semanas, mientras que soluciones más complejas pueden tomar algunos meses.
                Trabajamos con plazos claros y te mantenemos informado durante todo el proceso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Qué experiencia tiene Coagente en mi industria?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                Hemos trabajado con clientes en diversos sectores incluyendo finanzas, salud, retail,
                manufactura y servicios. Nuestro equipo se adapta rápidamente a las particularidades de
                cada industria, aprendiendo sus desafíos específicos y mejores prácticas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-700 rounded-lg bg-black/30">
              <AccordionTrigger className="hover:text-accent font-medium py-6 px-6 text-lg">
                ¿Cómo miden el éxito y ROI de las soluciones?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 px-6 text-base leading-relaxed">
                Definimos métricas claras de éxito desde el inicio del proyecto: eficiencia operativa,
                reducción de costos, mejora en la satisfacción del cliente, entre otras. Implementamos
                sistemas de seguimiento para medir continuamente estos KPIs y calcular el ROI de cada solución.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
