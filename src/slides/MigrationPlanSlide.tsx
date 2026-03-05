import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { migrationPhases } from "@/data/presentationData";
import { CheckCircle2, Target, Clock, RotateCcw } from "lucide-react";

const MigrationPlanSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Plano de Migração</p>
        <h2 className="slide-title text-4xl">Fases da Migração</h2>
        <p className="slide-subtitle mt-1">Total estimado: ~36 semanas (9 meses)</p>
      </div>
      <div className="grid grid-cols-2 gap-5 flex-1 overflow-hidden">
        {migrationPhases.map((phase, i) => (
          <div key={phase.id} className="metric-card flex flex-col overflow-hidden animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-foreground">{phase.name}</h3>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">{phase.estimatedWeeks} semanas</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Target className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">Objetivos</span>
              </div>
              {phase.objectives.slice(0, 3).map((o, j) => (
                <p key={j} className="text-xs text-secondary-foreground mb-0.5 pl-5">• {o}</p>
              ))}
            </div>
            <div className="mb-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slide-accent" />
                <span className="text-xs font-semibold text-slide-accent">Critérios de Sucesso</span>
              </div>
              {phase.successCriteria.slice(0, 2).map((c, j) => (
                <p key={j} className="text-xs text-secondary-foreground mb-0.5 pl-5">• {c}</p>
              ))}
            </div>
            <div className="mt-auto pt-2 border-t border-border">
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3 h-3 text-slide-warning" />
                <span className="text-xs text-slide-warning">Rollback: {phase.rollbackChecklist[0]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default MigrationPlanSlide;
