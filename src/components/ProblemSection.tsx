import { CreditCard, ShoppingBag, Brain, Megaphone, Dice1, Users, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Crédito Fácil Demais",
    description: "Cartões de crédito, empréstimos instantâneos e parcelamentos sem fim. A facilidade de acesso ao crédito nos faz perder a noção do quanto realmente devemos.",
    example: "\"Achei que conseguia pagar, eram só 12 parcelas...\"",
  },
  {
    icon: ShoppingBag,
    title: "Consumo Excessivo",
    description: "Promoções relâmpago, influenciadores vendendo estilo de vida, e a sensação de que precisamos ter mais para sermos felizes ou aceitos.",
    example: "\"Todo mundo tem, eu também mereço ter.\"",
  },
  {
    icon: Brain,
    title: "Saúde Mental Fragilizada",
    description: "Ansiedade, depressão, noites sem dormir. O estresse financeiro afeta a mente, e a mente fragilizada toma decisões impulsivas. É um ciclo difícil de quebrar.",
    example: "\"Comprava para aliviar a tristeza, mas piorava tudo.\"",
  },
  {
    icon: Megaphone,
    title: "Marketing Agressivo",
    description: "Propagandas que prometem facilidade, bancos que oferecem crédito sem parar. Marketing bem feito, educação financeira quase nenhuma.",
    example: "\"Parecia tão fácil, era só assinar.\"",
  },
  {
    icon: Dice1,
    title: "Apostas e Vícios",
    description: "A popularização das apostas online (bets) criou uma nova armadilha. O que começa como diversão pode virar um buraco sem fundo.",
    example: "\"Ia ganhar de volta o que perdi, mas só afundei mais.\"",
  },
  {
    icon: Users,
    title: "Vulnerabilidade Social",
    description: "Baixa renda, desemprego, falta de suporte familiar. Quem já está em situação difícil tem menos margem para erros financeiros.",
    example: "\"Não tinha reserva, qualquer imprevisto quebrava tudo.\"",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            As Raízes do Problema
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Knowledge gap callout */}
        <div className="mt-12 p-6 md:p-8 bg-secondary/50 rounded-2xl border border-border/50">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-1">A raiz de tudo: Falta de Conhecimento</h4>
              <p className="text-muted-foreground">
                Ninguém nos ensina a lidar com dinheiro na escola. Crescemos sem saber fazer orçamento, 
                sem entender juros compostos, sem distinguir necessidade de desejo. 
                <strong className="text-primary"> Mas nunca é tarde para aprender.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Empathy note */}
        <div className="mt-8 text-center">
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
