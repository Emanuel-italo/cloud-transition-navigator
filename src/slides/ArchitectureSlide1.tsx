import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";

const layers = [
  { id: "cdn", label: "CDN / CloudFront", y: 20, color: "var(--slide-warning)", desc: "Edge caching global, TLS termination" },
  { id: "waf", label: "WAF + Shield", y: 90, color: "var(--slide-danger)", desc: "Proteção DDoS, regras PCI-DSS" },
  { id: "alb", label: "ALB / API Gateway", y: 160, color: "var(--slide-primary)", desc: "Load balancing, rate limiting, auth" },
  { id: "app", label: "Auto Scaling Group (ECS/EKS)", y: 240, color: "var(--slide-accent)", desc: "Containers, auto-scaling 2-50 instâncias" },
  { id: "cache", label: "ElastiCache (Redis)", y: 320, color: "var(--slide-purple)", desc: "Cache de sessão, rate limiting, < 1ms" },
  { id: "db", label: "RDS PostgreSQL Multi-AZ", y: 400, color: "var(--slide-primary)", desc: "Failover automático, backup contínuo" },
  { id: "storage", label: "S3 + Glacier", y: 480, color: "var(--slide-warning)", desc: "Documentos, logs, compliance archives" },
  { id: "monitoring", label: "CloudWatch + Prometheus + SIEM", y: 550, color: "var(--slide-accent)", desc: "Observabilidade, alertas, audit trail" },
];

const ArchitectureSlide1: React.FC = () => {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Arquitetura</p>
          <h2 className="slide-title text-4xl">Opção 1 — Híbrido com Burst para Cloud</h2>
          <p className="slide-subtitle mt-1">Workloads sensíveis on-prem + cloud para scaling em picos</p>
        </div>
        <div className="flex gap-8 flex-1">
          <div className="flex-1">
            <svg viewBox="0 0 800 620" className="w-full h-full">
              {/* Background regions */}
              <rect x="20" y="10" width="370" height="600" rx="12" fill="hsl(200, 80%, 55%, 0.05)" stroke="hsl(200, 80%, 55%, 0.2)" strokeDasharray="4 4" />
              <text x="205" y="40" textAnchor="middle" fill="hsl(200, 80%, 55%)" fontSize="14" fontWeight="600">AWS Cloud (sa-east-1)</text>
              
              <rect x="410" y="10" width="370" height="600" rx="12" fill="hsl(38, 92%, 55%, 0.05)" stroke="hsl(38, 92%, 55%, 0.2)" strokeDasharray="4 4" />
              <text x="595" y="40" textAnchor="middle" fill="hsl(38, 92%, 55%)" fontSize="14" fontWeight="600">Datacenter Local</text>
              
              {layers.map((l) => (
                <g key={l.id}
                  onMouseEnter={() => setHighlighted(l.id)}
                  onMouseLeave={() => setHighlighted(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <rect
                    x="40" y={l.y + 50} width="330" height="50" rx="8"
                    fill={highlighted === l.id ? `hsl(${l.color}, 0.2)` : `hsl(${l.color}, 0.08)`}
                    stroke={`hsl(${l.color}, ${highlighted === l.id ? 0.8 : 0.3})`}
                    strokeWidth={highlighted === l.id ? 2 : 1}
                  />
                  <text x="55" y={l.y + 80} fill="hsl(210, 20%, 92%)" fontSize="13" fontWeight="500">{l.label}</text>
                </g>
              ))}
              
              {/* On-prem boxes */}
              {["Core Bancário", "HSM / KMS", "AD / LDAP", "Firewall Fortigate"].map((item, i) => (
                <g key={item}>
                  <rect x="430" y={80 + i * 80} width="330" height="55" rx="8" fill="hsl(38, 92%, 55%, 0.08)" stroke="hsl(38, 92%, 55%, 0.3)" />
                  <text x="595" y={113 + i * 80} textAnchor="middle" fill="hsl(210, 20%, 92%)" fontSize="13" fontWeight="500">{item}</text>
                </g>
              ))}

              {/* Connection arrow */}
              <line x1="370" y1="300" x2="430" y2="300" stroke="hsl(var(--slide-primary))" strokeWidth="2" markerEnd="url(#arrow)" />
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(200, 80%, 55%)" />
                </marker>
              </defs>
              <text x="400" y="290" textAnchor="middle" fill="hsl(215, 12%, 55%)" fontSize="10">Direct Connect</text>
            </svg>
          </div>
          <div className="w-80 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Detalhes da Camada</p>
            {highlighted ? (
              <div className="metric-card animate-fade-in">
                <p className="text-sm font-semibold text-foreground">{layers.find(l => l.id === highlighted)?.label}</p>
                <p className="text-sm text-muted-foreground mt-2">{layers.find(l => l.id === highlighted)?.desc}</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic">Passe o mouse sobre uma camada para ver detalhes</p>
            )}
            <div className="metric-card mt-4">
              <p className="text-xs font-semibold text-slide-warning mb-2">Prós</p>
              <p className="text-sm text-secondary-foreground">Menor risco inicial, migração gradual, workloads sensíveis permanecem on-prem</p>
              <p className="text-xs font-semibold text-slide-danger mt-3 mb-2">Contras</p>
              <p className="text-sm text-secondary-foreground">Mantém custo de datacenter, complexidade de rede híbrida, latência entre ambientes</p>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};

export default ArchitectureSlide1;
