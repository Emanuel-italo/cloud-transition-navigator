import React from "react";
import { PresentationProvider, usePresentationContext } from "@/contexts/PresentationContext";
import { slides } from "@/data/slideRegistry";
import Toolbar from "@/components/Toolbar";
import SlideThumbnail from "@/components/SlideThumbnail";
import NotesPanel from "@/components/NotesPanel";
import { exportPDF } from "@/utils/exportPDF";
import { ScrollArea } from "@/components/ui/scroll-area";

const SlideDeckInner: React.FC = () => {
  const { currentSlide, isFullscreen } = usePresentationContext();
  const current = slides[currentSlide];
  const SlideComponent = current.component;

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-background z-50">
        <SlideComponent />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Toolbar onExportPDF={exportPDF} slideTitle={current.title} />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-card shrink-0">
          <ScrollArea className="h-full">
            <div className="p-3 space-y-1">
              {slides.map((s, i) => (
                <SlideThumbnail key={s.id} index={i} title={s.title} section={s.section} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <SlideComponent />
          </div>
          <NotesPanel slideId={current.id} />
        </div>
      </div>
    </div>
  );
};

const SlideDeck: React.FC = () => (
  <PresentationProvider totalSlides={slides.length}>
    <SlideDeckInner />
  </PresentationProvider>
);

export default SlideDeck;
