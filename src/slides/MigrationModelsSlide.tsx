import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { ArrowRight, Check, X, Lightbulb, DollarSign, Info, X as CloseIcon, TrendingDown, Equal } from "lucide-react";

// Dados atualizados com custos estimados, efeito de economia e explicações detalhadas
const models = [
  {
    name: "Lift & Shift (Re-hospedar)",
    desc: "Mover os servidores como estão diretamente para a nuvem.",
    analogy: "É como mudar de casa levando todos os móveis velhos exatamente como estão.",
    costValue: "R$ 180.000 / mês",
    costSub: "Migração barata, mas sem economia mensal.",
    costIcon: Equal,
    costColor: "text-orange-600",
    costBg: "bg-orange-500/20",
    pros: ["Rápido (8-12 semanas)", "Menor risco técnico", "Equipe atual já sabe operar"],
    cons: ["Não otimiza a conta do mês", "Mantém os problemas antigos", "Sem benefícios de cloud"],
    recommendation: "Sistemas legados estáveis",
    color: "var(--slide-warning)",
    badgeColor: "bg-orange-500/10 text-orange-600 border-orange-200",
    details: {
      title: "Entendendo o Lift & Shift",
      body: "Nesta abordagem, pegamos suas máquinas virtuais ou servidores físicos atuais e simplesmente os copiamos para a nuvem (como instâncias EC2 na AWS, por exemplo). Não alteramos nenhuma linha de código e não mudamos o banco de dados.",
      why: "Como não otimizamos nada, você continuará pagando por recursos ociosos (como processador e memória que não estão sendo usados de madrugada). É a forma mais rápida de sair do datacenter físico, mas a pior opção financeiramente a longo prazo."
    }
  },
  {
    name: "Replatform (Re-plataformar)",
    desc: "Migrar fazendo pequenos ajustes inteligentes (ex: Managed DB).",
    analogy: "É mudar de casa e aproveitar para comprar móveis que já vêm montados.",
    costValue: "R$ 125.000 / mês",
    costSub: "Economia média de 30% após os ajustes.",
    costIcon: TrendingDown,
    costColor: "text-blue-600",
    costBg: "bg-blue-500/20",
    pros: ["Bom equilíbrio risco/benefício", "Reduz trabalho braçal", "Usa serviços prontos"],
    cons: ["Exige mexer um pouco no código", "Tempo médio (12-20 semanas)", "Leve treino da equipe"],
    recommendation: "Core de pagamentos ★",
    color: "var(--slide-primary)",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200",
    details: {
      title: "Entendendo o Replatform",
      body: "Também conhecido como 'Tinker' (ajustar). Aqui nós não reescrevemos seu sistema, mas trocamos componentes difíceis de manter por serviços gerenciados da nuvem. Por exemplo: em vez de você instalar e manter um banco de dados MySQL em um servidor, nós usamos o Amazon RDS.",
      why: "A nuvem passa a cuidar dos backups, atualizações de segurança e disponibilidade do banco de dados. Isso reduz drasticamente o tempo que sua equipe gasta 'apagando incêndios' e otimiza o uso de recursos, gerando uma boa redução na fatura no fim do mês."
    }
  },
  {
    name: "Refactor (Re-arquitetar)",
    desc: "Reescrever o sistema para funcionar com tecnologia 100% nuvem.",
    analogy: "É derrubar a casa velha e projetar um prédio inteligente do zero.",
    costValue: "R$ 70.000 / mês",
    costSub: "Economia de até 60% com Serverless.",
    costIcon: TrendingDown,
    costColor: "text-emerald-600",
    costBg: "bg-emerald-500/20",
    pros: ["Máximo benefício financeiro", "Escala automaticamente", "Sistema nunca cai"],
    cons: ["Alto custo de desenvolvedores", "Longo prazo (20-40 semanas)", "Requer arquitetura nova"],
    recommendation: "Novos produtos e APIs",
    color: "var(--slide-accent)",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-200",
    details: {
      title: "Entendendo o Refactor",
      body: "A verdadeira adoção da nuvem (Cloud-Native). Nós quebramos o sistema antigo em pequenos pedaços (Microserviços) e usamos tecnologias Serverless (sem servidor), onde você só paga pelos milissegundos exatos em que o código é executado.",
      why: "O custo inicial dessa migração é altíssimo, pois exige muito trabalho de programadores. Porém, o custo mensal da infraestrutura despenca absurdamente. Além disso, se a Black Friday chegar, o sistema cresce sozinho para suportar os milhões de acessos, e depois encolhe para não gastar dinheiro de madrugada."
    }
  },
];

const MigrationModelsSlide: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col relative">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Solução</p>
          <h2 className="slide-title text-4xl mb-2">Modelos de Migração e Impacto</h2>
          <p className="slide-subtitle text-lg">Entendendo as estratégias, as reduções de custos e como moveremos nossos sistemas.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 flex-1 relative z-10">
          {models.map((m, i) => (
            <div key={i} className="metric-card flex flex-col relative overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow p-5 rounded-xl">
              {/* Linha colorida no topo do card */}
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: `hsl(${m.color})` }} />
              
              <h3 className="text-xl font-extrabold text-foreground mt-2">{m.name}</h3>
              <p className="text-sm text-muted-foreground font-medium mt-1 mb-4 h-10">{m.desc}</p>
              
              {/* Custo Médio Pulsante */}
              <div className={`flex items-start gap-3 mb-4 p-3 rounded-lg border border-dashed animate-pulse ${m.badgeColor}`}>
                <div className={`p-2 rounded-full ${m.costBg}`}>
                  <m.costIcon className={`w-5 h-5 ${m.costColor}`} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-foreground/80">Custo Médio Mensal</span>
                  <p className={`text-lg font-black ${m.costColor} leading-tight`}>{m.costValue}</p>
                  <p className="text-[10px] font-semibold mt-0.5 opacity-80">{m.costSub}</p>
                </div>
              </div>

              {/* Bloco de Explicação Didática */}
              <div className={`p-3 rounded-md mb-4 bg-muted/40`}>
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Na Prática</span>
                </div>
                <p className="text-xs font-medium leading-relaxed text-muted-foreground">{m.analogy}</p>
              </div>

              {/* Prós e Contras */}
              <div className="grid grid-cols-2 gap-2 mb-4 flex-1">
                <div>
                  <p className="text-xs font-bold text-slide-accent uppercase mb-2">Prós</p>
                  {m.pros.map((p, j) => (
                    <div key={j} className="flex items-start gap-1.5 mb-1.5">
                      <Check className="w-3.5 h-3.5 text-slide-accent mt-0.5 shrink-0" />
                      <span className="text-xs text-secondary-foreground leading-tight">{p}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-slide-danger uppercase mb-2">Contras</p>
                  {m.cons.map((c, j) => (
                    <div key={j} className="flex items-start gap-1.5 mb-1.5">
                      <X className="w-3.5 h-3.5 text-slide-danger mt-0.5 shrink-0" />
                      <span className="text-xs text-secondary-foreground leading-tight">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões do Rodapé */}
              <div className="mt-auto pt-3 border-t border-border flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase">Uso ideal: {m.recommendation}</span>
                </div>
                
                {/* Botão de Detalhes Interativo */}
                <button
                  onClick={() => setSelectedModel(i)}
                  className="w-full flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors py-2 rounded-md text-sm font-bold border border-primary/20"
                >
                  <Info className="w-4 h-4" />
                  Entender Estratégia
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay para Detalhamento */}
        {selectedModel !== null && (
          <div className="absolute inset-0 z-50 flex items-center justify-center animate-in fade-in zoom-in-95 duration-200">
            {/* Fundo Desfocado */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl"
              onClick={() => setSelectedModel(null)}
            ></div>
            
            {/* Caixa do Modal */}
            <div className="bg-card border-2 border-primary/30 rounded-xl shadow-2xl p-8 max-w-2xl relative z-10">
              <button 
                onClick={() => setSelectedModel(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1 bg-muted rounded-full"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {models[selectedModel].details.title}
                </h3>
              </div>
              
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed mt-6">
                <p className="text-foreground font-medium text-lg">
                  {models[selectedModel].details.body}
                </p>
                <div className="bg-muted p-4 rounded-lg border border-border mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-foreground">Impacto Financeiro e Operacional:</span>
                  </div>
                  <p>{models[selectedModel].details.why}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScaledSlide>
  );
};

export default MigrationModelsSlide;