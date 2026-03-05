import React, { useRef, useEffect, useState } from "react";

interface ScaledSlideProps {
  children: React.ReactNode;
  className?: string;
}

const ScaledSlide: React.FC<ScaledSlideProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
      }
    };
    updateScale();
    const obs = new ResizeObserver(updateScale);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="slide-scaled"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="w-full h-full bg-background p-16 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScaledSlide;
