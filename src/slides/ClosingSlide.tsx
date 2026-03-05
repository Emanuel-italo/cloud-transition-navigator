import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

const ClosingSlide: React.FC = () => (
  <ScaledSlide>
    <div className="flex flex-col justify-center items-center h-full text-center relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--slide-primary)), transparent)' }} />
        <div className="absolute bottom-32 right-32 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--slide-accent)), transparent)' }} />
      </div>
      
      <div className="relative z-10">
        <h2 className="slide-title text-6xl mb-6">Próximos Passos</h2>
        <p className="slide-subtitle text-2xl mb-12 max-w-3xl">
          A migração para cloud é uma jornada — e começa com o primeiro passo.
        </p>
        
        <div className="flex items-center justify-center gap-8 mb-16">
          {[
            { step: "1", label: "Aprovação do Budget", time: "Semana 1" },
            { step: "2", label: "Kick-off Fase 0", time: "Semana 2" },
            { step: "3", label: "Conectividade Dedicada", time: "Semana 3-4" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ArrowRight className="w-6 h-6 text-muted-foreground" />}
              <div className="metric-card text-center w-64">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">{s.step}</span>
                </div>
                <p className="text-base font-semibold text-foreground">{s.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.time}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span className="text-sm">contato@empresa.com</span></div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span className="text-sm">(51) 3XXX-XXXX</span></div>
          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span className="text-sm">Agendar reunião de follow-up</span></div>
        </div>
        
        <p className="text-xs text-muted-foreground mt-12">Obrigado. Estamos à disposição para perguntas.</p>
      </div>
    </div>
  </ScaledSlide>
);

export default ClosingSlide;
