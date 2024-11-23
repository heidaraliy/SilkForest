// apps/silkforest-web/src/components/audioengine/TimelineEditor/Timeline.tsx
import React, { useEffect } from "react";
import Track from "../Track/Track";
import Ruler from "../Ruler/Ruler";
import Playhead from "../Playhead/Playhead";
import Grid from "../Grid/Grid";
import { useTimeline } from "../context/TimelineContext";
const Timeline = () => {
    const { tracks, setTracks, zoomLevel, playheadPosition, setPlayheadPosition, isPlaying, tempo, timeSignature, } = useTimeline();
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setPlayheadPosition((prev) => prev + 0.1 * zoomLevel); // Adjust based on zoom
            }, 100); // Update every 100ms
        }
        return () => clearInterval(interval);
    }, [isPlaying, zoomLevel, setPlayheadPosition]);
    const handleClipDrag = (trackId, clipId, newStart) => {
        setTracks((prevTracks) => prevTracks.map((track) => track.id === trackId
            ? Object.assign(Object.assign({}, track), { clips: track.clips.map((clip) => clip.id === clipId ? Object.assign(Object.assign({}, clip), { start: newStart }) : clip) }) : track));
    };
    const handleClipResize = (trackId, clipId, newDuration) => {
        setTracks((prevTracks) => prevTracks.map((track) => track.id === trackId
            ? Object.assign(Object.assign({}, track), { clips: track.clips.map((clip) => clip.id === clipId ? Object.assign(Object.assign({}, clip), { duration: newDuration }) : clip) }) : track));
    };
    const divisions = 1000;
    const unitWidth = 200 * zoomLevel;
    const trackHeight = 48;
    const [beatsPerBar, beatValue] = timeSignature.split("/").map(Number);
    const secondsPerBeat = 60 / tempo;
    const barDuration = secondsPerBeat * beatsPerBar;
    return (React.createElement("div", { className: "flex-1 h-full overflow-hidden bg-slate-900" },
        React.createElement("div", { className: "relative h-full overflow-auto" },
            React.createElement("div", { className: "relative", style: {
                    minWidth: `${divisions * unitWidth}px`,
                    minHeight: `${tracks.length * trackHeight}px`,
                } },
                React.createElement("div", { className: "sticky top-0 z-20 bg-slate-700" },
                    React.createElement(Ruler, { zoomLevel: zoomLevel, divisions: divisions })),
                React.createElement(Grid, { divisions: divisions, unitWidth: unitWidth, height: tracks.length * trackHeight }),
                React.createElement(Playhead, { position: playheadPosition, zoomLevel: zoomLevel }),
                React.createElement("div", { className: "relative" }, tracks.map((track, index) => (React.createElement(Track, { key: track.id, track: track, zoomLevel: zoomLevel, onClipDrag: handleClipDrag, onClipResize: handleClipResize, index: index }))))))));
};
export default Timeline;
//# sourceMappingURL=Timeline.js.map