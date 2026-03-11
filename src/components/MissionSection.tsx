import { motion } from "framer-motion";
import { Rocket, Eye, Shield } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    label: "Missão",
    text: "Transformar a complexidade operacional das empresas em fluidez e escalabilidade por meio de ecossistemas digitais sob medida.",
  },
  {
    icon: Eye,
    label: "Visão",
    text: "Ser a principal referência na construção de ecossistemas inteligentes para empresas que desejam liderar seus mercados.",
  },
  {
    icon: Shield,
    label: "Valores",
    text: "",
    values: [
      {
        name: "Pragmatismo Radical",
        desc: "Tecnologia existe para resolver, não para impressionar.",
      },
      {
        name: "Excelência Arquitetural",
        desc: "Cada sistema é projetado para sustentar crescimento, não apenas funcionar.",
      },
      {
        name: "Foco Absoluto no Resultado",
        desc: "O único KPI que importa é o impacto no negócio do cliente.",
      },
      {
        name: "Parceria Estratégica",
        desc: "Não somos fornecedores. Somos co-construtores do seu próximo patamar.",
      },
    ],
  },
];

const MissionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.04),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Identidade{" "}
            <span className="text-gradient">Corporativa</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O que nos move, para onde olhamos e o que jamais negociamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className="glass rounded-xl p-8 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-5">
                <p.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{p.label}</h3>
              {p.text && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.text}
                </p>
              )}
              {p.values && (
                <ul className="space-y-3">
                  {p.values.map((v) => (
                    <li key={v.name}>
                      <span className="font-semibold text-foreground text-sm">
                        {v.name}
                      </span>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {v.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
