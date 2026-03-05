import { CostScenario, MigrationPhase, RiskItem } from "@/types/presentation";

export const costScenarios: CostScenario[] = [
  {
    name: "Conservador",
    vms: 80,
    storageTB: 50,
    transferTBMonth: 5,
    iops: 10000,
    rtpMinutes: 15,
    rpoMinutes: 5,
    monthlyCostMin: 45000,
    monthlyCostMax: 65000,
  },
  {
    name: "Moderado",
    vms: 120,
    storageTB: 80,
    transferTBMonth: 10,
    iops: 20000,
    rtpMinutes: 5,
    rpoMinutes: 1,
    monthlyCostMin: 70000,
    monthlyCostMax: 95000,
  },
  {
    name: "Agressivo",
    vms: 150,
    storageTB: 120,
    transferTBMonth: 20,
    iops: 40000,
    rtpMinutes: 2,
    rpoMinutes: 0.5,
    monthlyCostMin: 95000,
    monthlyCostMax: 140000,
  },
];

export const migrationPhases: MigrationPhase[] = [
  {
    id: "phase-0",
    name: "Fase 0 — Preparação",
    objectives: [
      "Inventário completo de ativos (150 servidores, storage, rede)",
      "Assessment de dependências entre aplicações",
      "Treinamento da equipe em cloud (AWS/Azure)",
      "Definição de landing zone e políticas de segurança",
      "Contratação de conectividade dedicada (Direct Connect / ExpressRoute)",
    ],
    successCriteria: [
      "100% dos ativos catalogados no CMDB",
      "Equipe certificada (mín. 3 profissionais)",
      "Landing zone provisionada via IaC",
      "Conectividade dedicada ativa com latência < 5ms",
    ],
    estimatedWeeks: 8,
    rollbackChecklist: [
      "Manter datacenter inalterado durante preparação",
      "Backup completo antes de qualquer alteração",
    ],
  },
  {
    id: "phase-1",
    name: "Fase 1 — Piloto",
    objectives: [
      "Migrar 1 aplicação crítica (gateway de pagamento) para cloud",
      "Validar latência end-to-end < 50ms p95",
      "Testar failover automatizado",
      "Validar conformidade PCI-DSS no ambiente cloud",
    ],
    successCriteria: [
      "Latência p95 < 50ms medida por 30 dias",
      "Disponibilidade > 99.95% durante piloto",
      "Auditoria PCI-DSS aprovada no ambiente cloud",
      "Custo dentro de 10% do orçamento previsto",
    ],
    estimatedWeeks: 6,
    rollbackChecklist: [
      "DNS failback para datacenter local em < 5 min",
      "Replicação de dados bidirecional ativa",
      "Procedimento de rollback testado e documentado",
    ],
  },
  {
    id: "phase-2",
    name: "Fase 2 — Migração por Ondas",
    objectives: [
      "Migrar aplicações em 4 ondas de ~35 servidores",
      "Priorizar por criticidade e dependências",
      "Implementar observabilidade completa",
      "Automatizar scaling para picos de transação",
    ],
    successCriteria: [
      "Cada onda concluída sem downtime > 15 min",
      "Métricas de latência mantidas por onda",
      "Zero incidentes de segurança durante migração",
      "Redução de 20% em incidentes operacionais",
    ],
    estimatedWeeks: 16,
    rollbackChecklist: [
      "Snapshot pré-migração de cada onda",
      "Rollback por onda independente",
      "Comunicação de contingência para stakeholders",
      "Ambiente on-prem mantido até validação de 2 semanas",
    ],
  },
  {
    id: "phase-3",
    name: "Fase 3 — Cutover & Descomissionamento",
    objectives: [
      "Descomissionar servidores on-prem migrados",
      "Renegociar contrato de datacenter",
      "Otimizar custos cloud (Reserved Instances, Savings Plans)",
      "Implementar FinOps e governança contínua",
    ],
    successCriteria: [
      "100% workloads em cloud",
      "Redução de 30-40% no TCO vs datacenter",
      "SLAs contratuais de 99.99% atingidos",
      "Dashboard de custos ativo e alertas configurados",
    ],
    estimatedWeeks: 6,
    rollbackChecklist: [
      "Manter backup offline de dados por 90 dias",
      "Documentação de descomissionamento completa",
      "Contrato de datacenter com cláusula de extensão",
    ],
  },
];

export const risks: RiskItem[] = [
  { id: "r1", category: "Latência", description: "Aumento de latência durante migração impactando transações em tempo real", probability: 3, impact: 5, mitigation: "Conectividade dedicada (Direct Connect), edge caching, testes de latência contínuos, arquitetura multi-AZ na região mais próxima (São Paulo)" },
  { id: "r2", category: "Compliance", description: "Não conformidade com PCI-DSS, LGPD ou regulações do Banco Central", probability: 2, impact: 5, mitigation: "Auditoria pré-migração, provedor certificado PCI-DSS Level 1, criptografia em todas as camadas, DPO dedicado" },
  { id: "r3", category: "Vendor Lock-in", description: "Dependência excessiva de serviços proprietários de um único provedor", probability: 3, impact: 3, mitigation: "Uso de containers (Kubernetes), APIs abertas, IaC portátil (Terraform), estratégia multi-cloud para DR" },
  { id: "r4", category: "Custo", description: "Custos cloud acima do previsto por dimensionamento incorreto ou falta de governança", probability: 4, impact: 3, mitigation: "FinOps desde dia 1, alertas de billing, Reserved Instances, rightsizing automatizado, revisão mensal de custos" },
  { id: "r5", category: "DR/Failover", description: "Falha no failover automatizado resultando em downtime prolongado", probability: 2, impact: 5, mitigation: "Testes de DR trimestrais, runbooks automatizados, warm standby cross-region, RTO < 15 min validado" },
  { id: "r6", category: "Pessoas", description: "Resistência da equipe à mudança ou falta de skills em cloud", probability: 4, impact: 3, mitigation: "Programa de capacitação, certificações patrocinadas, parceiro de migração experiente, change management" },
  { id: "r7", category: "Dados", description: "Perda ou corrupção de dados durante migração", probability: 2, impact: 5, mitigation: "Replicação bidirecional, checksums, migração incremental, janelas de manutenção, backup 3-2-1" },
];

export const speakerNotes: Record<string, string> = {
  "cover": "Boa tarde a todos. Hoje vamos apresentar nossa proposta de transformação digital para a infraestrutura de TI. Este projeto visa não apenas modernizar nossa stack tecnológica, mas fundamentalmente melhorar nossa capacidade de competir no mercado de meios de pagamento, que exige cada vez mais agilidade e baixa latência.",
  
  "diagnostico": "Nosso datacenter atual apresenta vulnerabilidades críticas. A sala de DR a apenas 15 metros não oferece proteção real contra desastres. Com 150 servidores majoritariamente físicos, nosso TCO está acima do mercado e a capacidade de scaling é limitada. O tempo de recuperação atual (RTO) de 4-8 horas é inaceitável para uma operadora de cartões.",
  
  "metricas": "Estas são as métricas e premissas que baseiam nossa análise. Processamos em média 850 transações por segundo nos horários de pico, com crescimento anual de 25%. Nosso custo atual de datacenter é de aproximadamente R$ 180.000/mês considerando hardware, energia, refrigeração, equipe dedicada e licenças. O TCO anualizado está em torno de R$ 2.7 milhões.",
  
  "modelos-migracao": "Existem três abordagens principais para migração. O Lift & Shift é o mais rápido mas não otimiza custos. O Replatform moderniza parcialmente. O Refactor, embora mais caro inicialmente, oferece o melhor ROI a longo prazo. Para nossa empresa, recomendamos uma abordagem híbrida: Lift & Shift para sistemas legados estáveis e Replatform para o core de pagamentos.",
  
  "comparacao-cloud": "Avaliamos os três grandes provedores. A AWS lidera em maturidade e tem a região de São Paulo mais estabelecida. O Azure tem forte integração com ecossistema Microsoft. O GCP se destaca em analytics e ML. Para nosso caso, recomendamos AWS como provedor primário pela maturidade em serviços financeiros e presença regional, com Azure como secondary para DR cross-provider.",
  
  "arquitetura-1": "A Opção 1, Híbrida com burst para cloud, mantém workloads sensíveis on-prem enquanto usa a cloud para scaling em picos. Isso minimiza o risco inicial mas mantém custos de datacenter. É uma boa opção de transição mas não é o estado final ideal.",
  
  "arquitetura-2": "A Opção 2, Full-cloud com Multi-AZ e DR cross-region, é nossa recomendação final. Elimina completamente o datacenter, oferece alta disponibilidade nativa e permite scaling ilimitado. O custo operacional é menor a médio prazo e a agilidade para novos produtos é muito superior.",
  
  "seguranca": "A segurança é não-negociável no setor de pagamentos. Implementaremos criptografia AES-256 em repouso e TLS 1.3 em trânsito. O gerenciamento de chaves será via HSM dedicado (CloudHSM). A segmentação de rede com security groups e NACLs isola cada camada. WAF e Shield protegem contra DDoS. SIEM centralizado com alertas em tempo real.",
  
  "custos": "Apresentamos três cenários de custo. No conservador, com 80 VMs, gastamos entre R$ 45-65k/mês. No moderado, R$ 70-95k/mês. No agressivo, R$ 95-140k/mês. Comparado ao custo atual de R$ 180k/mês do datacenter, mesmo o cenário agressivo representa economia. A calculadora interativa permite ajustar as premissas em tempo real.",
  
  "migracao": "O plano de migração em 4 fases totaliza aproximadamente 36 semanas. Cada fase tem critérios claros de sucesso e procedimentos de rollback. O piloto com o gateway de pagamento é crítico para validar premissas de latência antes de comprometer a migração completa.",
  
  "riscos": "Identificamos 7 riscos principais. Os de maior impacto são latência, compliance e perda de dados — todos com probabilidade baixa graças às mitigações propostas. O simulador interativo permite visualizar diferentes cenários de risco vs custo de mitigação.",
  
  "governanca": "A governança pós-migração é tão importante quanto a migração em si. Propomos políticas de IAM com least privilege, tagging obrigatório para cost allocation, alertas de billing e revisão trimestral de arquitetura. O FinOps será uma prática contínua, não um projeto.",
  
  "kpis": "Os 3 KPIs fundamentais pós-migração: Latência p95 das transações (meta < 50ms), Disponibilidade do serviço (meta 99.99%, ou seja, < 52 min de downtime/ano), e Custo por transação (meta de redução de 40% em 12 meses). Estes KPIs serão monitorados em dashboards em tempo real.",
  
  "terraform": "Este é um exemplo simplificado de IaC com Terraform para provisionar a infraestrutura base: VPC com subnets públicas e privadas, Auto Scaling Group e RDS PostgreSQL Multi-AZ. Todo o código será versionado no Git e aplicado via pipeline CI/CD.",
  
  "cicd": "O pipeline CI/CD proposto utiliza GitHub Actions com stages de build, test, security scan e deploy. O deploy para produção requer aprovação manual. Testes de integração rodam automaticamente em ambiente de staging antes de qualquer promoção.",
  
  "encerramento": "Em resumo: a migração para cloud não é mais uma questão de 'se', mas de 'quando'. Nossa proposta oferece um caminho seguro, gradual e mensurável para transformar a infraestrutura. Os próximos passos são: aprovação do budget, kick-off da Fase 0 e contratação da conectividade dedicada. Estamos à disposição para perguntas.",
};
