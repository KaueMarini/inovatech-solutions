import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Erro",
        description: parsed.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    });
    setLoading(false);

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conte-nos sobre o seu projeto. Nossa equipe responde em até 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="glass rounded-xl p-8 text-center flex flex-col items-center gap-4">
                <CheckCircle size={48} className="text-primary" />
                <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">
                  Obrigado pelo contato. Retornaremos em breve!
                </p>
                <Button variant="outline" onClick={() => setSent(false)} className="mt-4">
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Conte-nos sobre o seu projeto..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                    maxLength={2000}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-cyan text-primary-foreground hover:opacity-90 shadow-cyan"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={16} />
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:contato@flyautomacao.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@flyautomacao.com.br
                </a>
              </div>
            </div>
            <div className="glass rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefone / WhatsApp</h3>
                <p className="text-muted-foreground">(31) 99999-9999</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
