// src/components/Mixer/Mixer.tsx

import React, { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import Knob from "../Knob/Knob";
import { MixerTrack } from "../types";
import MixConsoleConfigurator from "./MixConsoleConfigurator";

const Mixer: React.FC = () => {
  const { tracks } = useTimeline();

  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const [mixerTracks, setMixerTracks] = useState<MixerTrack[]>(
    tracks.map((track) => ({
      id: track.id,
      name: track.name,
      volume: 0.8, // Default volume (range: 0 to 1)
      isMuted: false,
      assignedSounds: [],
      effects: [],
    }))
  );

  const handleVolumeChange = (trackId: string, newVolume: number) => {
    setMixerTracks((prevTracks) =>
      prevTracks.map((track) => {
        if (track.id === trackId) {
          return { ...track, volume: newVolume };
        }
        return track;
      })
    );
  };

  return (
    <div className="h-full bg-gray-800">
      <div className="h-full flex flex-row p-4 space-x-2 overflow-x-auto">
        {/* render the mix console configurator */}
        <div className="sticky top-0 left-0 h-full z-10">
          <MixConsoleConfigurator
            selectedTrackId={selectedTrackId}
            mixerTracks={mixerTracks}
            setMixerTracks={setMixerTracks}
          />
        </div>
        {/* Render mixer tracks */}
        {mixerTracks.map((track) => (
          <div
            key={track.id}
            className="flex flex-col items-center bg-gray-700 rounded-md shadow-md"
          >
            {/* Track Name */}
            <div className="text-white text-xs font-bold mt-2 mx-1 text-center font-arimo w-14">
              {track.name}
            </div>
            {/* Volume Indicator and Spacer */}
            <div className="flex flex-row w-full flex-1 items-stretch mt-2 mb-2">
              {/* Spacer */}
              <div className="flex-1"></div>
              {/* Volume Indicator */}
              <div className="flex-1 flex items-stretch">
                <div className="w-full h-full relative bg-gray-600 rounded-sm overflow-hidden border-slate-800 border-2">
                  <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                      height: `${track.volume * 100}%`,
                      backgroundColor:
                        track.volume <= 0.8
                          ? "green"
                          : track.volume <= 0.9
                          ? "yellow"
                          : "red",
                    }}
                  ></div>
                </div>
              </div>
              {/* Spacer */}
              <div className="flex-1"></div>
            </div>
            {/* Knob */}
            <div className="mb-2">
              <Knob
                size={30}
                min={0}
                max={1}
                value={track.volume}
                onChange={(value) => handleVolumeChange(track.id, value)}
              />
            </div>
            {/* Buttons */}
            <div className="flex flex-col space-y-1 mb-2 font-arimo">
              <button
                onClick={() => {
                  setMixerTracks((prevTracks) =>
                    prevTracks.map((t) =>
                      t.id === track.id ? { ...t, isMuted: !t.isMuted } : t
                    )
                  );
                }}
                className="text-white text-xs bg-gray-600 rounded px-2 py-1"
              >
                {track.isMuted ? "Unmute" : "Mute"}
              </button>
              <button
                onClick={() => {
                  setSelectedTrackId(track.id); // Set the selected track ID
                }}
                className="text-white text-xs bg-gray-600 rounded px-2 py-1"
              >
                Add FX
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixer;
