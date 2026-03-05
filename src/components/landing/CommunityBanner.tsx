import { motion } from "framer-motion";
import { Users } from "lucide-react";

const CommunityBanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            La confianza de nuestra comunidad
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a cientos de personas que ya están tomando el control de sus finanzas.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 mb-10">
            <Users className="text-primary" size={24} />
            <span className="text-2xl sm:text-3xl font-display font-bold text-primary">+450</span>
            <span className="text-muted-foreground font-medium">personas ya se sumaron a la lista</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { label: "Comunidad activa", emoji: "👥" },
              { label: "Soporte mutuo", emoji: "🤝" },
              { label: "Crecimiento conjunto", emoji: "📈" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-background"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityBanner;
