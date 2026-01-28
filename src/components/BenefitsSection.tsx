import { Smile, Target, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Mais Tranquilidade",
    description: "Durma melhor sabendo que suas finanças estão sob controle. Menos preocupação, mais paz de espírito.",
  },
  {
    icon: Target,
    title: "Planeje seu Futuro",
    description: "Volte a sonhar. Seja uma viagem, a casa própria ou a aposentadoria — ter clareza financeira abre portas.",
  },
  {
    icon: Sparkles,
    title: "Autonomia Financeira",
    description: "Tome decisões com confiança. Você no comando, sem depender de empréstimos ou cartões.",
  },
  {
    icon: Heart,
    title: "Qualidade de Vida",
    description: "Relacionamentos melhores, saúde mental fortalecida, e a liberdade de viver sem o peso das dívidas.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28 hero-gradient text-primary-foreground">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Vale a pena o esforço
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Imagine sua vida sem o peso das dívidas
          </h2>
          <p className="text-lg text-primary-foreground/85 leading-relaxed">
            A jornada pode ser desafiadora, mas os benefícios de retomar o controle 
            financeiro transformam cada área da sua vida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/20 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
