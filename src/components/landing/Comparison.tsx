import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const traditional = [
  "Suelen ser más técnicas y difíciles de entender",
  "Te exponen al mercado real desde el inicio",
  "Dan por sentado que ya conocés todo",
];

const iupi = [
  "Simple, humano y sin riesgo",
  "Es escuela + simulador + guía",
  "Te da claridad antes del salto",
];

const Comparison = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Por qué iUpi y no el resto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-background"
          >
            <h3 className="text-lg font-display font-semibold mb-6 text-muted-foreground">
              Las plataformas tradicionales
            </h3>
            <ul className="space-y-4">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="text-coral" size={14} />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* iUpi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5 relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Recomendado
            </div>
            <h3 className="text-lg font-display font-semibold mb-6 text-primary">
              iUpi
            </h3>
            <ul className="space-y-4">
              {iupi.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-accent" size={14} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="cta" size="lg" className="rounded-full px-8" onClick={scrollToWaitlist}>
            Elegí iUpi — Sumate gratis
            <ArrowRight className="ml-1" size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
