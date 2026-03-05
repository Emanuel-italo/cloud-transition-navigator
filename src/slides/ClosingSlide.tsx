import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Rocket, CheckCircle2, Network, ArrowRight, MessageCircle, Sparkles, CloudLightning } from "lucide-react";

const nextSteps = [
  {
    id: "budget",
    title: "Aprovação do Budget",
    desc: "Sinal verde financeiro para iniciarmos a transformação digital com segurança.",
    icon: CheckCircle2,
    color: "emerald",
    delay: "0ms"
  },
  {
    id: "fase0",
    title: "Kick-off da Fase 0",
    desc: "Início imediato do inventário de ativos e treinamento da nossa equipe.",
    icon: Rocket,
    color: "blue",
    delay: "100ms"
  },
  {
    id: "conectividade",
    title: "Conectividade Dedicada",
    desc: "Contratação do link direto (Direct Connect/ExpressRoute) para latência zero.",
    icon: Network,
    color: "purple",
    delay: "200ms"
  }
];

const ClosingSlide: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col relative">
        
        {/* Cabeçalho Impactante */}
        <div className="text-center mb-10 pt-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">O Próximo Nível</span>
          </div>
          <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">
            A nuvem não é mais <span className="text-muted-foreground line-through decoration-destructive decoration-4 opacity-70">"se"</span>, é <span className="text-primary underline decoration-primary underline-offset-8">"quando"</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Temos um caminho seguro, gradual e mensurável para transformar nossa infraestrutura, 
            reduzir custos operacionais e escalar o negócio.
          </p>
        </div>

        {/* Cards Dinâmicos dos Próximos Passos */}
        <div className="grid grid-cols-3 gap-6 mb-auto relative z-10 px-4">
          {nextSteps.map((step) => (
            <div 
              key={step.id}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`bg-card border-2 rounded-2xl p-6 transition-all duration-500 ease-out cursor-default animate-fade-in
                ${hoveredStep === step.id 
                  ? `border-${step.color}-500 shadow-[0_0_30px_-5px_rgba(var(--${step.color}-500),0.3)] -translate-y-2 scale-105` 
                  : hoveredStep ? "border-border/50 opacity-40 scale-95" : "border-border shadow-sm hover:shadow-md"
                }
              `}
              style={{ animationDelay: step.delay, animationFillMode: "both" }}
            >
              <div className="flex flex-col h-full">
                <div className={`p-4 rounded-xl inline-flex w-fit mb-6 transition-colors duration-300 ${
                  hoveredStep === step.id ? `bg-${step.color}-500 text-white` : `bg-${step.color}-500/10 text-${step.color}-600`
                }`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {step.desc}
                </p>

                <div className={`mt-6 flex items-center gap-2 font-bold text-sm transition-opacity duration-300 ${
                  hoveredStep === step.id ? `text-${step.color}-600 opacity-100` : "text-muted-foreground opacity-0"
                }`}>
                  <span>Iniciar passo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé - Call to Action (Q&A) */}
        <div className="mt-8 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 flex items-center justify-between overflow-hidden relative">
          <div className="absolute -right-10 -top-10 opacity-10">
            <CloudLightning className="w-64 h-64 text-primary" />
          </div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" />
              Estamos à disposição para perguntas.
            </h4>
            <p className="text-muted-foreground mt-1">Dúvidas sobre o projeto, budget ou arquitetura?</p>
          </div>
          
          <div className="relative z-10">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 animate-pulse">
              Abrir para Q&A
            </button>
          </div>
        </div>

      </div>
    </ScaledSlide>
  );
};

export default ClosingSlide;