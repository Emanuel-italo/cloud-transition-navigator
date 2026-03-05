import React, { useState } from "react";
import ScaledSlide from "@/components/ScaledSlide";
import { costScenarios } from "@/data/presentationData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CostSlide: React.FC = () => {
  const [vms, setVms] = useState(120);
  const [storageTB, setStorageTB] = useState(80);
  const [transferTB, setTransferTB] = useState(10);
  
  // Simple cost model (BRL/month)
  const vmCost = vms * 450; // ~$90/VM avg
  const storageCost = storageTB * 200;
  const transferCost = transferTB * 400;
  const managedDBCost = 8000;
  const wafCDNCost = 3500;
  const backupDRCost = 5000;
  const licensingCost = 4000;
  const migrationMonthly = 3000; // amortized
  const total = vmCost + storageCost + transferCost + managedDBCost + wafCDNCost + backupDRCost + licensingCost + migrationMonthly;
  const currentCost = 180000;

  const breakdownData = [
    { name: "VMs/Containers", value: vmCost, color: "hsl(200, 80%, 55%)" },
    { name: "Storage", value: storageCost, color: "hsl(160, 60%, 45%)" },
    { name: "Transfer", value: transferCost, color: "hsl(270, 60%, 60%)" },
    { name: "Managed DB", value: managedDBCost, color: "hsl(38, 92%, 55%)" },
    { name: "WAF/CDN", value: wafCDNCost, color: "hsl(0, 72%, 55%)" },
    { name: "Backup/DR", value: backupDRCost, color: "hsl(200, 60%, 70%)" },
    { name: "Licenças", value: licensingCost, color: "hsl(160, 40%, 60%)" },
    { name: "Migração", value: migrationMonthly, color: "hsl(215, 12%, 55%)" },
  ];

  return (
    <ScaledSlide>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Custos</p>
          <h2 className="slide-title text-4xl">Calculadora Interativa de Custos</h2>
        </div>
        <div className="flex gap-8 flex-1">
          {/* Controls */}
          <div className="w-80 space-y-5">
            <div className="metric-card">
              <label className="text-sm font-medium text-foreground block mb-3">VMs / Containers: <span className="text-primary font-bold">{vms}</span></label>
              <input type="range" min={40} max={200} value={vms} onChange={(e) => setVms(+e.target.value)} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>40</span><span>200</span></div>
            </div>
            <div className="metric-card">
              <label className="text-sm font-medium text-foreground block mb-3">Storage (TB): <span className="text-primary font-bold">{storageTB}</span></label>
              <input type="range" min={20} max={200} value={storageTB} onChange={(e) => setStorageTB(+e.target.value)} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>20</span><span>200</span></div>
            </div>
            <div className="metric-card">
              <label className="text-sm font-medium text-foreground block mb-3">Transferência (TB/mês): <span className="text-primary font-bold">{transferTB}</span></label>
              <input type="range" min={1} max={50} value={transferTB} onChange={(e) => setTransferTB(+e.target.value)} className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1</span><span>50</span></div>
            </div>
            {/* Summary */}
            <div className="metric-card">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Cloud estimado</span>
                <span className="text-xl font-bold text-primary">R$ {total.toLocaleString('pt-BR')}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Datacenter atual</span>
                <span className="text-xl font-bold text-slide-danger">R$ {currentCost.toLocaleString('pt-BR')}</span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground">Economia</span>
                  <span className={`text-xl font-bold ${total < currentCost ? 'text-slide-accent' : 'text-slide-danger'}`}>
                    {total < currentCost ? '-' : '+'}R$ {Math.abs(currentCost - total).toLocaleString('pt-BR')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {total < currentCost ? `${((1 - total / currentCost) * 100).toFixed(0)}% de redução` : 'Acima do custo atual'}
                </p>
              </div>
            </div>
          </div>
          {/* Chart */}
          <div className="flex-1 metric-card">
            <p className="text-sm font-semibold text-foreground mb-4">Breakdown Mensal (R$)</p>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={breakdownData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 22%)" />
                <XAxis type="number" tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 11 }} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(215, 12%, 55%)', fontSize: 11 }} width={100} />
                <Tooltip
                  contentStyle={{ background: 'hsl(220, 18%, 14%)', border: '1px solid hsl(220, 14%, 22%)', borderRadius: 8 }}
                  formatter={(v: number) => [`R$ ${v.toLocaleString('pt-BR')}`, 'Custo']}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {breakdownData.map((d, i) => <Cell key={i} fill={d.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
};

export default CostSlide;
