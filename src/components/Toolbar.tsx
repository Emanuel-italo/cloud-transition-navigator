import React from "react";
import { usePresentationContext } from "@/contexts/PresentationContext";
import { ChevronLeft, ChevronRight, Maximize, Minimize, StickyNote, FileDown } from "lucide-react";

interface ToolbarProps {
  onExportPDF: () => void;
  slideTitle: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ onExportPDF, slideTitle }) => {
  const { currentSlide, totalSlides, nextSlide, prevSlide, showNotes, toggleNotes, isFullscreen, toggleFullscreen } = usePresentationContext();

  return (
    <div className="h-14 bg-card border-b border-border flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">CM</span>
        </div>
        <span className="text-sm font-semibold text-foreground">Cloud Migration</span>
        <span className="text-xs text-muted-foreground">— {slideTitle}</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 transition-colors" aria-label="Slide anterior">
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-xs font-mono text-muted-foreground min-w-[4rem] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 transition-colors" aria-label="Próximo slide">
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button onClick={toggleNotes} className={`p-2 rounded-lg transition-colors ${showNotes ? 'bg-primary/20 text-primary' : 'hover:bg-secondary text-foreground'}`} aria-label="Notas do orador" title="Notas (N)">
          <StickyNote className="w-4 h-4" />
        </button>
        <button onClick={toggleFullscreen} className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground" aria-label="Tela cheia" title="Tela cheia (F)">
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
        <button onClick={onExportPDF} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors" title="Exportar PDF">
          <FileDown className="w-3.5 h-3.5" />
          PDF
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
