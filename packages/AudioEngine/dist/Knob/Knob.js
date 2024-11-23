// src/components/Knob/Knob.tsx
import React, { useRef, useState } from "react";
const Knob = ({ size, min, max, value, onChange }) => {
    const knobRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const radius = size / 2;
    const strokeWidth = 4;
    const center = radius;
    const minAngle = -135;
    const maxAngle = 135;
    // Convert value to angle
    const valueToAngle = (value) => {
        const ratio = (value - min) / (max - min);
        return minAngle + ratio * (maxAngle - minAngle);
    };
    // Convert angle to value
    const angleToValue = (angle) => {
        const ratio = (angle - minAngle) / (maxAngle - minAngle);
        return min + ratio * (max - min);
    };
    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp, { once: true });
    };
    const handleMouseMove = (e) => {
        if (!isDragging || !knobRef.current)
            return;
        const rect = knobRef.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        let newAngle = angle;
        if (newAngle < minAngle)
            newAngle = minAngle;
        if (newAngle > maxAngle)
            newAngle = maxAngle;
        const newValue = angleToValue(newAngle);
        onChange(newValue);
    };
    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
    };
    const angle = valueToAngle(value);
    return (React.createElement("svg", { width: size, height: size, onMouseDown: handleMouseDown, style: { cursor: "pointer" } },
        React.createElement("circle", { cx: center, cy: center, r: radius - strokeWidth, fill: "#3B82F6", stroke: "#1F2937", strokeWidth: strokeWidth }),
        React.createElement("line", { x1: center, y1: center, x2: center + (radius - strokeWidth) * Math.cos((angle * Math.PI) / 180), y2: center + (radius - strokeWidth) * Math.sin((angle * Math.PI) / 180), stroke: "#FFFFFF", strokeWidth: strokeWidth, strokeLinecap: "round" }),
        React.createElement("circle", { ref: knobRef, cx: center, cy: center, r: radius, fill: "transparent" })));
};
export default Knob;
//# sourceMappingURL=Knob.js.map