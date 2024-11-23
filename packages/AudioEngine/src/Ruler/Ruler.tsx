import React from "react";

interface RulerProps {
  zoomLevel: number;
  divisions: number;
}

const Ruler: React.FC<RulerProps> = ({ zoomLevel, divisions }) => {
  const unitWidth = 100 * zoomLevel;
  const trackHeaderWidth = 112; // Width of the track header

  return (
    <div
      className="flex h-8 py-2 bg-slate-700 text-white text-xs border-t-2 border-b-2 border-slate-400 font-arimo font-bold"
      style={{ minWidth: `${divisions * unitWidth + trackHeaderWidth}px` }}
    >
      {/* Empty space for the track names */}
      <div style={{ width: trackHeaderWidth }}></div>
      {Array.from({ length: divisions }, (_, i) => i + 1).map((division) => (
        <div
          key={division}
          style={{ width: unitWidth, minWidth: unitWidth }}
          className="border-r border-slate-600 flex items-center justify-center"
        >
          {division}
        </div>
      ))}
    </div>
  );
};

export default Ruler;
