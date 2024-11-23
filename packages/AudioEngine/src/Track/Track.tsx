// apps/silkforest-web/src/components/audioengine/Track/Track.tsx

import React, { useState } from "react";
import Clip from "../Clip/Clip";
import { Droppable } from "@hello-pangea/dnd";
import { ClipData, TrackData } from "../types";

interface TrackProps {
  track: TrackData;
  zoomLevel: number;
  onClipDrag: (trackId: string, clipId: string, newStart: number) => void;
  onClipResize: (trackId: string, clipId: string, newDuration: number) => void;
  index: number;
}

const Track: React.FC<TrackProps> = ({
  track,
  zoomLevel,
  onClipDrag,
  onClipResize,
  index,
}) => {
  const [trackMuted, setTrackMuted] = useState(false);

  const handleMuteToggle = () => {
    setTrackMuted(!trackMuted);
    // TODO: Implement mute functionality (e.g., adjust track volume)
  };

  return (
    <Droppable droppableId={`track-${track.id}`} type="CLIP">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`flex h-12 border-b border-slate-700 ${
            snapshot.isDraggingOver ? "bg-slate-700" : "bg-slate-900"
          }`}
        >
          {/* Track Header: Name and Mute Button */}
          <div className="sticky flex flex-col left-0 z-10 w-28 h-full bg-gray-800 items-start justify-start border-slate-700 border-r-2">
            {/* Track Name */}
            <span className="text-slate-400 text-xs font-bold mb-6 mt-1 text-left ml-1">
              {track.name}
            </span>

            {/* Mute Toggle Button */}
            <button
              className="absolute mt-[1.9rem] text-[0.45rem] cursor-pointer ml-2 opacity-80"
              onClick={handleMuteToggle}
              aria-label={`Mute ${track.name}`}
            >
              {trackMuted ? "🔴" : "🟢"}
            </button>
          </div>

          {/* Clips Container */}
          <div className="h-full flex-1 relative">
            {track.clips.map((clip, index) => (
              <Clip
                key={clip.id}
                clip={clip}
                zoomLevel={zoomLevel}
                onClipDrag={onClipDrag}
                onClipResize={onClipResize}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Track;
