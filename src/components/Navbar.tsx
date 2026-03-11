import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "/cases", isPage: true },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" onClick={() => scrollTo("#home")} className="text-2xl font-display font-bold text-gradient">
          Fly Tech
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("#contato")} size="sm" className="bg-gradient-cyan text-primary-foreground hover:opacity-90">
            Fale Conosco
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border/50 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollTo("#contato")} className="w-full mt-2 bg-gradient-cyan text-primary-foreground">
            Fale Conosco
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
