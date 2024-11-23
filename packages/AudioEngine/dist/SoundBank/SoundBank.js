// apps/silkforest-web/src/components/SoundBank/SoundBank.tsx
import React, { useCallback, useEffect } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useTimeline } from "../context/TimelineContext";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
const SoundBank = () => {
    const { soundBank, setSoundBank } = useTimeline();
    const combinedControlNavHeight = window.innerHeight - 60.22 - 93 - 248;
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                const arrayBuffer = reader.result;
                const blob = new Blob([arrayBuffer], { type: file.type });
                const blobUrl = URL.createObjectURL(blob);
                const audio = new Audio(blobUrl);
                audio.addEventListener("loadedmetadata", () => {
                    const duration = audio.duration; // Duration in seconds
                    const newSound = {
                        id: uuidv4(),
                        name: file.name,
                        fileUrl: blobUrl,
                        duration: Math.round(duration),
                    };
                    setSoundBank((prevSoundBank) => [...prevSoundBank, newSound]);
                });
            };
            reader.readAsArrayBuffer(file);
        });
    }, [setSoundBank]);
    useEffect(() => {
        // Cleanup blob URLs when component unmounts or soundBank changes
        return () => {
            soundBank.forEach((sound) => {
                URL.revokeObjectURL(sound.fileUrl);
            });
        };
    }, [soundBank]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "audio/*": [],
        },
    });
    return (React.createElement("div", { className: "flex-none w-full h-full overflow-y-auto bg-slate-800 p-4 border-r-2 border-t-2 border-slate-400" },
        React.createElement("h2", { className: "flex text-white text-lg mb-4 font-vidaloka border-2 border-slate-400 rounded-md p-2 justify-center bg-slate-700" }, "SoundBank"),
        React.createElement("div", Object.assign({}, getRootProps(), { className: `border-2 border-dashed ${isDragActive ? "border-green-500" : "border-slate-400"} p-4 text-center text-slate-500 cursor-pointer mb-4` }),
            React.createElement("input", Object.assign({}, getInputProps())),
            isDragActive ? (React.createElement("p", { className: "font-arimo font-bold text-sm" },
                "Drop the audio files here...",
                React.createElement("br", null),
                React.createElement("br", null))) : (React.createElement("p", { className: "font-arimo font-bold text-sm" }, "Drag your audio or click here to upload sounds."))),
        soundBank.length === 0 && (React.createElement("p", { className: "text-slate-400 font-arimo font-bold text-sm" }, "No sounds uploaded yet.")),
        React.createElement(Droppable, { droppableId: "soundBank", isDropDisabled: true, type: "SOUND" }, (provided, snapshot) => (React.createElement("ul", Object.assign({ className: `space-y-2 ${snapshot.isDraggingOver ? "bg-slate-700" : "bg-slate-800"} p-2 rounded`, ref: provided.innerRef }, provided.droppableProps), soundBank.map((sound, index) => (React.createElement(Draggable, { key: sound.id, draggableId: `sound-${sound.id}`, index: index }, (provided, snapshot) => (React.createElement("li", Object.assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { className: `p-2 bg-slate-700 rounded cursor-pointer ${snapshot.isDragging ? "opacity-50" : "opacity-100"}` }),
            React.createElement("p", { className: "text-white truncate" }, sound.name),
            React.createElement("p", { className: "text-slate-400 text-xs" },
                "Duration: ",
                sound.duration,
                "s")))))))))));
};
export default SoundBank;
//# sourceMappingURL=SoundBank.js.map