import { CreditCard, ShoppingBag, Brain, Megaphone } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Crédito Fácil Demais",
    description: "Cartões de crédito, empréstimos instantâneos e parcelamentos sem fim. A facilidade de acesso ao crédito nos faz perder a noção do quanto realmente devemos.",
    example: "\"Achei que conseguia pagar, eram só 12 parcelas...\"",
  },
  {
    icon: ShoppingBag,
    title: "Pressão para Consumir",
    description: "Promoções relâmpago, influenciadores vendendo estilo de vida, e a sensação de que precisamos ter mais para sermos felizes ou aceitos.",
    example: "\"Todo mundo tem, eu também mereço ter.\"",
  },
  {
    icon: Brain,
    title: "Impacto na Saúde Mental",
    description: "Ansiedade, noites sem dormir, vergonha de atender o telefone. O peso das dívidas afeta muito mais que o bolso — afeta quem somos.",
    example: "\"A preocupação não me deixa dormir em paz.\"",
  },
  {
    icon: Megaphone,
    title: "Falta de Educação Financeira",
    description: "Ninguém nos ensinou a lidar com dinheiro. Marketing agressivo de um lado, falta de informação do outro. O resultado? Decisões que custam caro.",
    example: "\"Nunca aprendi a fazer um orçamento.\"",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Entendendo o problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Por que tantas pessoas estão endividadas?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O endividamento não é sinal de fraqueza ou irresponsabilidade. 
            É o resultado de um sistema que facilita o crédito, mas dificulta a educação financeira.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 card-elevated border border-border/50 hover:border-primary/30"
            >
              <div className="icon-container mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {problem.description}
              </p>
              
              <p className="empathy-quote text-sm">
                {problem.example}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Se você se identificou com alguma dessas situações, saiba:{" "}
            <strong className="text-primary">você não está sozinho.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
