import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface PresentationContextType {
  currentSlide: number;
  totalSlides: number;
  setCurrentSlide: (n: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  showNotes: boolean;
  toggleNotes: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

const PresentationContext = createContext<PresentationContextType | null>(null);

export const usePresentationContext = () => {
  const ctx = useContext(PresentationContext);
  if (!ctx) throw new Error("usePresentationContext must be used within PresentationProvider");
  return ctx;
};

export const PresentationProvider: React.FC<{ totalSlides: number; children: React.ReactNode }> = ({ totalSlides, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((p) => Math.min(p + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((p) => Math.max(p - 1, 0));
  }, []);

  const toggleNotes = useCallback(() => setShowNotes((p) => !p), []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
      if (e.key === "Escape" && isFullscreen) { document.exitFullscreen(); }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      if (e.key === "n") { toggleNotes(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide, isFullscreen, toggleFullscreen, toggleNotes]);

  return (
    <PresentationContext.Provider value={{ currentSlide, totalSlides, setCurrentSlide, nextSlide, prevSlide, showNotes, toggleNotes, isFullscreen, toggleFullscreen }}>
      {children}
    </PresentationContext.Provider>
  );
};
