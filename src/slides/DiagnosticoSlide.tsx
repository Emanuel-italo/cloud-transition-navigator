import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { AlertTriangle, Server, Clock, DollarSign, ShieldAlert, HardDrive, Info, X } from "lucide-react";

const problems = [
  { icon: Server, label: "Single Point of Failure", desc: "Datacenter + DR a 15m — sem isolamento real contra desastres", badge: "badge-danger" },
  { icon: Clock, label: "RTO 4-8 horas", desc: "Tempo de recuperação inaceitável para operação financeira 24/7", badge: "badge-danger" },
  { icon: HardDrive, label: "150 servidores físicos", desc: "Sem virtualização organizada; scaling manual e lento", badge: "badge-warning" },
  { icon: ShieldAlert, label: "Compliance em risco", desc: "PCI-DSS e LGPD com gaps na segmentação de rede e auditoria", badge: "badge-danger" },
  // Adicionada a flag hasDetail para identificar onde o botão deve aparecer
  { icon: DollarSign, label: "TCO elevado", desc: "R$ 180k/mês em infra (hardware, energia, equipe, licenças)", badge: "badge-warning", hasDetail: true },
  { icon: AlertTriangle, label: "Sem capacidade de burst", desc: "Picos de Black Friday/datas comemorativas causam degradação", badge: "badge-warning" },
];

const DiagnosticoSlide: React.FC = () => {
  // Estado para controlar a exibição da descrição detalhada
  const [showCostDetail, setShowCostDetail] = useState(false);

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col relative">
        <div className="mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Diagnóstico</p>
          <h2 className="slide-title text-5xl">Mapa de Problemas</h2>
          <p className="slide-subtitle mt-2">Infraestrutura atual: Datacenter Tier-2 + Dell + NetApp + Fortigate</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 flex-1 relative">
          {problems.map((p, i) => (
            <div key={i} className="metric-card flex flex-col animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <p.icon className="w-6 h-6 text-primary" />
                <span className={p.badge}>{p.label}</span>
              </div>
              <p className="text-base text-secondary-foreground leading-relaxed flex-1">{p.desc}</p>
              
              {/* Renderiza o botão piscante apenas no card de TCO */}
              {p.hasDetail && (
                <button
                  onClick={() => setShowCostDetail(true)}
                  className="mt-4 flex items-center justify-center gap-2 w-full animate-pulse bg-destructive/10 text-destructive border border-destructive/30 px-3 py-2 rounded-md text-sm font-bold hover:bg-destructive/20 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Detalhar Custos
                </button>
              )}
            </div>
          ))}

          {/* Modal Overlay com a descrição detalhada */}
          {showCostDetail && (
            <div className="absolute inset-0 z-50 flex items-center justify-center animate-in fade-in zoom-in-95 duration-200">
              {/* Fundo escurecido/desfocado */}
              <div 
                className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl"
                onClick={() => setShowCostDetail(false)}
              ></div>
              
              {/* Card de Detalhes */}
              <div className="bg-card border-2 border-destructive/50 rounded-xl shadow-2xl p-8 max-w-2xl relative z-10">
                <button 
                  onClick={() => setShowCostDetail(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-destructive/20 rounded-full">
                    <DollarSign className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-3xl font-bold text-card-foreground">O Verdadeiro Custo do Datacenter</h3>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">O custo da empresa é literalmente alto por utilizar datacenters físicos.</strong> Essa infraestrutura exige investimentos massivos que não agregam valor direto ao negócio.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Manutenção de Hardware:</strong> Necessidade constante de substituir peças, renovar garantias caras e realizar ciclos de <i>refresh</i> de servidores a cada 3 a 5 anos.</li>
                    <li><strong>Infraestrutura Física:</strong> Gastos contínuos e elevados com energia elétrica (para manter tudo rodando) e sistemas de refrigeração industrial.</li>
                    <li><strong>Licenciamento e Pessoal:</strong> Custo alto com licenças tradicionais de virtualização e uma equipe técnica que gasta todo o tempo apenas "mantendo as luzes acesas" ao invés de inovar.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ScaledSlide>
  );
};

export default DiagnosticoSlide;