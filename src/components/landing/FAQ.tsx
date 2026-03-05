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
    answer: "No. iUpi está diseñado para que cualquier persona pueda aprender desde cero, sin conocimientos previos.",
  },
  {
    question: "¿Puedo perder plata?",
    answer: "No. El simulador usa dinero virtual. No hay riesgo real hasta que vos decidas dar ese paso.",
  },
  {
    question: "¿Es difícil de usar?",
    answer: "Para nada. Todo está pensado para que sea simple, visual e intuitivo.",
  },
  {
    question: "¿Tengo que invertir después sí o sí?",
    answer: "No. iUpi es una herramienta educativa. Vos decidís cuándo y si querés invertir con dinero real.",
  },
  {
    question: "¿Cuánto tiempo necesito al día?",
    answer: "Con 10–15 minutos al día podés avanzar a tu ritmo. No hay presión.",
  },
  {
    question: "¿iUpi es gratis?",
    answer: "El acceso a la beta educativa es mensual y simbólico, menos de lo que vale un café. Podés cancelar cuando quieras.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4">
            Preguntas frecuentes
          </h2>
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
