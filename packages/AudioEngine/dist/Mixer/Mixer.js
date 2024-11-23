// src/components/Mixer/Mixer.tsx
import React, { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import Knob from "../Knob/Knob";
const Mixer = () => {
    const { tracks } = useTimeline();
    const [mixerTracks, setMixerTracks] = useState(tracks.map((track) => ({
        id: track.id,
        name: track.name,
        volume: 0.8, // Default volume (range: 0 to 1)
        isMuted: false,
        assignedSounds: [],
        effects: [],
    })));
    const handleVolumeChange = (trackId, newVolume) => {
        setMixerTracks((prevTracks) => prevTracks.map((track) => {
            if (track.id === trackId) {
                return Object.assign(Object.assign({}, track), { volume: newVolume });
            }
            return track;
        }));
    };
    return (React.createElement("div", { className: "h-full overflow-x-auto bg-gray-800" },
        React.createElement("div", { className: "h-full flex flex-row p-4 space-x-2" }, mixerTracks.map((track) => (React.createElement("div", { key: track.id, className: "flex flex-col items-center bg-gray-700 rounded-md shadow-md" },
            React.createElement("div", { className: "text-white text-xs font-bold mt-2 w-16 text-center" }, track.name),
            React.createElement("div", { className: "flex flex-row w-full flex-1 items-stretch mt-2 mb-2" },
                React.createElement("div", { className: "flex-1" }),
                React.createElement("div", { className: "flex-1 flex items-stretch" },
                    React.createElement("div", { className: "w-full h-full relative bg-gray-600 rounded-md overflow-hidden" },
                        React.createElement("div", { className: "absolute bottom-0 left-0 w-full", style: {
                                height: `${track.volume * 100}%`,
                                backgroundColor: track.volume <= 0.8
                                    ? "green"
                                    : track.volume <= 0.9
                                        ? "yellow"
                                        : "red",
                            } }))),
                React.createElement("div", { className: "flex-1" })),
            React.createElement("div", { className: "mb-2" },
                React.createElement(Knob, { size: 30, min: 0, max: 1, value: track.volume, onChange: (value) => handleVolumeChange(track.id, value) })),
            React.createElement("div", { className: "flex flex-col space-y-1 mb-2" },
                React.createElement("button", { onClick: () => {
                        setMixerTracks((prevTracks) => prevTracks.map((t) => t.id === track.id ? Object.assign(Object.assign({}, t), { isMuted: !t.isMuted }) : t));
                    }, className: "text-white text-xs bg-gray-600 rounded px-2 py-1" }, track.isMuted ? "Unmute" : "Mute"),
                React.createElement("button", { className: "text-white text-xs bg-gray-600 rounded px-2 py-1" }, "Add FX"))))))));
};
export default Mixer;
//# sourceMappingURL=Mixer.js.map