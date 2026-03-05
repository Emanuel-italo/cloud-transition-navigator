import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Check, X, Star } from "lucide-react";

const providers = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    color: "var(--slide-warning)",
    strengths: ["Maior maturidade (região São Paulo desde 2011)", "Mais serviços financeiros certificados", "Direct Connect com baixa latência", "PCI-DSS Level 1 Service Provider"],
    weaknesses: ["Pricing complexo", "Console pode ser confuso"],
    score: 9.2,
    recommended: true,
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    color: "var(--slide-primary)",
    strengths: ["Integração com ecossistema Microsoft", "Boa presença regional (Brasil Sul)", "Forte em hybrid cloud (Arc)", "Active Directory nativo"],
    weaknesses: ["Menos serviços gerenciados para fintech", "Latência ligeiramente maior na região"],
    score: 8.5,
    recommended: false,
  },
  {
    name: "Google Cloud Platform",
    short: "GCP",
    color: "var(--slide-accent)",
    strengths: ["Melhor rede global (backbone privado)", "Líder em Kubernetes (GKE)", "BigQuery para analytics", "Pricing mais transparente"],
    weaknesses: ["Região Brasil ainda em expansão", "Menor ecossistema de parceiros financeiros"],
    score: 7.8,
    recommended: false,
  },
];

const CloudComparisonSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Solução</p>
        <h2 className="slide-title text-5xl">Comparação de Provedores</h2>
        <p className="slide-subtitle mt-2">Recomendação: AWS primário + Azure para DR cross-provider</p>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {providers.map((p, i) => (
          <div key={i} className={`metric-card flex flex-col relative overflow-hidden ${p.recommended ? 'ring-2 ring-primary/40' : ''}`}>
            {p.recommended && (
              <div className="absolute top-3 right-3">
                <span className="badge-success flex items-center gap-1"><Star className="w-3 h-3" /> Recomendado</span>
              </div>
            )}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: `hsl(${p.color})` }} />
            <h3 className="text-xl font-bold text-foreground mt-2">{p.name}</h3>
            <p className="text-3xl font-bold mt-2" style={{ color: `hsl(${p.color})` }}>{p.score}<span className="text-sm text-muted-foreground">/10</span></p>
            <div className="mt-4 mb-3 flex-1">
              {p.strengths.map((s, j) => (
                <div key={j} className="flex items-start gap-2 mb-1.5">
                  <Check className="w-3.5 h-3.5 text-slide-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{s}</span>
                </div>
              ))}
              {p.weaknesses.map((w, j) => (
                <div key={j} className="flex items-start gap-2 mb-1.5">
                  <X className="w-3.5 h-3.5 text-slide-danger mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{w}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default CloudComparisonSlide;
