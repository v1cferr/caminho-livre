import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            A mudança começa com{" "}
            <span className="text-gradient">um pequeno passo</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Você já deu o primeiro: buscar informação. Agora é hora de agir. 
            Não importa o tamanho da dívida — todo problema tem solução quando 
            enfrentado com planejamento e paciência.
          </p>

          {/* Motivational quote */}
          <blockquote className="mb-10 px-6 py-4 bg-secondary/50 rounded-xl inline-block">
            <p className="text-lg italic text-secondary-foreground">
              "Não é sobre quanto você ganha, é sobre como você organiza."
            </p>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Começar minha reorganização
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Reassurance */}
          <p className="mt-8 text-sm text-muted-foreground">
            Orientação gratuita, sem compromisso. Seus dados estão protegidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
