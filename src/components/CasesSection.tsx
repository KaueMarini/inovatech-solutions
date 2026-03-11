import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    company: "TalkToal",
    description: "Plataforma de comunicação inteligente com IA para atendimento ao cliente, integrando múltiplos canais e automatizando respostas com processamento de linguagem natural.",
    testimonial: "A Fly Tech transformou completamente nosso atendimento. O sistema com IA reduziu o tempo de resposta em 70% e aumentou a satisfação dos nossos clientes.",
    author: "Carlos Mendes",
    role: "CEO, TalkToal",
    rating: 5,
  },
  {
    company: "Minas Taxis",
    description: "Sistema completo de gerenciamento de frotas e despacho de corridas, com rastreamento em tempo real, algoritmo de otimização de rotas e painel administrativo.",
    testimonial: "O sistema da Fly Tech revolucionou nossa operação. A otimização de rotas nos fez economizar 30% em combustível e melhorou drasticamente a experiência dos passageiros.",
    author: "Roberto Silva",
    role: "Diretor de Operações, Minas Taxis",
    rating: 5,
  },
  {
    company: "Prylom Agronegócio",
    description: "Plataforma de gestão agrícola com análise preditiva de safras usando Machine Learning, monitoramento de condições climáticas e controle de insumos.",
    testimonial: "Com a análise preditiva da Fly Tech, conseguimos antecipar problemas nas safras e aumentar nossa produtividade em 25%. Um investimento que se pagou em meses.",
    author: "Marcos Oliveira",
    role: "Gerente de Produção, Prylom",
    rating: 5,
  },
  {
    company: "Luz Conceito Imobiliária",
    description: "Site institucional e sistema de gestão de imóveis com busca inteligente, tour virtual, integração com portais e CRM automatizado para corretores.",
    testimonial: "O site e o CRM que a Fly Tech desenvolveu triplicaram nossos leads qualificados. A busca inteligente é o que mais impressiona nossos clientes.",
    author: "Fernanda Luz",
    role: "Diretora, Luz Conceito",
    rating: 5,
  },
  {
    company: "Jaque Joias",
    description: "E-commerce premium com catálogo virtual interativo, sistema de personalização de peças e integração com pagamento e logística.",
    testimonial: "A Fly Tech entendeu perfeitamente a essência da nossa marca. O e-commerce é lindo, rápido e as vendas online cresceram 200% no primeiro ano.",
    author: "Jaqueline Santos",
    role: "Fundadora, Jaque Joias",
    rating: 5,
  },
  {
    company: "MP-Agro",
    description: "Sistema de gestão integrada para o agronegócio, incluindo controle financeiro, gestão de estoque, rastreabilidade de produtos e relatórios com BI.",
    testimonial: "Antes era tudo manual e demorado. Com o sistema da Fly Tech, temos controle total da operação em tempo real. Mudou o patamar da nossa gestão.",
    author: "Paulo Martins",
    role: "Sócio-Diretor, MP-Agro",
    rating: 5,
  },
  {
    company: "DataKnow",
    description: "Plataforma de Business Intelligence e Data Analytics com dashboards customizáveis, integração de múltiplas fontes de dados e alertas automáticos.",
    testimonial: "A parceria com a Fly Tech nos permitiu entregar uma plataforma robusta e escalável. A qualidade técnica da equipe é excepcional.",
    author: "André Lima",
    role: "CTO, DataKnow",
    rating: 5,
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cases de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que confiaram na Fly Tech e colheram resultados extraordinários.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.company}
              className="glass rounded-xl p-6 flex flex-col hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gradient">{item.company}</h3>
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

              <div className="mt-auto pt-4 border-t border-border/50">
                <Quote size={18} className="text-primary/40 mb-2" />
                <p className="text-sm italic text-foreground/80 mb-3">"{item.testimonial}"</p>
                <div>
                  <p className="text-sm font-semibold">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors"
          >
            Ver todos os cases em detalhes
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesSection;
