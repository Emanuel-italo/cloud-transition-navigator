import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Lock, Key, Shield, Eye, Network, Bug } from "lucide-react";

const securityLayers = [
  { icon: Lock, title: "Criptografia", items: ["AES-256 em repouso (EBS, S3, RDS)", "TLS 1.3 em trânsito (end-to-end)", "Certificados gerenciados (ACM)"] },
  { icon: Key, title: "Gerenciamento de Chaves", items: ["AWS CloudHSM dedicado (FIPS 140-2 Level 3)", "KMS para chaves de aplicação", "Rotação automática de chaves a cada 90 dias"] },
  { icon: Network, title: "Segmentação de Rede", items: ["VPC isolada por ambiente (prod/stg/dev)", "Security Groups por camada (web/app/db)", "NACLs + PrivateLink para serviços AWS"] },
  { icon: Shield, title: "Proteção de Borda", items: ["AWS WAF com regras PCI-DSS", "AWS Shield Advanced (DDoS)", "Rate limiting no API Gateway"] },
  { icon: Eye, title: "Observabilidade & SIEM", items: ["CloudTrail para auditoria", "GuardDuty para threat detection", "SIEM centralizado (Splunk/Elastic)"] },
  { icon: Bug, title: "Pentest & Compliance", items: ["Pentest trimestral (PCI-DSS req.)", "Scan de vulnerabilidade contínuo", "SOC 2 Type II do provedor"] },
];

const SecuritySlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Segurança</p>
        <h2 className="slide-title text-5xl">Plano de Segurança</h2>
        <p className="slide-subtitle mt-2">Criptografia, segmentação, compliance PCI-DSS e LGPD</p>
      </div>
      <div className="grid grid-cols-3 gap-5 flex-1">
        {securityLayers.map((s, i) => (
          <div key={i} className="metric-card animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
            </div>
            {s.items.map((item, j) => (
              <p key={j} className="text-sm text-secondary-foreground mb-1.5 pl-3 border-l-2 border-border">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </ScaledSlide>
);

export default SecuritySlide;
