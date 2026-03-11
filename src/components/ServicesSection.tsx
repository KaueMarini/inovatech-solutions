import { motion } from "framer-motion";
import { MessageSquare, Workflow, Layers, LineChart } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Sistemas Autônomos de Relacionamento",
    subtitle: "Atendimento que nunca para",
    description:
      "Projetamos estruturas de comunicação que operam de forma autônoma e inteligente, criando experiências de relacionamento contínuas com seus clientes, sem depender de intervenção humana.",
  },
  {
    icon: Workflow,
    title: "Orquestração Operacional",
    subtitle: "Fluidez em cada processo",
    description:
      "Mapeamos e redesenhamos os fluxos internos da sua empresa, eliminando gargalos manuais e construindo uma operação com fluidez, previsibilidade e zero desperdício.",
  },
  {
    icon: Layers,
    title: "Plataformas & Ecossistemas Web",
    subtitle: "Ativos digitais sob medida",
    description:
      "Desenvolvemos plataformas de alta performance, sistemas sob medida e ecossistemas web completos. Do MVP ao sistema enterprise, cada linha de código é um ativo estratégico.",
  },
  {
    icon: LineChart,
    title: "Arquitetura de Dados & Inteligência",
    subtitle: "Decisões baseadas em evidências",
    description:
      "Transformamos dados brutos em inteligência de negócios acionável. Dashboards estratégicos, modelos preditivos e análises que orientam decisões com precisão cirúrgica.",
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
            Engrenagens Digitais para{" "}
            <span className="text-gradient">Resultados Reais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada solução é desenhada como uma peça estratégica do seu
            ecossistema. Nenhum esforço genérico. Apenas arquitetura com propósito.
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
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-xs text-primary font-medium uppercase tracking-wider mb-3">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
