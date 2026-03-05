import { motion } from "framer-motion";
import { BarChart3, BookOpen, Shield, TrendingUp, Landmark, DollarSign } from "lucide-react";

const instruments = [
  { icon: TrendingUp, label: "Acciones" },
  { icon: Landmark, label: "CEDEARs" },
  { icon: BarChart3, label: "Bonos" },
  { icon: BookOpen, label: "Letras" },
  { icon: Shield, label: "Obligaciones Negociables" },
  { icon: DollarSign, label: "MEP" },
];

const Solution = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">La solución iUpi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Practicá primero.{" "}
              <span className="text-gradient-primary">Invertí después.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con nuestro simulador podés experimentar con estos instrumentos sin riesgo real.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12">
            {instruments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={20} />
                </div>
                <span className="text-sm font-medium text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground text-lg">
              Como un juego, pero con <span className="font-semibold text-foreground">impacto real</span> en tu futuro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
