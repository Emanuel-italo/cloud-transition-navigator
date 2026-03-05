import { SlideData } from "@/types/presentation";
import CoverSlide from "@/slides/CoverSlide";
import DiagnosticoSlide from "@/slides/DiagnosticoSlide";
import MetricasSlide from "@/slides/MetricasSlide";
import MigrationModelsSlide from "@/slides/MigrationModelsSlide";
import CloudComparisonSlide from "@/slides/CloudComparisonSlide";
import ArchitectureSlide1 from "@/slides/ArchitectureSlide1";
import ArchitectureSlide2 from "@/slides/ArchitectureSlide2";
import SecuritySlide from "@/slides/SecuritySlide";
import CostSlide from "@/slides/CostSlide";
import MigrationPlanSlide from "@/slides/MigrationPlanSlide";
import RiskSlide from "@/slides/RiskSlide";
import GovernanceSlide from "@/slides/GovernanceSlide";
import KPIsSlide from "@/slides/KPIsSlide";
import TerraformSlide from "@/slides/TerraformSlide";
import CICDSlide from "@/slides/CICDSlide";
import ClosingSlide from "@/slides/ClosingSlide";

export const slides: SlideData[] = [
  { id: "cover", title: "Capa", section: "Introdução", speakerNotes: "", component: CoverSlide },
  { id: "diagnostico", title: "Mapa de Problemas", section: "Diagnóstico", speakerNotes: "", component: DiagnosticoSlide },
  { id: "metricas", title: "Métricas e Premissas", section: "Diagnóstico", speakerNotes: "", component: MetricasSlide },
  { id: "modelos-migracao", title: "Modelos de Migração", section: "Solução", speakerNotes: "", component: MigrationModelsSlide },
  { id: "comparacao-cloud", title: "Comparação de Provedores", section: "Solução", speakerNotes: "", component: CloudComparisonSlide },
  { id: "arquitetura-1", title: "Arquitetura Híbrida", section: "Arquitetura", speakerNotes: "", component: ArchitectureSlide1 },
  { id: "arquitetura-2", title: "Full Cloud Multi-AZ", section: "Arquitetura", speakerNotes: "", component: ArchitectureSlide2 },
  { id: "seguranca", title: "Plano de Segurança", section: "Segurança", speakerNotes: "", component: SecuritySlide },
  { id: "custos", title: "Calculadora de Custos", section: "Custos", speakerNotes: "", component: CostSlide },
  { id: "migracao", title: "Fases da Migração", section: "Migração", speakerNotes: "", component: MigrationPlanSlide },
  { id: "riscos", title: "Riscos e Simulador", section: "Riscos", speakerNotes: "", component: RiskSlide },
  { id: "governanca", title: "Governança", section: "Governança", speakerNotes: "", component: GovernanceSlide },
  { id: "kpis", title: "KPIs Pós-Migração", section: "Pós-Migração", speakerNotes: "", component: KPIsSlide },
  { id: "terraform", title: "Exemplo Terraform", section: "IaC", speakerNotes: "", component: TerraformSlide },
  { id: "cicd", title: "Pipeline CI/CD", section: "DevOps", speakerNotes: "", component: CICDSlide },
  { id: "encerramento", title: "Próximos Passos", section: "Encerramento", speakerNotes: "", component: ClosingSlide },
];
