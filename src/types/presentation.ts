export interface SlideData {
  id: string;
  title: string;
  section: string;
  speakerNotes: string;
  component: React.ComponentType;
}

export interface CostScenario {
  name: string;
  vms: number;
  storageTB: number;
  transferTBMonth: number;
  iops: number;
  rtpMinutes: number;
  rpoMinutes: number;
  monthlyCostMin: number;
  monthlyCostMax: number;
}

export interface MigrationPhase {
  id: string;
  name: string;
  objectives: string[];
  successCriteria: string[];
  estimatedWeeks: number;
  rollbackChecklist: string[];
}

export interface RiskItem {
  id: string;
  category: string;
  description: string;
  probability: number; // 1-5
  impact: number; // 1-5
  mitigation: string;
}
