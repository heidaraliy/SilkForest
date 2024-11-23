import React from "react";

interface GridProps {
  divisions: number;
  unitWidth: number;
  height: number;
}

const Grid: React.FC<GridProps> = ({ divisions, unitWidth }) => {
  const gridLines = [];
  const totalWidth = divisions * unitWidth;

  for (let i = 0; i <= divisions; i++) {
    gridLines.push(
      <div
        key={i}
        style={{
          position: "absolute",
          left: i * unitWidth,
          top: 0,
          height: "100%",
          bottom: 0,
          width: 1,
          backgroundColor: "#2D3748",
          zIndex: 1,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 1,
        width: totalWidth,
        height: "100%",
      }}
    >
      {gridLines}
    </div>
  );
};

export default Grid;
