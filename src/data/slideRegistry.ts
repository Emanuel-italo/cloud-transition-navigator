import { SlideData } from "@/types/presentation";
import DiagnosticoSlide from "@/slides/DiagnosticoSlide";
import MigrationModelsSlide from "@/slides/MigrationModelsSlide";
import ArchitectureSlide2 from "@/slides/ArchitectureSlide2";
import ClosingSlide from "@/slides/ClosingSlide";

export const slides: SlideData[] = [
  { 
    id: "diagnostico", 
    title: "Mapa de Problemas", 
    section: "Diagnóstico", // Aparecerá como o 1º item no menu
    speakerNotes: "", 
    component: DiagnosticoSlide 
  },
  { 
    id: "solucao", 
    title: "Modelos de Migração", 
    section: "Solução", // Aparecerá como o 2º item no menu
    speakerNotes: "", 
    component: MigrationModelsSlide 
  },
  { 
    id: "justificativa", 
    title: "Arquitetura Proposta", 
    section: "Justificativa", // Aparecerá como o 3º item no menu
    speakerNotes: "", 
    component: ArchitectureSlide2 
  },
  { 
    id: "conclusao", 
    title: "Próximos Passos", 
    section: "Conclusão", // Aparecerá como o 4º item no menu
    speakerNotes: "", 
    component: ClosingSlide 
  },
];