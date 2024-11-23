// apps/silkforest-web/src/components/audioengine/TimelineEditor/Timeline.tsx

import React, { useEffect } from "react";
import Track from "../Track/Track";
import Ruler from "../Ruler/Ruler";
import Playhead from "../Playhead/Playhead";
import Grid from "../Grid/Grid";
import { useTimeline } from "../context/TimelineContext";

const Timeline: React.FC = () => {
  const {
    tracks,
    setTracks,
    zoomLevel,
    playheadPosition,
    setPlayheadPosition,
    isPlaying,
    tempo,
    timeSignature,
  } = useTimeline();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setPlayheadPosition((prev) => prev + 0.1 * zoomLevel); // Adjust based on zoom
      }, 100); // Update every 100ms
    }

    return () => clearInterval(interval);
  }, [isPlaying, zoomLevel, setPlayheadPosition]);

  const handleClipDrag = (
    trackId: string,
    clipId: string,
    newStart: number
  ) => {
    setTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId
          ? {
              ...track,
              clips: track.clips.map((clip) =>
                clip.id === clipId ? { ...clip, start: newStart } : clip
              ),
            }
          : track
      )
    );
  };

  const handleClipResize = (
    trackId: string,
    clipId: string,
    newDuration: number
  ) => {
    setTracks((prevTracks) =>
      prevTracks.map((track) =>
        track.id === trackId
          ? {
              ...track,
              clips: track.clips.map((clip) =>
                clip.id === clipId ? { ...clip, duration: newDuration } : clip
              ),
            }
          : track
      )
    );
  };

  const divisions = 1000;
  const unitWidth = 200 * zoomLevel;
  const trackHeight = 48;
  const [beatsPerBar, beatValue] = timeSignature.split("/").map(Number);
  const secondsPerBeat = 60 / tempo;
  const barDuration = secondsPerBeat * beatsPerBar;

  return (
    <div className="flex-1 h-full overflow-hidden bg-slate-900">
      {/* Timeline Content */}
      <div className="relative h-full overflow-auto">
        {/* Grid */}
        <div
          className="relative"
          style={{
            minWidth: `${divisions * unitWidth}px`,
            minHeight: `${tracks.length * trackHeight}px`,
          }}
        >
          <div className="sticky top-0 z-20 bg-slate-700">
            {/* Ruler */}
            <Ruler zoomLevel={zoomLevel} divisions={divisions} />
          </div>
          <Grid
            divisions={divisions}
            unitWidth={unitWidth}
            height={tracks.length * trackHeight}
          />
          {/* Playhead */}
          <Playhead position={playheadPosition} zoomLevel={zoomLevel} />
          {/* Tracks Container */}
          <div className="relative">
            {tracks.map((track, index) => (
              <Track
                key={track.id}
                track={track}
                zoomLevel={zoomLevel}
                onClipDrag={handleClipDrag}
                onClipResize={handleClipResize}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
