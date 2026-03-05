import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", { name, country, email, level });
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            🚀 ¿Listo para dar el primer paso?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Sé uno de los primeros en probar el simulador de inversiones de iUpi.
            Dejanos tus datos y te avisamos cuando esté disponible.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl border border-accent/30 bg-accent/5"
            >
              <span className="text-4xl mb-4 block">🎉</span>
              <h3 className="text-xl font-display font-bold mb-2">¡Te sumaste!</h3>
              <p className="text-muted-foreground">
                Te enviaremos un mail con los pasos para activar el acceso cuando lancemos la beta.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1.5">Tu nombre</label>
                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Tu país</label>
                <input
                  type="text"
                  placeholder="Ej: Argentina"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Seleccioná tu nivel</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none"
                >
                  <option value="" disabled>Seleccioná tu nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full rounded-xl h-13 text-base mt-2">
                Sumarme ahora
                <ArrowRight className="ml-1" size={18} />
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-6 max-w-sm mx-auto leading-relaxed">
            El acceso a la beta educativa es mensual y simbólico (menos de lo que vale un café).
            Podés cancelar cuando quieras. Te enviaremos un mail con los pasos para activar el acceso.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            🔒 Tus datos están seguros. Solo te escribiremos con novedades importantes del lanzamiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
