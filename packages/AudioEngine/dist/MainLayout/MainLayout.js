// apps/silkforest-web/src/components/MainLayout.tsx
import React from "react";
import Timeline from "../TimelineEditor/Timeline";
import Controls from "../Controls/Controls";
import { DragDropContext } from "@hello-pangea/dnd";
import { useTimeline } from "../context/TimelineContext";
import SoundBank from "../SoundBank/SoundBank";
import Mixer from "../Mixer/Mixer";
import Split from "react-split";
const MainLayout = () => {
    const { soundBank, setTracks, setSoundBank, playheadPosition, isPlaying, setIsPlaying, tracks, zoomLevel, setZoomLevel, isRecording, setIsRecording, } = useTimeline();
    const handleDragEnd = (result) => {
        const { source, destination, draggableId, type } = result;
        if (!destination) {
            return;
        }
        if (type === "SOUND") {
            // Existing code for dragging sounds from SoundBank to tracks
        }
        else if (type === "CLIP") {
            const sourceTrackId = source.droppableId.replace("track-", "");
            const destinationTrackId = destination.droppableId.replace("track-", "");
            const clipId = draggableId.replace("clip-", "");
            if (sourceTrackId !== destinationTrackId) {
                setTracks((prevTracks) => {
                    let clipToMove;
                    const updatedTracks = prevTracks.map((track) => {
                        if (track.id === sourceTrackId) {
                            clipToMove = track.clips.find((clip) => clip.id === clipId);
                            return Object.assign(Object.assign({}, track), { clips: track.clips.filter((clip) => clip.id !== clipId) });
                        }
                        else if (track.id === destinationTrackId && clipToMove) {
                            return Object.assign(Object.assign({}, track), { clips: [
                                    ...track.clips,
                                    Object.assign(Object.assign({}, clipToMove), { trackId: destinationTrackId }),
                                ] });
                        }
                        else {
                            return track;
                        }
                    });
                    return updatedTracks;
                });
            }
        }
    };
    return (React.createElement("div", { className: "flex flex-col flex-1 overflow-hidden" },
        React.createElement("div", { className: "flex-none" },
            React.createElement(Controls, null)),
        React.createElement("div", { className: "flex flex-1 flex-col overflow-hidden" },
            React.createElement(Split, { direction: "vertical", sizes: [60, 40], minSize: 100, gutterSize: 5, className: "flex flex-1 flex-col overflow-hidden", gutter: (index, direction) => {
                    const gutter = document.createElement("div");
                    gutter.className =
                        direction === "horizontal"
                            ? "gutter-horizontal"
                            : "gutter-vertical";
                    return gutter;
                } },
                React.createElement("div", { className: "flex flex-1 overflow-hidden" },
                    React.createElement(Split, { direction: "horizontal", sizes: [25, 75], minSize: 200, gutterSize: 5, className: "flex flex-1 overflow-hidden", gutter: (index, direction) => {
                            const gutter = document.createElement("div");
                            gutter.className =
                                direction === "vertical"
                                    ? "gutter-vertical"
                                    : "gutter-horizontal";
                            return gutter;
                        } },
                        React.createElement(DragDropContext, { onDragEnd: handleDragEnd },
                            React.createElement(SoundBank, null),
                            React.createElement(Timeline, null)))),
                React.createElement("div", { className: "flex-none h-full overflow-hidden" },
                    React.createElement(Mixer, null))))));
};
export default MainLayout;
//# sourceMappingURL=MainLayout.js.map