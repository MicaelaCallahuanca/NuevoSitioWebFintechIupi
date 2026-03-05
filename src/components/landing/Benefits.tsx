import { motion } from "framer-motion";
import { Star, Target, PiggyBank, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Aprender sin miedo",
    description: "Empezás desde cero, sin presiones.",
  },
  {
    icon: Target,
    title: "Tomar mejores decisiones",
    description: "Ves qué pasaría antes de hacerlo.",
  },
  {
    icon: PiggyBank,
    title: "Ahorro más inteligente",
    description: "Entendés cómo hacer que tu plata rinda más.",
  },
  {
    icon: ShieldCheck,
    title: "Tranquilidad real",
    description: "Entrás al mundo financiero con seguridad, no con ansiedad.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Lo que ganás</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Beneficios claros y en pocas palabras
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
