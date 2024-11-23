// apps/silkforest-web/src/context/TimelineContext.tsx
import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
const TimelineContext = createContext(undefined);
export const TimelineProvider = ({ children, }) => {
    const [tracks, setTracks] = useState(Array.from({ length: 50 }, (_, index) => ({
        id: uuidv4(),
        name: `Track ${index + 1}`,
        clips: [],
    })));
    const [zoomLevel, setZoomLevel] = useState(1);
    const [playheadPosition, setPlayheadPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [soundBank, setSoundBank] = useState([]);
    const [tempo, setTempo] = useState(140);
    const [timeSignature, setTimeSignature] = useState("4/4");
    return (React.createElement(TimelineContext.Provider, { value: {
            tracks,
            setTracks,
            zoomLevel,
            setZoomLevel,
            playheadPosition,
            setPlayheadPosition,
            isPlaying,
            setIsPlaying,
            isRecording,
            setIsRecording,
            soundBank,
            setSoundBank,
            tempo,
            setTempo,
            timeSignature,
            setTimeSignature,
        } }, children));
};
export const useTimeline = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error("useTimeline must be used within a TimelineProvider");
    }
    return context;
};
//# sourceMappingURL=TimelineContext.js.map