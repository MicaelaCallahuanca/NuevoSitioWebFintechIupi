import { motion } from "framer-motion";
import { BookOpen, LineChart, Eye, Rocket } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Aprendés lo esencial",
    description: "Conceptos explicados como si te hablara un amigo.",
  },
  {
    icon: LineChart,
    step: "02",
    title: "Probás en el simulador",
    description: "Invertís sin riesgo y experimentás libremente.",
  },
  {
    icon: Eye,
    step: "03",
    title: "Ves el impacto",
    description: "Resultados claros y escenarios reales.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Das el salto cuando te sentís listo",
    description: "Cuando entendés, recién ahí pasás al mundo real.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cómo funciona</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Simple y visual
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center p-8"
            >
              <div className="w-14 h-14 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                <step.icon className="text-primary-foreground" size={24} />
              </div>
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-primary/10">
                {step.step}
              </span>
              <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
