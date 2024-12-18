import React from "react";
import Button from "./Button";
import WarningMessage from "./WarningMessage";

interface AudioPreviewProps {
  audioElementRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  needsProcessing: boolean;
  isProcessing: boolean;
  handlePlayPause: () => void;
  handleApplyChanges: () => void;
  audioSrc: string;
  parametersChanged: boolean;
}

const AudioPreview: React.FC<AudioPreviewProps> = ({
  audioElementRef,
  isPlaying,
  needsProcessing,
  isProcessing,
  handlePlayPause,
  handleApplyChanges,
  audioSrc,
  parametersChanged,
}) => {
  return (
    <div className="border-zinc-600 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-xl font-bold mb-2 text-left text-zinc-700 font-arimo">
        Apply & Preview Changes
      </h1>
      <div className="flex justify-start mb-4 italic text-sm tracking-wide">
        Apply your changes and preview your modifications.
      </div>

      {!needsProcessing && (
        <WarningMessage
          type="info"
          message="Upload an audio file to preview and process."
        />
      )}

      {parametersChanged && (
        <WarningMessage message="Changes detected! Click 'Apply Changes' to hear your modifications." />
      )}

      <div className="grid grid-cols-1 gap-2 my-2 md:grid-cols-2 grid-rows-1 justify-center">
        <audio ref={audioElementRef} src={audioSrc} />
        <Button
          onClick={handleApplyChanges}
          disabled={
            !needsProcessing ||
            isProcessing ||
            (!parametersChanged && !audioSrc)
          }
          className="flex justify-center items-center mx-2 min-w-40"
        >
          <div className="flex justify-center items-center">
            <span className="material-symbols-outlined">sync</span>
            <span>Apply Changes</span>
          </div>
        </Button>
        <Button
          onClick={handlePlayPause}
          disabled={isProcessing || !audioSrc}
          className="flex justify-center items-center mx-2 min-w-40"
        >
          {isPlaying ? (
            <div className="flex justify-center items-center">
              <span className="material-symbols-outlined">stop</span>
              <span>Stop Audio</span>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <span className="material-symbols-outlined">play_arrow</span>
              <span>Preview Audio</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AudioPreview;
