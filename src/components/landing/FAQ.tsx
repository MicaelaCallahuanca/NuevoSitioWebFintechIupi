import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito saber de finanzas?",
    answer: "No, para nada. iUpi está diseñada para principiantes. Explicamos todos los conceptos financieros de manera simple y accesible, sin tecnicismos ni jerga complicada. Nuestro objetivo es que aprendas desde cero y te sientas cómodo con el mundo de las inversiones.",
  },
  {
    question: "¿Puedo perder plata?",
    answer: "Con el simulador de iUpi, invertís sin riesgo. Podés experimentar, probar estrategias y ver los resultados de tus decisiones sin usar dinero real. El propósito es que ganes confianza y conocimiento antes de considerar cualquier inversión con dinero propio.",
  },
  {
    question: "¿Es difícil de usar?",
    answer: "¡Todo lo contrario! iUpi se creó con la simplicidad en mente. Nuestra interfaz es intuitiva y te guía paso a paso. Queremos que la experiencia de aprendizaje e inversión sea fácil, humana y libre de complicaciones, muy diferente a las plataformas tradicionales.",
  },
  {
    question: "¿Tengo que invertir después sí o sí?",
    answer: "De ninguna manera. La decisión de invertir dinero real es completamente tuya y la tomás solo cuando te sientas 100% preparado y seguro. iUpi es una herramienta para que aprendas y practiques; cuándo y si pasás al mundo real, es tu elección.",
  },
  {
    question: "¿Cuánto tiempo necesito al día?",
    answer: "iUpi se adapta a tu ritmo. Podés dedicarle unos pocos minutos al día para aprender un nuevo concepto o hacer una simulación, o sumergirte más si tenés más tiempo. Lo importante es la consistencia y no la cantidad, para que el aprendizaje sea progresivo y sin apuros.",
  },
  {
    question: "¿iUpi es gratis?",
    answer: "Ofrecemos un acceso anticipado con un monto mensual simbólico, menos de lo que cuesta un café. Este costo mínimo nos permite seguir mejorando la plataforma y ofrecerte la mejor experiencia. Además, tenés total libertad: podés cancelar cuando quieras, sin contratos ni ataduras.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground">Todo lo que necesitás saber</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-background data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
