import React from "react";
import { usePresentationContext } from "@/contexts/PresentationContext";
import { speakerNotes } from "@/data/presentationData";

interface NotesPanel {
  slideId: string;
}

const NotesPanel: React.FC<NotesPanel> = ({ slideId }) => {
  const { showNotes } = usePresentationContext();
  if (!showNotes) return null;

  const notes = speakerNotes[slideId] || "Sem notas para este slide.";

  return (
    <div className="h-48 bg-card border-t border-border p-4 overflow-y-auto shrink-0">
      <h3 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">Notas do Orador</h3>
      <p className="text-sm text-secondary-foreground leading-relaxed">{notes}</p>
    </div>
  );
};

export default NotesPanel;
