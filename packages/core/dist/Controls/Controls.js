import React from "react";
import useTimeline from "@silkforest/audioengine";
const Controls = () => {
    const { tracks, setTracks, zoomLevel, setZoomLevel, playheadPosition, setPlayheadPosition, isPlaying, setIsPlaying, isRecording, setIsRecording, tempo, setTempo, timeSignature, setTimeSignature, } = useTimeline();
    const handleTempoChange = (e) => {
        const value = parseFloat(e.target.value);
        if (value >= 20 && value <= 300) {
            setTempo(value);
        }
    };
    const handleTimeSignatureChange = (e) => {
        const value = e.target.value;
        const regex = /^\d+\/\d+$/; // Simple regex to match 'numerator/denominator'
        if (regex.test(value)) {
            setTimeSignature(value);
        }
    };
    return (React.createElement("div", { className: "flex items-center space-x-2 p-2 bg-slate-700 select-none border-[0.1rem] border-slate-400 rounded-md shadow-xl" },
        React.createElement("h2", { className: "flex text-white text-xl font-vidaloka" }, "AudioEngine"),
        React.createElement("button", { className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "tune")),
        React.createElement("button", { className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "file_export")),
        React.createElement("button", { className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "save")),
        React.createElement("button", { onClick: onZoomIn, className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "zoom_in")),
        React.createElement("button", { onClick: onZoomOut, className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "zoom_out")),
        React.createElement("button", { onClick: onPlayPause, className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" }, isPlaying ? (React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "pause")) : (React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "play_arrow"))),
        React.createElement("button", { className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" },
            React.createElement("span", { className: "material-symbols-outlined mt-1 text-white" }, "content_cut")),
        React.createElement("button", { onClick: onRecordingStartStop, className: "border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100" }, isRecording ? (React.createElement("span", { className: "material-symbols-outlined mt-1 text-red-600" }, "radio_button_checked")) : (React.createElement("span", { className: "material-symbols-outlined mt-1 text-red-600" }, "radio_button_unchecked"))),
        React.createElement("div", { className: "flex justify-left items-center bg-gray-800 p-2 rounded-sm w-[7rem] h-8 border-[0.07rem] border-slate-400 pointer-events-none" },
            React.createElement("span", { className: "text-white text-lg font-vidaloka" }, "0:00:00"),
            React.createElement("span", { className: "relative bottom-2 left-[0.5rem] text-[0.4rem] text-white font-arimo" }, "M:S:CS")),
        React.createElement("div", { className: "flex items-center bg-gray-800 rounded-sm h-8 p-2 border-[0.07rem] border-slate-400" },
            React.createElement("input", { type: "number", value: tempo, onChange: handleTempoChange, className: "bg-slate-800 text-white text-lg font-vidaloka w-[3.1rem]", min: 20, max: 300 }),
            React.createElement("span", { className: "relative bottom-2 text-[0.4rem] text-white font-arimo" }, "Tempo")),
        React.createElement("div", { className: "flex items-center bg-gray-800 rounded-sm h-8 p-2 border-[0.07rem] border-slate-400" },
            React.createElement("input", { type: "text", value: timeSignature, onChange: handleTimeSignatureChange, className: "bg-slate-800 text-white text-lg font-vidaloka w-[3.1rem]" }),
            React.createElement("span", { className: "relative bottom-2 text-[0.4rem] text-white font-arimo" }, "Time"))));
};
export default Controls;
