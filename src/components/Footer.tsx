import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-bold text-foreground">VidaFinanceira</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#problema" className="hover:text-primary transition-colors">O Problema</a>
            <a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a>
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 VidaFinanceira. Feito com cuidado para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
