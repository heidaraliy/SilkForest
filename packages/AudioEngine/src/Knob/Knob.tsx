import React, { useRef, useState } from "react";

interface KnobProps {
  size: number; // Diameter of the knob in pixels
  min: number; // Minimum value (e.g., 0)
  max: number; // Maximum value (e.g., 1)
  value: number; // Current value
  onChange: (value: number) => void;
}

const Knob: React.FC<KnobProps> = ({ size, min, max, value, onChange }) => {
  const knobRef = useRef<SVGCircleElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const radius = size / 2;
  const strokeWidth = 4;
  const center = radius;
  const minAngle = -135;
  const maxAngle = 135;

  // Convert value to angle
  const valueToAngle = (value: number) => {
    const ratio = (value - min) / (max - min);
    return minAngle + ratio * (maxAngle - minAngle);
  };

  // Convert angle to value
  const angleToValue = (angle: number) => {
    const ratio = (angle - minAngle) / (maxAngle - minAngle);
    return min + ratio * (max - min);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !knobRef.current) return;

    const rect = knobRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    let newAngle = angle;
    if (newAngle < minAngle) newAngle = minAngle;
    if (newAngle > maxAngle) newAngle = maxAngle;

    const newValue = angleToValue(newAngle);
    onChange(newValue);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const angle = valueToAngle(value);

  return (
    <svg
      width={size}
      height={size}
      onMouseDown={handleMouseDown}
      style={{ cursor: "pointer" }}
    >
      {/* Background Circle */}
      <circle
        cx={center}
        cy={center}
        r={radius - strokeWidth}
        fill="#3B82F6"
        stroke="#1F2937"
        strokeWidth={strokeWidth}
      />
      {/* Knob Indicator */}
      <line
        x1={center}
        y1={center}
        x2={center + (radius - strokeWidth) * Math.cos((angle * Math.PI) / 180)}
        y2={center + (radius - strokeWidth) * Math.sin((angle * Math.PI) / 180)}
        stroke="#FFFFFF"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Invisible Circle for Mouse Events */}
      <circle
        ref={knobRef}
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
      />
    </svg>
  );
};

export default Knob;
