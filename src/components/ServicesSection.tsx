import { motion } from "framer-motion";
import { Bot, Cog, Code2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automação com IA",
    description:
      "Chatbots inteligentes, assistentes virtuais e automação de processos com inteligência artificial. Elimine trabalho manual e aumente a produtividade.",
  },
  {
    icon: Cog,
    title: "Otimização de Processos",
    description:
      "RPA e automação de fluxos operacionais. Reduza erros, ganhe velocidade e libere sua equipe para tarefas estratégicas.",
  },
  {
    icon: Code2,
    title: "Software & Sites",
    description:
      "Desenvolvimento de sistemas web, aplicativos e sites sob medida. Do MVP ao sistema enterprise, com as melhores tecnologias do mercado.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados & ML",
    description:
      "Machine Learning, dashboards inteligentes e análise preditiva. Transforme dados brutos em decisões estratégicas para o seu negócio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Soluções <span className="text-gradient">Inteligentes</span> para Desafios Reais
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos tecnologia de ponta com expertise de mercado para entregar resultados mensuráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-cyan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
