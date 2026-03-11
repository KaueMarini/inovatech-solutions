const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-display font-bold text-gradient">Fly Tech</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fly Tech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#cases" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cases</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
