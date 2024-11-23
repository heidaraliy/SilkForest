// src/components/MixConsoleConfigurator/MixConsoleConfigurator.tsx

import React from "react";
import { useTimeline } from "../context/TimelineContext";
import Knob from "../Knob/Knob";
import { MixerTrack } from "../types";

interface MixConsoleConfiguratorProps {
  selectedTrackId: string | null;
  mixerTracks: MixerTrack[];
  setMixerTracks: React.Dispatch<React.SetStateAction<MixerTrack[]>>;
}

const MixConsoleConfigurator: React.FC<MixConsoleConfiguratorProps> = ({
  selectedTrackId,
  mixerTracks,
  setMixerTracks,
}) => {
  if (!selectedTrackId) {
    return (
      <div className="w-64 h-full bg-gray-700 p-2 overflow-y-auto rounded-md border-2 border-slate-400">
        <h3 className="text-white text-sm font-bold mb-2 bg-slate-700 border-2 border-slate-400 rounded-md p-2">
          <div className="font-vidaloka text-lg">
            <span>MixConsole:</span>
            <span className="mx-1 text-[0.9rem] font-arimo">
              No track selected.
            </span>
          </div>
        </h3>
      </div>
    );
  }

  const track = mixerTracks.find((t) => t.id === selectedTrackId);
  if (!track) {
    return null;
  }

  const handlePanningChange = (newPanning: number) => {
    setMixerTracks((prevTracks) =>
      prevTracks.map((t) =>
        t.id === track.id ? { ...t, panning: newPanning } : t
      )
    );
  };

  return (
    <div className="w-64 h-full bg-gray-700 p-2 overflow-y-auto rounded-md">
      <h3 className="text-white text-sm font-bold mb-2 border-2 border-slate-400 rounded-md p-2">
        <div className="font-vidaloka text-lg">
          <span>MixConsole:</span>
          <span className="mx-1 text-[0.9rem] font-arimo">{track.name}</span>
        </div>
      </h3>

      {/* Panning Knob */}
      <div className="mb-4">
        <p className="text-white text-xs mb-1">Panning</p>
        <Knob
          size={30}
          min={-1}
          max={1}
          value={track.panning || 0}
          onChange={handlePanningChange}
        />
      </div>

      {/* Effects Grid */}
      <div>
        <p className="text-white text-xs mb-1">Effects</p>
        <div className="grid grid-cols-1 gap-2">
          {/* List of effects */}
          {track.effects.map((effect, index) => (
            <div
              key={index}
              className="bg-gray-600 text-white text-xs p-1 rounded"
            >
              {effect}
            </div>
          ))}
          {/* Add Effect Button */}
          <button
            onClick={() => {
              // Logic to add a new effect
              const newEffect = prompt("Enter effect name:");
              if (newEffect) {
                setMixerTracks((prevTracks) =>
                  prevTracks.map((t) =>
                    t.id === track.id
                      ? { ...t, effects: [...t.effects, newEffect] }
                      : t
                  )
                );
              }
            }}
            className="bg-blue-500 text-white text-xs p-1 rounded"
          >
            + Add Effect
          </button>
        </div>
      </div>

      {/* Additional Controls */}
      {/* You can add more knobs or controls here for EQ, etc. */}
    </div>
  );
};

export default MixConsoleConfigurator;
