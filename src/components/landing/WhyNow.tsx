import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Coffee, Unlock } from "lucide-react";

const perks = [
  { icon: Unlock, title: "Acceso anticipado", desc: "Sé de los primeros en experimentar" },
  { icon: Coffee, title: "Monto mensual simbólico", desc: "Menos de lo que vale un café" },
  { icon: Clock, title: "Cancelás cuando querés", desc: "Total libertad, sin contratos ni ataduras" },
];

const WhyNow = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Por qué empezar hoy y no después
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Cada mes que demorás significa oportunidades perdidas de crecimiento
            y la continuidad de la incertidumbre financiera.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hoy podés aprender sin poner plata real y vencer el miedo a equivocarte.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
            🟢 Probar ahora, es seguro y 100% sin riesgo.
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-border bg-background"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <perk.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold mb-1">{perk.title}</h3>
              <p className="text-sm text-muted-foreground">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="coral" size="lg" className="rounded-full px-10 text-base h-13" onClick={scrollToWaitlist}>
            Quiero empezar ahora
            <ArrowRight className="ml-1" size={18} />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            100% gratis, sin tarjetas ni dinero real
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNow;
