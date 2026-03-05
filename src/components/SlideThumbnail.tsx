import React from "react";
import { usePresentationContext } from "@/contexts/PresentationContext";

interface SlideThumbnailProps {
  index: number;
  title: string;
  section: string;
}

const SlideThumbnail: React.FC<SlideThumbnailProps> = ({ index, title, section }) => {
  const { currentSlide, setCurrentSlide } = usePresentationContext();
  const isActive = currentSlide === index;

  return (
    <button
      onClick={() => setCurrentSlide(index)}
      className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
        isActive ? "bg-primary/15 border border-primary/40" : "hover:bg-secondary border border-transparent"
      }`}
      aria-label={`Ir para slide ${index + 1}: ${title}`}
    >
      <div className="flex items-start gap-2.5">
        <span className={`text-xs font-mono mt-0.5 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <p className={`text-xs font-medium truncate ${isActive ? "text-primary" : "text-foreground"}`}>{title}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{section}</p>
        </div>
      </div>
    </button>
  );
};

export default SlideThumbnail;
