// apps/silkforest-web/src/components/SoundBank/SoundBank.tsx

import React, { useCallback, useEffect } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { useTimeline } from "../context/TimelineContext";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

interface SoundClip {
  id: string;
  name: string;
  fileUrl: string;
  duration: number;
  assignedMixerTrackId: string;
}

const SoundBank: React.FC = () => {
  const { soundBank, setSoundBank, tracks } = useTimeline();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const blob = new Blob([arrayBuffer], { type: file.type });
          const blobUrl = URL.createObjectURL(blob);
          const audio = new Audio(blobUrl);
          audio.addEventListener("loadedmetadata", () => {
            const duration = audio.duration; // Duration in seconds
            const firstTrackId = tracks[0]?.id || "default-track-id";

            const newSound: SoundClip = {
              id: uuidv4(),
              name: file.name,
              fileUrl: blobUrl,
              duration: Math.round(duration),
              assignedMixerTrackId: firstTrackId,
            };

            setSoundBank((prevSoundBank) => [...prevSoundBank, newSound]);
          });
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [setSoundBank, tracks]
  );

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

  return (
    <div className="flex-none w-full h-full overflow-y-auto bg-slate-800 p-4 border-r-2 border-t-2 border-slate-400">
      <h2 className="flex text-white text-lg mb-4 font-vidaloka border-2 border-slate-400 rounded-md p-2 justify-center bg-slate-700">
        SoundBank
      </h2>

      {/* Audio Uploader */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed ${
          isDragActive ? "border-green-500" : "border-slate-400"
        } p-4 text-center text-slate-500 cursor-pointer mb-4`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="font-arimo font-bold text-sm">
            Drop the audio files here...
            <br />
            <br />
          </p>
        ) : (
          <p className="font-arimo font-bold text-sm">
            Drag your audio or click here to upload sounds.
          </p>
        )}
      </div>

      {/* Sound Clips List */}
      {soundBank.length === 0 && (
        <p className="text-slate-400 font-arimo font-bold text-sm">
          No sounds uploaded yet.
        </p>
      )}
      <Droppable droppableId="soundBank" isDropDisabled={true} type="SOUND">
        {(provided, snapshot) => (
          <ul
            className={`space-y-2 ${
              snapshot.isDraggingOver ? "bg-slate-700" : "bg-slate-800"
            } p-2 rounded`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {soundBank.map((sound, index) => (
              <Draggable
                key={sound.id}
                draggableId={`sound-${sound.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-2 bg-slate-700 rounded cursor-pointer ${
                      snapshot.isDragging ? "opacity-50" : "opacity-100"
                    }`}
                  >
                    <div className="flex flex-row">
                      <div className="flex flex-col items-center border-2 border-slate-400 bg-slate-800 rounded-sm mr-4 w-8">
                        <span
                          title="Assign this sound to the next mixer track."
                          className="material-symbols-outlined text-white cursor-pointer -mb-1.5"
                          onClick={() => {
                            // Increase track assignment
                            const currentTrackIndex = tracks.findIndex(
                              (track) => track.id === sound.assignedMixerTrackId
                            );
                            if (currentTrackIndex < tracks.length - 1) {
                              const newTrackId =
                                tracks[currentTrackIndex + 1].id;
                              setSoundBank((prevSoundBank) =>
                                prevSoundBank.map((s) =>
                                  s.id === sound.id
                                    ? {
                                        ...s,
                                        assignedMixerTrackId: newTrackId,
                                      }
                                    : s
                                )
                              );
                            }
                          }}
                        >
                          arrow_drop_up
                        </span>
                        <p className="text-slate-200 text-lg font-vidaloka">
                          {tracks.findIndex(
                            (track) => track.id === sound.assignedMixerTrackId
                          ) + 1}
                        </p>
                        <span
                          title="Assign this sound to the previous mixer track."
                          className="material-symbols-outlined text-white cursor-pointer -mt-1.5"
                          onClick={() => {
                            // Decrease track assignment
                            const currentTrackIndex = tracks.findIndex(
                              (track) => track.id === sound.assignedMixerTrackId
                            );
                            if (currentTrackIndex > 0) {
                              const newTrackId =
                                tracks[currentTrackIndex - 1].id;
                              setSoundBank((prevSoundBank) =>
                                prevSoundBank.map((s) =>
                                  s.id === sound.id
                                    ? {
                                        ...s,
                                        assignedMixerTrackId: newTrackId,
                                      }
                                    : s
                                )
                              );
                            }
                          }}
                        >
                          arrow_drop_down
                        </span>
                      </div>
                      <div className="flex flex-col flex-1 overflow-hidden">
                        <p className="text-white truncate">{sound.name}</p>

                        <p className="text-slate-400 text-xs">
                          Duration: {sound.duration}s
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default SoundBank;
