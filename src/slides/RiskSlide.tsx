import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { risks } from "@/data/presentationData";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const RiskSlide: React.FC = () => {
  const [budget, setBudget] = useState(50);

  const scatterData = risks.map((r) => ({
    ...r,
    x: r.probability,
    y: r.impact,
    z: r.probability * r.impact,
    mitigatedImpact: Math.max(1, r.impact - (budget / 25)),
  }));

  const getColor = (score: number) => {
    if (score >= 15) return "hsl(0, 72%, 55%)";
    if (score >= 8) return "hsl(38, 92%, 55%)";
    return "hsl(160, 60%, 45%)";
  };

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Riscos</p>
          <h2 className="slide-title text-4xl">Simulador de Risco vs Custo de Mitigação</h2>
        </div>
        <div className="flex gap-8 flex-1">
          <div className="flex-1">
            <div className="metric-card h-full">
              <p className="text-sm font-semibold text-foreground mb-3">Matriz de Riscos (Probabilidade × Impacto)</p>
              <ResponsiveContainer width="100%" height="85%">
                <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 22%)" />
                  <XAxis type="number" dataKey="x" name="Probabilidade" domain={[0, 5]} tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 11 }} label={{ value: 'Probabilidade', position: 'bottom', fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
                  <YAxis type="number" dataKey="mitigatedImpact" name="Impacto" domain={[0, 5]} tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 11 }} label={{ value: 'Impacto', angle: -90, position: 'insideLeft', fill: 'hsl(215, 12%, 55%)', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)', borderRadius: 8 }}
                    formatter={(v: number, name: string) => [v.toFixed(1), name]}
                    labelFormatter={() => ''}
                    content={({ payload }) => {
                      if (!payload?.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div className="p-3 rounded-lg" style={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)' }}>
                          <p className="text-sm font-semibold text-foreground">{d.category}</p>
                          <p className="text-xs text-muted-foreground mt-1">{d.description}</p>
                          <p className="text-xs text-slide-accent mt-1">Score: {(d.probability * d.mitigatedImpact).toFixed(1)}</p>
                        </div>
                      );
                    }}
                  />
                  <Scatter data={scatterData}>
                    {scatterData.map((d, i) => (
                      <Cell key={i} fill={getColor(d.probability * d.mitigatedImpact)} r={Math.max(8, d.z * 2)} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-80 space-y-4">
            <div className="metric-card">
              <label className="text-sm font-medium text-foreground block mb-3">
                Budget de Mitigação: <span className="text-primary font-bold">R$ {budget}k/mês</span>
              </label>
              <input type="range" min={0} max={100} value={budget} onChange={(e) => setBudget(+e.target.value)} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>R$ 0k</span><span>R$ 100k</span></div>
              <p className="text-xs text-muted-foreground mt-2">Aumentar o budget reduz o impacto dos riscos</p>
            </div>
            <div className="space-y-2">
              {risks.map((r) => {
                const mitigated = Math.max(1, r.impact - (budget / 25));
                const score = r.probability * mitigated;
                return (
                  <div key={r.id} className="metric-card !p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground">{r.category}</span>
                      <span className={score >= 15 ? 'badge-danger' : score >= 8 ? 'badge-warning' : 'badge-success'}>
                        {score.toFixed(1)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};

export default RiskSlide;
