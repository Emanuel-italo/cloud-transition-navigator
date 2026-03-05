import React from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const tpsData = [
  { hour: "00h", tps: 120 }, { hour: "02h", tps: 80 }, { hour: "04h", tps: 60 },
  { hour: "06h", tps: 200 }, { hour: "08h", tps: 450 }, { hour: "10h", tps: 680 },
  { hour: "12h", tps: 850 }, { hour: "14h", tps: 750 }, { hour: "16h", tps: 820 },
  { hour: "18h", tps: 780 }, { hour: "20h", tps: 600 }, { hour: "22h", tps: 350 },
];

const growthData = [
  { year: "2022", transactions: 15 }, { year: "2023", transactions: 19 },
  { year: "2024", transactions: 24 }, { year: "2025", transactions: 30 },
  { year: "2026*", transactions: 37 }, { year: "2027*", transactions: 47 },
];

const MetricasSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Diagnóstico</p>
        <h2 className="slide-title text-5xl">Métricas e Premissas</h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { v: "850 TPS", l: "Pico de transações/s" },
          { v: "25%", l: "Crescimento anual" },
          { v: "R$ 180k", l: "Custo mensal datacenter" },
          { v: "4-8h", l: "RTO atual" },
        ].map((m, i) => (
          <div key={i} className="metric-card text-center">
            <p className="metric-value">{m.v}</p>
            <p className="metric-label">{m.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="metric-card">
          <p className="text-sm font-semibold text-foreground mb-4">Transações por Segundo (dia típico)</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={tpsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 22%)" />
              <XAxis dataKey="hour" tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
              <YAxis tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)', borderRadius: 8 }} />
              <Bar dataKey="tps" fill="hsl(200, 80%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="metric-card">
          <p className="text-sm font-semibold text-foreground mb-4">Volume de Transações (milhões/mês)</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 22%)" />
              <XAxis dataKey="year" tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
              <YAxis tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)', borderRadius: 8 }} />
              <Line type="monotone" dataKey="transactions" stroke="hsl(160, 60%, 45%)" strokeWidth={3} dot={{ fill: 'hsl(160, 60%, 45%)', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </ScaledSlide>
);

export default MetricasSlide;
