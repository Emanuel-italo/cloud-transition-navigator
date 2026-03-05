import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { ArrowRight, Check, X, Minus } from "lucide-react";

const models = [
  {
    name: "Lift & Shift",
    desc: "Mover servidores como estão para VMs na cloud",
    pros: ["Rápido (8-12 semanas)", "Menor risco técnico", "Equipe atual pode operar"],
    cons: ["Não otimiza custos", "Mantém dívida técnica", "Sem cloud-native benefits"],
    recommendation: "Sistemas legados estáveis",
    color: "var(--slide-warning)",
  },
  {
    name: "Replatform",
    desc: "Migrar com ajustes: managed DB, containers, etc.",
    pros: ["Bom equilíbrio risco/benefício", "Reduz custo operacional", "Usa managed services"],
    cons: ["Requer refatoração parcial", "Tempo médio (12-20 semanas)", "Equipe precisa treinamento"],
    recommendation: "Core de pagamentos ★",
    color: "var(--slide-primary)",
  },
  {
    name: "Refactor",
    desc: "Reescrever para arquitetura cloud-native (microservices, serverless)",
    pros: ["Máximo benefício long-term", "Auto-scaling nativo", "Melhor resiliência"],
    cons: ["Alto custo inicial", "Longo (20-40 semanas)", "Risco de scope creep"],
    recommendation: "Novos produtos e APIs",
    color: "var(--slide-accent)",
  },
];

const MigrationModelsSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Solução</p>
        <h2 className="slide-title text-5xl">Modelos de Migração</h2>
        <p className="slide-subtitle mt-2">Abordagem híbrida recomendada: cada workload com a estratégia adequada</p>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {models.map((m, i) => (
          <div key={i} className="metric-card flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: `hsl(${m.color})` }} />
            <h3 className="text-xl font-bold text-foreground mt-2">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">{m.desc}</p>
            <div className="mb-3">
              <p className="text-xs font-semibold text-slide-accent uppercase mb-2">Prós</p>
              {m.pros.map((p, j) => (
                <div key={j} className="flex items-start gap-2 mb-1">
                  <Check className="w-3.5 h-3.5 text-slide-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{p}</span>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-slide-danger uppercase mb-2">Contras</p>
              {m.cons.map((c, j) => (
                <div key={j} className="flex items-start gap-2 mb-1">
                  <X className="w-3.5 h-3.5 text-slide-danger mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{m.recommendation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default MigrationModelsSlide;
