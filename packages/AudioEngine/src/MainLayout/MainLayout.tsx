// apps/silkforest-web/src/components/MainLayout.tsx

import React from "react";
import Timeline from "../TimelineEditor/Timeline";
import Controls from "../Controls/Controls";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useTimeline } from "../context/TimelineContext";
import SoundBank from "../SoundBank/SoundBank";
import { v4 as uuidv4 } from "uuid";
import { ClipData } from "../types";
import Mixer from "../Mixer/Mixer";

import Split from "react-split";
import AudioEngineNavbar from "../AudioEngineNavbar/AudioEngineNavbar";

const MainLayout: React.FC = () => {
  const {
    soundBank,
    setTracks,
    setSoundBank,
    playheadPosition,
    isPlaying,
    setIsPlaying,
    tracks,
    zoomLevel,
    setZoomLevel,
    isRecording,
    setIsRecording,
  } = useTimeline();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "SOUND") {
      // Existing code for dragging sounds from SoundBank to tracks
    } else if (type === "CLIP") {
      const sourceTrackId = source.droppableId.replace("track-", "");
      const destinationTrackId = destination.droppableId.replace("track-", "");
      const clipId = draggableId.replace("clip-", "");

      if (sourceTrackId !== destinationTrackId) {
        setTracks((prevTracks) => {
          let clipToMove: ClipData | undefined;
          const updatedTracks = prevTracks.map((track) => {
            if (track.id === sourceTrackId) {
              clipToMove = track.clips.find((clip) => clip.id === clipId);
              return {
                ...track,
                clips: track.clips.filter((clip) => clip.id !== clipId),
              };
            } else if (track.id === destinationTrackId && clipToMove) {
              return {
                ...track,
                clips: [
                  ...track.clips,
                  {
                    ...clipToMove,
                    trackId: destinationTrackId,
                    // Optionally update the start time based on the drop position
                  },
                ],
              };
            } else {
              return track;
            }
          });
          return updatedTracks;
        });
      }
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Controls */}
      <div className="flex-none">
        <Controls />
      </div>
      {/* Main Content and Mixer */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Main Content Split */}
        <Split
          direction="vertical"
          sizes={[60, 40]}
          minSize={200}
          gutterSize={5}
          className="flex flex-1 flex-col overflow-hidden"
          gutter={(index, direction) => {
            const gutter = document.createElement("div");
            gutter.className =
              direction === "horizontal"
                ? "gutter-horizontal"
                : "gutter-vertical";
            return gutter;
          }}
        >
          {/* SoundBank and Timeline Split */}
          <div className="flex flex-1 overflow-hidden">
            <Split
              direction="horizontal"
              sizes={[25, 75]}
              minSize={200}
              gutterSize={5}
              className="flex flex-1 overflow-hidden"
              gutter={(index, direction) => {
                const gutter = document.createElement("div");
                gutter.className =
                  direction === "vertical"
                    ? "gutter-vertical"
                    : "gutter-horizontal";
                return gutter;
              }}
            >
              {/* SoundBank */}
              <DragDropContext onDragEnd={handleDragEnd}>
                <SoundBank />
                {/* Timeline */}
                <Timeline />
              </DragDropContext>
            </Split>
          </div>
          {/* Mixer */}
          <div className="flex-none h-full overflow-hidden">
            <Mixer />
          </div>
        </Split>
      </div>
    </div>
  );
};

export default MainLayout;
