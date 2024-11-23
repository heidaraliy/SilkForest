// apps/silkforest-web/src/components/audioengine/Clip/Clip.tsx

import React, { useRef, useEffect, useState, memo } from "react";
import { ResizableBox } from "react-resizable";
import { Draggable } from "@hello-pangea/dnd";
import "react-resizable/css/styles.css";
import { ClipData } from "../types";

interface ClipProps {
  clip: ClipData;
  zoomLevel: number;
  onClipDrag: (trackId: string, clipId: string, newStart: number) => void;
  onClipResize: (trackId: string, clipId: string, newDuration: number) => void;
  index: number;
}

const Clip: React.FC<ClipProps> = ({
  clip,
  zoomLevel,
  onClipDrag,
  onClipResize,
  index,
}) => {
  const unitWidth = 50 * zoomLevel;
  const { id, start, duration, fileUrl, name, trackId } = clip;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleDoubleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  const handleResizeStop = (event: any, { size }: any) => {
    const newDuration = size.width / (50 * zoomLevel); // Assuming unitWidth = 50 * zoomLevel
    onClipResize(trackId, id, newDuration);
    setIsResizing(false);
  };

  const trackHeaderWidth = 112;

  return (
    <Draggable
      draggableId={`clip-${id}`}
      index={index}
      isDragDisabled={isResizing}
    >
      {(provided, snapshot) => (
        <div
          className={`absolute top-0 ml-[6.97rem] ${
            snapshot.isDragging ? "opacity-50" : "opacity-100"
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            left: start * unitWidth + trackHeaderWidth, // Adjust based on unit width (50px per unit)
            ...provided.draggableProps.style,
          }}
        >
          <ResizableBox
            width={duration * unitWidth} // Adjust based on unit width
            height={48}
            axis="x"
            resizeHandles={["e"]}
            minConstraints={[unitWidth, 48]} // Minimum width corresponds to 1 unit
            onResizeStop={handleResizeStop}
            onResizeStart={handleResizeStart}
            handle={
              <span
                className="absolute right-0 top-0 h-full w-2 cursor-ew-resize"
                style={{ zIndex: 10 }}
              />
            }
          >
            <div
              className={`h-full ${
                isPlaying ? "bg-green-500" : "bg-blue-500"
              } text-white rounded cursor-move flex items-center justify-start`}
              onDoubleClick={handleDoubleClick}
            >
              <p className="truncate ml-2">{name || `Clip ${id}`}</p>
              {fileUrl && <audio ref={audioRef} src={fileUrl} preload="auto" />}
            </div>
          </ResizableBox>
        </div>
      )}
    </Draggable>
  );
};

export default memo(Clip);
