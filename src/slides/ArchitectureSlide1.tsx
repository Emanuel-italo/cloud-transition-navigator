import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { GraduationCap, TrendingUp, Target, Scale, Zap, ShieldCheck, Clock, Lightbulb } from "lucide-react";

const ArchitectureSlide1: React.FC = () => {
  return (
    <ScaledSlide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/20 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest">A Visão Estratégica</p>
          </div>
          <h2 className="slide-title text-4xl mb-2">Por que usar os 3 modelos juntos?</h2>
          <p className="slide-subtitle text-lg">
            A eficiência não está em escolher uma única tecnologia, mas em saber onde investir nosso esforço financeiro e humano para o futuro.
          </p>
        </div>

        {/* Quadro Didático - A Analogia */}
        <div className="bg-muted/40 border border-border rounded-xl p-5 mb-6 relative overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            <Lightbulb className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">A Regra da Reforma (Explicando de forma simples)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imagine que você vai reformar uma casa inteira, mas tem tempo e dinheiro limitados.
                Se você gastar todo o seu orçamento reconstruindo o <strong>"quartinho da bagunça"</strong> (nossos sistemas legados antigos),
                vai faltar dinheiro para modernizar a <strong>"sala de estar"</strong> (onde nosso cliente faz compras e gera lucro). <br /><br />
                O segredo dessa nossa arquitetura é aplicar o modelo certo no lugar certo, garantindo que a empresa <strong>fature mais, gaste menos e não saia do ar</strong> nos próximos anos.
              </p>
            </div>
          </div>
        </div>

        {/* Projeções Futuras dos 3 Modelos */}
        <div className="flex-1 grid grid-cols-3 gap-6">

          {/* Coluna 1: Lift & Shift */}
          <div className="bg-card border-t-4 border-orange-500 rounded-b-xl rounded-t-sm p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-md">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Lift & Shift</h3>
            </div>
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">Onde aplicamos?</p>
            <p className="text-sm text-muted-foreground mb-4">Nos sistemas internos antigos (O "quartinho da bagunça").</p>

            <div className="mt-auto bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
              <p className="flex items-center gap-2 text-xs font-bold text-foreground mb-2">
                <TrendingUp className="w-4 h-4 text-orange-600" /> Projeção Futura
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-secondary-foreground flex items-start gap-2">
                  <Target className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Sobrevivência Imediata:</strong> Saímos do datacenter físico antes que os equipamentos quebrem, sem perder 1 ano reescrevendo código velho.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 2: Replatform */}
          <div className="bg-card border-t-4 border-blue-500 rounded-b-xl rounded-t-sm p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-md">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Replatform</h3>
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Onde aplicamos?</p>
            <p className="text-sm text-muted-foreground mb-4">No coração da empresa, como Bancos de Dados (A "cozinha do restaurante").</p>

            <div className="mt-auto bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
              <p className="flex items-center gap-2 text-xs font-bold text-foreground mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" /> Projeção Futura
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-secondary-foreground flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Paz de Espírito:</strong> No futuro, a nuvem conserta, faz backup e atualiza o banco de dados sozinha.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 3: Refactor */}
          <div className="bg-card border-t-4 border-emerald-500 rounded-b-xl rounded-t-sm p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-md">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Refactor</h3>
            </div>
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Onde aplicamos?</p>
            <p className="text-sm text-muted-foreground mb-4">Nos aplicativos de clientes e APIs (A "vitrine da loja").</p>

            <div className="mt-auto bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
              <p className="flex items-center gap-2 text-xs font-bold text-foreground mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" /> Projeção Futura
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-secondary-foreground flex items-start gap-2">
                  <Scale className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Inovação e Escala:</strong> O sistema "estica" sozinho na Black Friday para não cair, e "encolhe" de madrugada para zerar custo.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </ScaledSlide>
  );
};

export default ArchitectureSlide1;