import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { AlertTriangle, Server, Clock, DollarSign, ShieldAlert, HardDrive } from "lucide-react";

const problems = [
  { icon: Server, label: "Single Point of Failure", desc: "Datacenter + DR a 15m — sem isolamento real contra desastres", badge: "badge-danger" },
  { icon: Clock, label: "RTO 4-8 horas", desc: "Tempo de recuperação inaceitável para operação financeira 24/7", badge: "badge-danger" },
  { icon: HardDrive, label: "150 servidores físicos", desc: "Sem virtualização organizada; scaling manual e lento", badge: "badge-warning" },
  { icon: ShieldAlert, label: "Compliance em risco", desc: "PCI-DSS e LGPD com gaps na segmentação de rede e auditoria", badge: "badge-danger" },
  { icon: DollarSign, label: "TCO elevado", desc: "R$ 180k/mês em infra (hardware, energia, equipe, licenças)", badge: "badge-warning" },
  { icon: AlertTriangle, label: "Sem capacidade de burst", desc: "Picos de Black Friday/datas comemorativas causam degradação", badge: "badge-warning" },
];

const DiagnosticoSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Diagnóstico</p>
        <h2 className="slide-title text-5xl">Mapa de Problemas</h2>
        <p className="slide-subtitle mt-2">Infraestrutura atual: Datacenter Tier-2 + Dell + NetApp + Fortigate</p>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-1">
        {problems.map((p, i) => (
          <div key={i} className="metric-card flex flex-col animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center justify-between mb-4">
              <p.icon className="w-6 h-6 text-primary" />
              <span className={p.badge}>{p.label}</span>
            </div>
            <p className="text-base text-secondary-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default DiagnosticoSlide;
