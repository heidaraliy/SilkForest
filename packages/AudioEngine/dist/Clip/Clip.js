// apps/silkforest-web/src/components/audioengine/Clip/Clip.tsx
import React, { useRef, useEffect, useState, memo } from "react";
import { ResizableBox } from "react-resizable";
import { Draggable } from "@hello-pangea/dnd";
import "react-resizable/css/styles.css";
const Clip = ({ clip, zoomLevel, onClipDrag, onClipResize, index, }) => {
    const unitWidth = 50 * zoomLevel;
    const { id, start, duration, fileUrl, name, trackId } = clip;
    const [isPlaying, setIsPlaying] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const audioRef = useRef(null);
    const handleDoubleClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleEnded = () => setIsPlaying(false);
            audio.addEventListener("ended", handleEnded);
            return () => {
                audio.removeEventListener("ended", handleEnded);
            };
        }
    }, []);
    const handleResizeStart = () => {
        setIsResizing(true);
    };
    const handleResizeStop = (event, { size }) => {
        const newDuration = size.width / (50 * zoomLevel); // Assuming unitWidth = 50 * zoomLevel
        onClipResize(trackId, id, newDuration);
        setIsResizing(false);
    };
    const trackHeaderWidth = 112;
    return (React.createElement(Draggable, { draggableId: `clip-${id}`, index: index, isDragDisabled: isResizing }, (provided, snapshot) => (React.createElement("div", Object.assign({ className: `absolute top-0 ml-[6.97rem] ${snapshot.isDragging ? "opacity-50" : "opacity-100"}`, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: Object.assign({ left: start * unitWidth + trackHeaderWidth }, provided.draggableProps.style) }),
        React.createElement(ResizableBox, { width: duration * unitWidth, height: 48, axis: "x", resizeHandles: ["e"], minConstraints: [unitWidth, 48], onResizeStop: handleResizeStop, onResizeStart: handleResizeStart, handle: React.createElement("span", { className: "absolute right-0 top-0 h-full w-2 cursor-ew-resize", style: { zIndex: 10 } }) },
            React.createElement("div", { className: `h-full ${isPlaying ? "bg-green-500" : "bg-blue-500"} text-white rounded cursor-move flex items-center justify-start`, onDoubleClick: handleDoubleClick },
                React.createElement("p", { className: "truncate ml-2" }, name || `Clip ${id}`),
                fileUrl && React.createElement("audio", { ref: audioRef, src: fileUrl, preload: "auto" })))))));
};
export default memo(Clip);
//# sourceMappingURL=Clip.js.map