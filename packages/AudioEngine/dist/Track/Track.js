// apps/silkforest-web/src/components/audioengine/Track/Track.tsx
import React, { useState } from "react";
import Clip from "../Clip/Clip";
import { Droppable } from "@hello-pangea/dnd";
const Track = ({ track, zoomLevel, onClipDrag, onClipResize, index, }) => {
    const [trackMuted, setTrackMuted] = useState(false);
    const handleMuteToggle = () => {
        setTrackMuted(!trackMuted);
        // TODO: Implement mute functionality (e.g., adjust track volume)
    };
    return (React.createElement(Droppable, { droppableId: `track-${track.id}`, type: "CLIP" }, (provided, snapshot) => (React.createElement("div", Object.assign({ ref: provided.innerRef }, provided.droppableProps, { className: `flex h-12 border-b border-slate-700 ${snapshot.isDraggingOver ? "bg-slate-700" : "bg-slate-900"}` }),
        React.createElement("div", { className: "sticky flex flex-col left-0 z-10 w-28 h-full bg-gray-800 items-start justify-start border-slate-700 border-r-2" },
            React.createElement("span", { className: "text-slate-400 text-xs font-bold mb-6 mt-1 text-left ml-1" }, track.name),
            React.createElement("button", { className: "absolute mt-[1.9rem] text-[0.45rem] cursor-pointer ml-2 opacity-80", onClick: handleMuteToggle, "aria-label": `Mute ${track.name}` }, trackMuted ? "🔴" : "🟢")),
        React.createElement("div", { className: "h-full flex-1 relative" },
            track.clips.map((clip, index) => (React.createElement(Clip, { key: clip.id, clip: clip, zoomLevel: zoomLevel, onClipDrag: onClipDrag, onClipResize: onClipResize, index: index }))),
            provided.placeholder)))));
};
export default Track;
//# sourceMappingURL=Track.js.map