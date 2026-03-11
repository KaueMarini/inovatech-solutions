import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Zap size={14} />
            Soluções com Inteligência Artificial
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Automatize o{" "}
            <span className="text-gradient">Futuro</span>
            <br />
            do Seu Negócio
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transformamos processos complexos em soluções inteligentes.
            Automação, IA, Machine Learning e desenvolvimento de software
            sob medida para a sua empresa crescer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-cyan text-primary-foreground hover:opacity-90 text-base px-8 shadow-cyan"
              onClick={() => scrollTo("#contato")}
            >
              Fale com um Especialista
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-border/50 hover:border-primary/50"
              onClick={() => scrollTo("#servicos")}
            >
              Conheça nossas soluções
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
