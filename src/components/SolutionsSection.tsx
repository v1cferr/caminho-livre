import { Button } from "@/components/ui/button";
import { 
  FileCheck, 
  RefreshCw, 
  MessageCircle, 
  Pyramid, 
  Calculator, 
  ArrowRight, 
  CheckCircle,
  Lightbulb,
  HeartHandshake
} from "lucide-react";

const solutions = [
  {
    icon: FileCheck,
    title: "Serasa Limpa Nome",
    description: "Programas de negociação oferecem descontos de até 90% para quitação de dívidas. É um alívio real e imediato.",
    benefits: ["Descontos significativos", "Parcelamento acessível", "Saia do vermelho rápido"],
    highlighted: true,
  },
  {
    icon: RefreshCw,
    title: "Renegociação de Dívidas",
    description: "Entre em contato direto com seus credores. Muitos preferem receber algo do que nada e estão abertos a negociar.",
    benefits: ["Condições personalizadas", "Sem intermediários", "Flexibilidade de prazos"],
  },
  {
    icon: MessageCircle,
    title: "Assistente Virtual",
    description: "Utilize chatbots e assistentes virtuais de bancos e instituições para tirar dúvidas e receber orientações 24h.",
    benefits: ["Disponível 24 horas", "Sem filas ou espera", "Respostas imediatas"],
  },
  {
    icon: Pyramid,
    title: "Pirâmide de Maslow",
    description: "Priorize suas necessidades: primeiro o essencial (moradia, alimentação, saúde), depois o restante. Ordem certa faz diferença.",
    benefits: ["Clareza de prioridades", "Menos culpa", "Decisões conscientes"],
  },
  {
    icon: Calculator,
    title: "Organização Financeira",
    description: "Monte um orçamento simples, anote todos os gastos e defina metas realistas. Pequenos passos levam longe.",
    benefits: ["Controle total", "Metas alcançáveis", "Independência"],
  },
  {
    icon: Lightbulb,
    title: "Ideias de Renda Extra",
    description: "Explore habilidades que você já tem para gerar renda adicional. Vender bolos, fazer freelance, dar aulas — toda renda ajuda.",
    benefits: ["Use seus talentos", "Flexibilidade de horário", "Acelere a quitação"],
  },
  {
    icon: HeartHandshake,
    title: "Apoio Profissional",
    description: "Busque ajuda de profissionais: CRAS, CAPS, assistência social. Saúde mental e suporte fazem parte da recuperação financeira.",
    benefits: ["Suporte gratuito", "Orientação especializada", "Rede de apoio"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Caminhos para a Solução
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
