import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Beta disponible pronto
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6"
          >
            Aprendé a invertir{" "}
            <span className="text-gradient-primary">sin miedo.</span>
            <br />
            <span className="text-gradient-coral">Probá sin perder,</span>{" "}
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">Crecé sin apuros</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Una app que te enseña a ahorrar e invertir sin riesgo, sin tecnicismos
            y sin sensación de "esto no es para mí".
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="cta" size="lg" className="rounded-full text-base px-8 h-13" onClick={scrollToWaitlist}>
              Quiero empezar ahora
              <ArrowRight className="ml-1" size={18} />
            </Button>
            <Button variant="cta-outline" size="lg" className="rounded-full text-base px-8 h-13" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
              ¿Cómo funciona?
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Tu futuro financiero empieza cuando dejás de tener miedo.
          </motion.p>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium"
          >
            🟢 100% gratis, sin tarjetas ni dinero real
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
