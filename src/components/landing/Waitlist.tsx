import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — waitlist logic
    console.log("Waitlist signup:", email);
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            🚀 ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Sé uno de los primeros en probar el simulador de inversiones de iUpi.
            Dejanos tu email y te avisamos cuando esté disponible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-5 rounded-full border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <Button type="submit" variant="cta" size="lg" className="rounded-full h-12 px-6">
              Sumarme
              <ArrowRight className="ml-1" size={18} />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground max-w-sm mx-auto">
            Tus datos están seguros. Solo te escribiremos con novedades importantes del lanzamiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
