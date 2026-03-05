import { motion } from "framer-motion";
import { AlertTriangle, HelpCircle, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Miedo a perder plata",
    description: "Lo desconocido genera ansiedad. Es normal sentir que invertir no es para vos.",
  },
  {
    icon: HelpCircle,
    title: "Nadie te explica claro",
    description: "Las plataformas dan por sentado que ya sabés todo. Pero nadie te enseñó.",
  },
  {
    icon: ShieldOff,
    title: "Te exponen al riesgo real",
    description: "Desde el primer día te ponen frente al mercado real, sin red de seguridad.",
  },
];

const Problem = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-coral uppercase tracking-wider">El problema</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Si nunca invertiste, no es tu culpa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            El cerebro busca seguridad, por eso todo lo nuevo se siente amenazante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                <problem.icon className="text-coral" size={24} />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
