import { AlertCircle, Ban, TrendingDown, HeartCrack } from "lucide-react";

const consequences = [
  {
    icon: Ban,
    title: "Nome Negativado",
    description: "Restrição de crédito que impede novos financiamentos, cartões e até alugar um imóvel.",
  },
  {
    icon: TrendingDown,
    title: "Dificuldade de Planejar",
    description: "Sem conseguir prever o futuro, fica impossível fazer planos como trocar de carro ou fazer uma viagem.",
  },
  {
    icon: HeartCrack,
    title: "Impacto Emocional",
    description: "Estresse, ansiedade, brigas em família. As dívidas afetam relacionamentos e qualidade de vida.",
  },
  {
    icon: AlertCircle,
    title: "Sensação de Impotência",
    description: "A bola de neve só cresce, os juros consomem tudo, e parece que não há saída.",
  },
];

const ConsequencesSection = () => {
  return (
    <section id="consequencias" className="py-20 md:py-28 section-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            O peso das dívidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            As consequências vão além do dinheiro
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quando as dívidas se acumulam, elas afetam cada aspecto da nossa vida. 
            Reconhecer isso é o primeiro passo para mudar.
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {consequences.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-destructive/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-destructive/80" />
              </div>
              
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 px-6 py-4 rounded-xl">
            <p className="text-lg font-medium text-primary">
              Mas existe um caminho. E ele começa agora. ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
