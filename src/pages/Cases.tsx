import { motion } from "framer-motion";
import { ArrowLeft, Bot, Route, BarChart3, Globe, MessageSquare, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

import logoMinasTaxis from "@/assets/logo-minastaxis.png";
import logoMpAgro from "@/assets/logo-mpagro.png";
import logoTalkToal from "@/assets/logo-talktoal.png";
import logoPrylom from "@/assets/logo-prylom.png";
import logoLuzConceito from "@/assets/logo-luzconceito.png";
import logoDataKnow from "@/assets/logo-dataknow.png";

const cases = [
  {
    company: "Minas Táxi",
    logo: logoMinasTaxis,
    logoBg: "bg-yellow-400",
    icon: Route,
    tagline: "Roteirização Inteligente com IA",
    challenge:
      "A Minas Táxi precisava otimizar suas rotas de transporte, reduzir custos com combustível e integrar os dados diretamente no sistema de controle dos taxistas — tudo de forma automatizada.",
    solution:
      "Desenvolvemos um sistema que lê arquivos de demanda, cria roteirizações via API Mapbox, utiliza IA para calcular consumo de combustível e insere automaticamente os dados no sistema de controle de rotas integrado aos taxistas.",
    highlights: [
      "Leitura e processamento automático de arquivos",
      "Roteirização inteligente via API Mapbox",
      "Análise de IA para cálculo de combustível",
      "Integração via API com sistema de controle de frotas",
    ],
  },
  {
    company: "MP-Agro",
    logo: logoMpAgro,
    logoBg: "bg-white",
    icon: Bot,
    tagline: "Suporte Técnico Automatizado com IA via WhatsApp",
    challenge:
      "O time de suporte técnico da MP-Agro estava sobrecarregado com chamados repetitivos. Os clientes precisavam de respostas rápidas e precisas sobre problemas em máquinas agrícolas.",
    solution:
      "Criamos um sistema de suporte via WhatsApp com IA que utiliza arquivos RAG. O cliente envia o chassi da máquina, a IA identifica o problema, busca nos documentos técnicos e envia PDFs e vídeos explicativos. Após o cliente resolver e enviar foto de confirmação, a IA encaminha ao suporte técnico para validação final.",
    highlights: [
      "Atendimento 100% automatizado via WhatsApp",
      "IA com RAG para busca em documentos técnicos",
      "Envio automático de PDFs e vídeos de resolução",
      "Fluxo completo: identificação → solução → validação",
    ],
  },
  {
    company: "TalkToal",
    logo: logoTalkToal,
    logoBg: "bg-[#0a2540]",
    icon: BarChart3,
    tagline: "Machine Learning para Otimização de Campanhas",
    challenge:
      "A TalkToal precisava otimizar o investimento em campanhas de marketing em tempo real, além de automatizar o atendimento inicial de uma funerária cliente.",
    solution:
      "Desenvolvemos um sistema de Machine Learning que analisa campanhas em tempo real e redistribui automaticamente o orçamento para as mais lucrativas. Também criamos um chatbot humanizado para atendimento de funerária que captura leads, identifica a origem e registra tudo no CRM.",
    highlights: [
      "IA de análise e redistribuição de budget em tempo real",
      "Métricas e relatórios semanais automatizados",
      "Chatbot humanizado com integração CRM",
      "Identificação automática de origem dos leads",
    ],
  },
  {
    company: "Prylom Agronegócio",
    logo: logoPrylom,
    logoBg: "bg-white",
    icon: Globe,
    tagline: "Ecossistema Completo de IA para o Agro",
    challenge:
      "A Prylom precisava de uma plataforma que centralizasse dados agrícolas de múltiplas fontes, permitisse análise de fazendas e acompanhamento financeiro do mercado em tempo real.",
    solution:
      "Desenvolvemos um ecossistema completo com site e IA integrada. O sistema busca dados via APIs de portais agrícolas, realiza cálculos com IA, permite que vendedores analisem fazendas e publiquem ofertas. Inclui área financeira com monitoramento em tempo real de preços de gado, soja e combustível por região.",
    highlights: [
      "Dados em tempo real via APIs agrícolas",
      "Análise de fazendas com cálculos de IA",
      "Publicação e gestão de fazendas",
      "Painel financeiro: gado, soja, gasolina por região",
    ],
  },
  {
    company: "Luz Conceito Imobiliária",
    logo: logoLuzConceito,
    logoBg: "bg-[#1a2e1a]",
    icon: MessageSquare,
    tagline: "Ecossistema de IA para Atendimento Imobiliário",
    challenge:
      "A Luz Conceito precisava automatizar o atendimento inicial, qualificar leads, agendar visitas e dar controle total ao gestor sobre as conversas — sem perder o toque humano.",
    solution:
      "Criamos um fluxo de conversação com IA treinada para entender o perfil do cliente, sugerir imóveis compatíveis e registrar tudo em um CRM dedicado. O dono pode intervir a qualquer momento, bloquear a IA e analisar métricas como orçamento médio, ticket médio, valor em negociação e visitas agendadas automaticamente no Google Calendar dos corretores.",
    highlights: [
      "IA treinada para matching cliente-imóvel",
      "CRM dedicado com controle total do gestor",
      "Agendamento automático no Google Calendar",
      "Métricas: orçamento, ticket médio, visitas agendadas",
    ],
  },
  {
    company: "DataKnow",
    logo: logoDataKnow,
    logoBg: "bg-white",
    icon: Wallet,
    tagline: "SaaS de Gestão Financeira via WhatsApp com IA",
    challenge:
      "O mercado financeiro precisava de uma ferramenta que eliminasse a fricção de planilhas e apps complexos, permitindo gestão financeira por mensagens de texto, áudio e fotos.",
    solution:
      "Desenvolvemos um SaaS que roda diretamente no WhatsApp. O usuário envia texto, áudio, foto de nota fiscal ou PDF — a IA interpreta, extrai valores, classifica categorias e salva no banco automaticamente. O sistema envia lembretes proativos de contas a pagar/receber, oferece painel web com gráficos e permite gestão compartilhada entre sócios ou casais via números separados.",
    highlights: [
      "Input via texto, áudio, foto e PDF no WhatsApp",
      "IA para extração e classificação automática",
      "Lembretes proativos de contas a pagar/receber",
      "Painel web com gráficos e gestão compartilhada",
    ],
  },
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="text-2xl font-display font-bold text-gradient">
            Fly Tech
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Cases de <span className="text-gradient">Sucesso</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Conheça em detalhes os projetos que desenvolvemos — os desafios, as soluções e o impacto real
            que a tecnologia e a inteligência artificial geraram para cada cliente.
          </motion.p>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="container mx-auto px-4 space-y-20">
          {cases.map((c, i) => {
            const Icon = c.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.article
                key={c.company}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors duration-500">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                    {/* Visual side */}
                    <div className="relative flex items-center justify-center p-12 lg:p-16 bg-gradient-to-br from-primary/5 to-transparent lg:[direction:ltr]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />
                      <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl ${c.logoBg} p-4 flex items-center justify-center shadow-xl`}>
                          <img
                            src={c.logo}
                            alt={`Logo ${c.company}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h2 className="text-2xl md:text-3xl font-display font-bold">{c.company}</h2>
                          <div className="flex items-center justify-center gap-2 mt-2 text-primary">
                            <Icon size={18} />
                            <span className="text-sm font-medium">{c.tagline}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center lg:[direction:ltr]">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                            O Desafio
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{c.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                            A Solução
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                            Destaques
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {c.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass rounded-2xl p-12 text-center border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Quer ser o próximo <span className="text-gradient">case de sucesso</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Fale com nosso time e descubra como a Fly Tech pode transformar seu negócio com tecnologia e inteligência artificial.
            </p>
            <Link
              to="/#contato"
              className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-gradient-cyan text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Fale com um Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
