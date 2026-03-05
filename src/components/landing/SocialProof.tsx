import { motion } from "framer-motion";
import { Quote, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "2,500+", label: "Usuarios en lista de espera" },
  { icon: TrendingUp, value: "100%", label: "Sin riesgo real" },
  { icon: Award, value: "#1", label: "Simulador educativo" },
];

const testimonials = [
  {
    quote: "Por fin alguien me explicó las inversiones de forma simple. Ya no le tengo miedo.",
    name: "María G.",
    role: "Docente",
  },
  {
    quote: "Probé el simulador y en una semana ya entendía cómo funcionan las acciones.",
    name: "Lucas R.",
    role: "Freelancer",
  },
  {
    quote: "Lo que me gusta es que no me presionan a invertir. Primero aprendo, después decido.",
    name: "Carolina P.",
    role: "Emprendedora",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={24} />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Lo que dicen nuestros usuarios
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-background"
            >
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
