import React from "react";
const Ruler = ({ zoomLevel, divisions }) => {
    const unitWidth = 100 * zoomLevel;
    const trackHeaderWidth = 112; // Width of the track header
    return (React.createElement("div", { className: "flex h-8 py-2 bg-slate-700 text-white text-xs border-t-2 border-b-2 border-slate-400 font-arimo font-bold", style: { minWidth: `${divisions * unitWidth + trackHeaderWidth}px` } },
        React.createElement("div", { style: { width: trackHeaderWidth } }),
        Array.from({ length: divisions }, (_, i) => i + 1).map((division) => (React.createElement("div", { key: division, style: { width: unitWidth, minWidth: unitWidth }, className: "border-r border-slate-600 flex items-center justify-center" }, division)))));
};
export default Ruler;
//# sourceMappingURL=Ruler.js.map