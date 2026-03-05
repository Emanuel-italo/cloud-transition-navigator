import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Shield, Tag, DollarSign, Users, FileCheck, Eye } from "lucide-react";

const policies = [
  { icon: Users, title: "IAM & Least Privilege", items: ["SSO com MFA obrigatório", "Roles por função (dev/ops/audit)", "Revisão trimestral de acessos", "Service accounts com escopo mínimo"] },
  { icon: Tag, title: "Tagging Obrigatório", items: ["Ambiente (prod/stg/dev)", "Centro de custo", "Owner / Squad", "Compliance tier (PCI/LGPD)"] },
  { icon: DollarSign, title: "Políticas de Custo", items: ["Budget alerts (80%, 100%, 120%)", "Reserved Instances > 70% utilização", "Rightsizing mensal automatizado", "Revisão de custos no sprint review"] },
  { icon: FileCheck, title: "Compliance", items: ["PCI-DSS Level 1 (trimestral)", "LGPD — DPO e DPIA", "SOX controls para financeiro", "Audit trail mínimo 7 anos"] },
  { icon: Eye, title: "Observabilidade", items: ["SLOs definidos por serviço", "Error budget tracking", "Incident management (PagerDuty)", "Post-mortems sem blame"] },
  { icon: Shield, title: "Change Management", items: ["CAB semanal para prod", "Deploy automatizado via CI/CD", "Feature flags para rollback", "Canary deployments obrigatórios"] },
];

const GovernanceSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Governança</p>
        <h2 className="slide-title text-5xl">Políticas e Governança</h2>
      </div>
      <div className="grid grid-cols-3 gap-5 flex-1">
        {policies.map((p, i) => (
          <div key={i} className="metric-card animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <p.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
            </div>
            {p.items.map((item, j) => (
              <p key={j} className="text-sm text-secondary-foreground mb-1 pl-3 border-l-2 border-border">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default GovernanceSlide;
