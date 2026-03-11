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
        name: "Visão Estratégica",
        desc: "Enxergamos além da tecnologia para impulsionar o crescimento real do seu negócio.",
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
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Nossa{" "}
            <span className="text-gradient">Identidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Os pilares que sustentam cada decisão, cada entrega e cada relação que construímos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className="glass rounded-2xl p-10 hover:border-primary/30 transition-all duration-300 hover:shadow-cyan relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-cyan rounded-b-full" />
              <div className="w-14 h-14 rounded-xl bg-gradient-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <p.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{p.label}</h3>
              {p.text && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.text}
                </p>
              )}
              {p.values && (
                <ul className="space-y-4">
                  {p.values.map((v) => (
                    <li key={v.name} className="border-l-2 border-primary/20 pl-4">
                      <span className="font-semibold text-foreground text-sm block">
                        {v.name}
                      </span>
                      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
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
