import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Shield, Zap, TrendingUp } from "lucide-react";

const CoverSlide: React.FC = () => (
  <ScaledSlide>
    <div className="flex flex-col justify-center items-center h-full text-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--slide-primary)), transparent)' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(var(--slide-accent)), transparent)' }} />
      </div>
      
      <div className="relative z-10 animate-fade-in">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="slide-title text-7xl mb-6">Migração para Cloud</h1>
        <p className="slide-subtitle text-2xl mb-12 max-w-3xl">
          Transformação Digital da Infraestrutura — Empresa de Cartões de Crédito
        </p>
        <div className="flex items-center justify-center gap-8 mt-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-slide-warning" />
            <span className="text-lg">Baixa Latência</span>
          </div>
          <div className="w-1 h-6 bg-border rounded" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-slide-accent" />
            <span className="text-lg">Alta Disponibilidade</span>
          </div>
          <div className="w-1 h-6 bg-border rounded" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-lg">Conformidade</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-16">Sul do Brasil · Proposta Executiva-Técnica · 2026</p>
      </div>
    </div>
  </ScaledSlide>
);

export default CoverSlide;
