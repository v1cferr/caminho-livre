import { Button } from "@/components/ui/button";
import { FileCheck, RefreshCw, MessageCircle, Pyramid, Calculator, ArrowRight, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: FileCheck,
    title: "Negocie suas Dívidas",
    description: "Programas como o Serasa Limpa Nome oferecem descontos de até 90% para quitação de dívidas. É um alívio real e imediato.",
    benefits: ["Descontos significativos", "Parcelamento acessível", "Saia do vermelho rápido"],
    highlighted: true,
  },
  {
    icon: RefreshCw,
    title: "Renegociação Direta",
    description: "Entre em contato direto com seus credores. Muitos preferem receber algo do que nada e estão abertos a negociar.",
    benefits: ["Condições personalizadas", "Sem intermediários", "Flexibilidade"],
  },
  {
    icon: MessageCircle,
    title: "Assistência Virtual",
    description: "Utilize chatbots e assistentes virtuais de bancos e instituições para tirar dúvidas e receber orientações.",
    benefits: ["Disponível 24h", "Sem filas", "Respostas rápidas"],
  },
  {
    icon: Pyramid,
    title: "Priorize Necessidades",
    description: "Aplique a Pirâmide de Maslow às suas finanças: primeiro o essencial (moradia, alimentação), depois o resto.",
    benefits: ["Clareza de prioridades", "Menos estresse", "Decisões melhores"],
  },
  {
    icon: Calculator,
    title: "Organize-se Financeiramente",
    description: "Monte um orçamento simples, anote seus gastos e defina metas realistas. Pequenos passos levam longe.",
    benefits: ["Controle real", "Metas alcançáveis", "Independência"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Caminhos para a solução
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A mudança está ao seu alcance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Não existe fórmula mágica, mas existem passos práticos e acessíveis 
            que qualquer pessoa pode dar. Veja como começar:
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`group relative bg-card rounded-2xl p-8 card-elevated border transition-all ${
                solution.highlighted 
                  ? "border-accent/50 ring-2 ring-accent/20" 
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {solution.highlighted && (
                <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className={`mb-6 ${solution.highlighted ? "icon-container-accent" : "icon-container"}`}>
                <solution.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-5">
                {solution.description}
              </p>
              
              <ul className="space-y-2">
                {solution.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="default" size="lg" className="group">
            Ver guia completo de organização
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
