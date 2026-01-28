import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-accent-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-accent-foreground text-sm font-medium">
              Você não está sozinho nessa jornada
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Dívidas não definem{" "}
            <span className="relative">
              quem você é
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 8" stroke="hsl(28 90% 55%)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
            Milhões de brasileiros enfrentam dificuldades financeiras todos os dias. 
            Estamos aqui para ajudar você a <strong>retomar o controle</strong>, sem julgamentos, 
            com passos simples e acolhimento.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="lg" className="group">
              Organizar minhas finanças
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cta-outline" size="lg">
              Entender minha situação
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="animate-fade-up-delay-3 mt-8 text-primary-foreground/70 text-sm">
            ✓ Orientação gratuita &nbsp;&nbsp; ✓ Sem burocracia &nbsp;&nbsp; ✓ 100% confidencial
          </p>
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full pointer-events-none opacity-20">
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-40 w-48 h-48 bg-primary-foreground/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "-2s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
