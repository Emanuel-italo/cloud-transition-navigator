import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";

const ArchitectureSlide2: React.FC = () => {
  const [activeAZ, setActiveAZ] = useState<string | null>(null);

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Arquitetura</p>
          <h2 className="slide-title text-4xl">Opção 2 — Full Cloud Multi-AZ + DR Cross-Region ★</h2>
          <p className="slide-subtitle mt-1">Recomendação final: elimina datacenter, máxima resiliência</p>
        </div>
        <div className="flex gap-8 flex-1">
          <div className="flex-1">
            <svg viewBox="0 0 900 550" className="w-full h-full">
              {/* Region 1 */}
              <rect x="20" y="10" width="420" height="530" rx="12" fill="hsl(200, 80%, 55%, 0.05)" stroke="hsl(200, 80%, 55%, 0.2)" strokeDasharray="4 4" />
              <text x="230" y="35" textAnchor="middle" fill="hsl(200, 80%, 55%)" fontSize="13" fontWeight="600">sa-east-1 (São Paulo) — PRIMÁRIA</text>
              
              {/* AZ-a */}
              <g onMouseEnter={() => setActiveAZ("az-a")} onMouseLeave={() => setActiveAZ(null)} style={{ cursor: 'pointer' }}>
                <rect x="40" y="50" width="190" height="470" rx="8" fill={activeAZ === "az-a" ? "hsl(160, 60%, 45%, 0.1)" : "hsl(160, 60%, 45%, 0.04)"} stroke="hsl(160, 60%, 45%, 0.3)" />
                <text x="135" y="75" textAnchor="middle" fill="hsl(160, 60%, 45%)" fontSize="11" fontWeight="600">AZ-a</text>
                {["ALB", "ECS/EKS", "Redis Primary", "RDS Primary", "NAT GW"].map((s, i) => (
                  <g key={s}>
                    <rect x="55" y={95 + i * 75} width="160" height="50" rx="6" fill="hsl(var(--slide-surface))" stroke="hsl(var(--border))" />
                    <text x="135" y={125 + i * 75} textAnchor="middle" fill="hsl(210, 20%, 92%)" fontSize="11">{s}</text>
                  </g>
                ))}
              </g>
              
              {/* AZ-b */}
              <g onMouseEnter={() => setActiveAZ("az-b")} onMouseLeave={() => setActiveAZ(null)} style={{ cursor: 'pointer' }}>
                <rect x="240" y="50" width="190" height="470" rx="8" fill={activeAZ === "az-b" ? "hsl(160, 60%, 45%, 0.1)" : "hsl(160, 60%, 45%, 0.04)"} stroke="hsl(160, 60%, 45%, 0.3)" />
                <text x="335" y="75" textAnchor="middle" fill="hsl(160, 60%, 45%)" fontSize="11" fontWeight="600">AZ-b</text>
                {["ALB", "ECS/EKS", "Redis Replica", "RDS Standby", "NAT GW"].map((s, i) => (
                  <g key={s}>
                    <rect x="255" y={95 + i * 75} width="160" height="50" rx="6" fill="hsl(var(--slide-surface))" stroke="hsl(var(--border))" />
                    <text x="335" y={125 + i * 75} textAnchor="middle" fill="hsl(210, 20%, 92%)" fontSize="11">{s}</text>
                  </g>
                ))}
              </g>
              
              {/* Region 2 - DR */}
              <rect x="470" y="10" width="410" height="530" rx="12" fill="hsl(270, 60%, 60%, 0.05)" stroke="hsl(270, 60%, 60%, 0.2)" strokeDasharray="4 4" />
              <text x="675" y="35" textAnchor="middle" fill="hsl(270, 60%, 60%)" fontSize="13" fontWeight="600">us-east-1 (Virginia) — DR</text>
              
              <g onMouseEnter={() => setActiveAZ("dr")} onMouseLeave={() => setActiveAZ(null)} style={{ cursor: 'pointer' }}>
                <rect x="490" y="50" width="370" height="470" rx="8" fill={activeAZ === "dr" ? "hsl(270, 60%, 60%, 0.1)" : "hsl(270, 60%, 60%, 0.04)"} stroke="hsl(270, 60%, 60%, 0.2)" />
                <text x="675" y="80" textAnchor="middle" fill="hsl(270, 60%, 60%)" fontSize="11" fontWeight="600">Warm Standby</text>
                {["ALB (standby)", "ECS min-capacity", "Redis Replica", "RDS Read Replica", "S3 Cross-Region"].map((s, i) => (
                  <g key={s}>
                    <rect x="510" y={100 + i * 75} width="330" height="50" rx="6" fill="hsl(var(--slide-surface))" stroke="hsl(var(--border))" />
                    <text x="675" y={130 + i * 75} textAnchor="middle" fill="hsl(210, 20%, 92%)" fontSize="11">{s}</text>
                  </g>
                ))}
              </g>
              
              {/* Replication arrows */}
              <line x1="430" y1="280" x2="490" y2="280" stroke="hsl(270, 60%, 60%)" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow2)" />
              <text x="460" y="270" textAnchor="middle" fill="hsl(215, 12%, 55%)" fontSize="9">Replicação</text>
              <defs>
                <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(270, 60%, 60%)" />
                </marker>
              </defs>
            </svg>
          </div>
          <div className="w-72 space-y-3">
            <div className="metric-card">
              <p className="metric-value text-2xl">99.99%</p>
              <p className="metric-label">SLA de disponibilidade</p>
            </div>
            <div className="metric-card">
              <p className="text-2xl font-bold text-slide-accent">{"< 5 min"}</p>
              <p className="metric-label">RTO com failover automático</p>
            </div>
            <div className="metric-card">
              <p className="text-2xl font-bold text-slide-purple">{"< 1 min"}</p>
              <p className="metric-label">RPO com replicação síncrona</p>
            </div>
            {activeAZ && (
              <div className="metric-card animate-fade-in">
                <p className="text-xs font-semibold text-primary">
                  {activeAZ === "az-a" ? "AZ-a: Zona primária com todos os serviços ativos" :
                   activeAZ === "az-b" ? "AZ-b: Réplicas para failover instantâneo intra-região" :
                   "DR: Warm standby cross-region para desastres regionais"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};

export default ArchitectureSlide2;
