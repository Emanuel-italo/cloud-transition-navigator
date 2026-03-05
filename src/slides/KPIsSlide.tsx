import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { Activity, TrendingDown, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const latencyData = Array.from({ length: 30 }, (_, i) => ({
  day: `D${i + 1}`,
  p50: 15 + Math.random() * 10,
  p95: 35 + Math.random() * 15,
  p99: 55 + Math.random() * 20,
}));

const KPIsSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Pós-Migração</p>
        <h2 className="slide-title text-4xl">3 KPIs Fundamentais</h2>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="metric-card text-center">
          <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="metric-value">{"< 50ms"}</p>
          <p className="metric-label">Latência p95 das Transações</p>
          <p className="text-xs text-muted-foreground mt-2">Medida end-to-end incluindo processamento e resposta ao POS/mobile</p>
        </div>
        <div className="metric-card text-center">
          <Clock className="w-8 h-8 text-slide-accent mx-auto mb-3" />
          <p className="text-3xl font-bold text-slide-accent">99.99%</p>
          <p className="metric-label">Disponibilidade do Serviço</p>
          <p className="text-xs text-muted-foreground mt-2">Máximo 52 min de downtime/ano — monitoramento 24/7</p>
        </div>
        <div className="metric-card text-center">
          <TrendingDown className="w-8 h-8 text-slide-warning mx-auto mb-3" />
          <p className="text-3xl font-bold text-slide-warning">-40%</p>
          <p className="metric-label">Custo por Transação</p>
          <p className="text-xs text-muted-foreground mt-2">Redução em 12 meses comparado ao baseline do datacenter</p>
        </div>
      </div>
      <div className="metric-card flex-1">
        <p className="text-sm font-semibold text-foreground mb-4">Simulação — Latência de Transações (ms) — 30 dias</p>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={latencyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 22%)" />
            <XAxis dataKey="day" tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 10 }} />
            <YAxis tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 10 }} />
            <Tooltip contentStyle={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)', borderRadius: 8 }} />
            <Area type="monotone" dataKey="p99" stackId="1" stroke="hsl(0, 72%, 55%)" fill="hsl(0, 72%, 55%, 0.1)" name="p99" />
            <Area type="monotone" dataKey="p95" stackId="2" stroke="hsl(38, 92%, 55%)" fill="hsl(38, 92%, 55%, 0.1)" name="p95" />
            <Area type="monotone" dataKey="p50" stackId="3" stroke="hsl(200, 80%, 55%)" fill="hsl(200, 80%, 55%, 0.15)" name="p50" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </ScaledSlide>
);

export default KPIsSlide;
