import { motion } from "framer-motion";
import { BarChart3, BookOpen, Shield, TrendingUp, Landmark, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const instruments = [
  { icon: TrendingUp, label: "Acciones", desc: "Invertí en el futuro de las empresas" },
  { icon: Landmark, label: "CEDEARs", desc: "Invertí en gigantes globales desde Argentina" },
  { icon: BarChart3, label: "Bonos", desc: "Estabilidad para tu cartera" },
  { icon: BookOpen, label: "Letras", desc: "Inversiones seguras a corto plazo" },
  { icon: Shield, label: "Obligaciones Negociables", desc: "Invertí en el crecimiento de empresas" },
  { icon: DollarSign, label: "Dólar MEP", desc: "Accedé a dólares legalmente y sin límites" },
];

const Solution = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

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
              Con iUpi podés invertir en los principales instrumentos de inversión sin riesgo real.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {instruments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={20} />
                </div>
                <span className="text-sm font-semibold text-center">{item.label}</span>
                <span className="text-xs text-muted-foreground text-center leading-relaxed">{item.desc}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-muted-foreground text-lg">
              Como un juego, pero con <span className="font-semibold text-foreground">impacto real</span> en tu futuro.
            </p>
            <Button variant="cta" size="lg" className="rounded-full px-8" onClick={scrollToWaitlist}>
              Quiero probarlo gratis
              <ArrowRight className="ml-1" size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
