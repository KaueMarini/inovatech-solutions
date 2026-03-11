import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    text: "Usamos as tecnologias mais avançadas do mercado para criar soluções que realmente fazem a diferença.",
  },
  {
    icon: Target,
    title: "Resultado",
    text: "Cada projeto é pensado para gerar impacto real. Medimos sucesso pelos resultados dos nossos clientes.",
  },
  {
    icon: Users,
    title: "Parceria",
    text: "Não somos apenas fornecedores. Somos parceiros estratégicos no crescimento do seu negócio.",
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
              Nascemos da Experiência.{" "}
              <span className="text-gradient">Vivemos a Inovação.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Fly Tech nasceu da paixão por transformar negócios através da tecnologia.
              Com expertise em Inteligência Artificial, Machine Learning, automação de
              processos e desenvolvimento de software, ajudamos empresas de todos os
              portes a eliminar trabalho manual, otimizar operações e tomar decisões
              baseadas em dados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde softwares sob medida até soluções completas com IA para análise de
              dados, criação de sites, automação e muito mais — estamos prontos para
              transformar o seu negócio.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((v, i) => (
              <div key={v.title} className="glass rounded-xl p-6 flex gap-4 items-start hover:border-primary/30 transition-all">
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
