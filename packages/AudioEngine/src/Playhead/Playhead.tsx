import React from "react";

interface PlayheadProps {
  position: number;
  zoomLevel: number;
}

const Playhead: React.FC<PlayheadProps> = ({ position, zoomLevel }) => {
  const unitWidth = 50 * zoomLevel;
  const left = position * unitWidth;
  const trackHeaderWidth = 112; // Width of the track header (w-28 class)

  return (
    <div
      className="absolute top-0 bottom-0 w-[0.075rem] bg-red-500"
      style={{ left: left + trackHeaderWidth, zIndex: 5 }}
    />
  );
};

export default Playhead;
