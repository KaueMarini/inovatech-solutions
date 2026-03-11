import { motion } from "framer-motion";
import { Crosshair, Diamond, Compass } from "lucide-react";

const values = [
  {
    icon: Crosshair,
    title: "Visão Estratégica",
    text: "Enxergamos além da tecnologia. Cada projeto é uma peça no tabuleiro de crescimento do seu negócio.",
  },
  {
    icon: Diamond,
    title: "Excelência Arquitetural",
    text: "Projetamos sistemas que não apenas funcionam, mas que sustentam o crescimento sem colapsar sob pressão.",
  },
  {
    icon: Compass,
    title: "Foco Absoluto no Resultado",
    text: "Medimos sucesso pelo impacto no caixa dos nossos clientes, não por linhas de código entregues.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Não entregamos código.{" "}
              <span className="text-gradient">Entregamos motores de crescimento.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Fly Tech nasceu para desenhar o futuro das operações
              corporativas. Somos arquitetos de soluções digitais que
              transformam complexidade operacional em fluidez, eficiência e
              escala. Cada projeto que assumimos é tratado como uma
              infraestrutura de longo prazo, não como um entregável descartável.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              De ecossistemas completos a plataformas sob medida, construímos
              ativos tecnológicos que operam como engrenagens silenciosas e
              precisas, gerando retorno mensurável enquanto sua equipe foca
              no que realmente importa: crescer.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-xl p-6 flex gap-4 items-start hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                  <v.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
