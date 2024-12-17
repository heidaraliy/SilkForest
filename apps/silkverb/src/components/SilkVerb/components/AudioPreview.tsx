import React from "react";

interface AudioPreviewProps {
  audioElementRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  needsProcessing: boolean;
  isProcessing: boolean;
  handlePlayPause: () => void;
  handleApplyChanges: () => void;
}

const AudioPreview: React.FC<AudioPreviewProps> = ({
  audioElementRef,
  isPlaying,
  needsProcessing,
  isProcessing,
  handlePlayPause,
  handleApplyChanges,
}) => {
  return (
    <div className="border-zinc-800 border-2 p-4 rounded-md shadow-xl bg-slate-200">
      <h1 className="text-2xl font-bold mb-4 text-left text-zinc-800 font-vidaloka">
        Apply & Preview Changes
      </h1>
      <div className="grid grid-cols-2 grid-rows-1">
        <audio ref={audioElementRef} />
        <button
          onClick={handleApplyChanges}
          disabled={!needsProcessing || isProcessing}
          className="font-vidaloka m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Apply Changes
        </button>
        <button
          onClick={handlePlayPause}
          disabled={isProcessing}
          className="font-vidaloka m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isPlaying ? "Pause" : "Preview"}
        </button>
      </div>
    </div>
  );
};

export default AudioPreview;
