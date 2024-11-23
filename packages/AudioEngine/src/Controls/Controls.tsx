import React from "react";
import { useTimeline } from "../context/TimelineContext";

const Controls: React.FC = () => {
  const {
    zoomLevel,
    setZoomLevel,
    isPlaying,
    setIsPlaying,
    isRecording,
    setIsRecording,
    tempo,
    setTempo,
    timeSignature,
    setTimeSignature,
  } = useTimeline();

  const onZoomIn = () => {
    setZoomLevel((prev: number) => prev + 0.1);
  };

  const onZoomOut = () => {
    setZoomLevel((prev: number) => Math.max(prev - 0.1, 0.5));
  };

  const onPlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onRecordingStartStop = () => {
    setIsRecording(!isRecording);
  };

  const handleTempoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 20 && value <= 300) {
      setTempo(value);
    }
  };

  const handleTimeSignatureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const regex = /^\d+\/\d+$/;
    if (regex.test(value)) {
      setTimeSignature(value);
    }
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-slate-700 select-none border-t-[0.1rem] border-slate-400 shadow-xl">
      <h2 className="flex text-white text-xl font-vidaloka">AudioEngine</h2>
      <button className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100">
        <span className="material-symbols-outlined mt-1 text-white">tune</span>
      </button>
      <button className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100">
        <span className="material-symbols-outlined mt-1 text-white">
          file_export
        </span>
      </button>
      <button className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100">
        <span className="material-symbols-outlined mt-1 text-white">save</span>
      </button>
      <button
        onClick={onZoomIn}
        className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100"
      >
        <span className="material-symbols-outlined mt-1 text-white">
          zoom_in
        </span>
      </button>
      <button
        onClick={onZoomOut}
        className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100"
      >
        <span className="material-symbols-outlined mt-1 text-white">
          zoom_out
        </span>
      </button>
      <button
        onClick={onPlayPause}
        className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100"
      >
        {isPlaying ? (
          <span className="material-symbols-outlined mt-1 text-white">
            pause
          </span>
        ) : (
          <span className="material-symbols-outlined mt-1 text-white">
            play_arrow
          </span>
        )}
      </button>
      <button className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100">
        <span className="material-symbols-outlined mt-1 text-white">
          content_cut
        </span>
      </button>
      <button
        onClick={onRecordingStartStop}
        className="border-1 hover:bg-gray-800 hover:scale-105 rounded-md p-1 active:scale-100 transition-all ease-in-out duration-100"
      >
        {isRecording ? (
          <span className="material-symbols-outlined mt-1 text-red-600">
            radio_button_checked
          </span>
        ) : (
          <span className="material-symbols-outlined mt-1 text-red-600">
            radio_button_unchecked
          </span>
        )}
      </button>
      <div className="flex justify-left items-center bg-gray-800 p-2 rounded-sm w-[7rem] h-8 border-[0.07rem] border-slate-400 pointer-events-none">
        <span className="text-white text-lg font-vidaloka">0:00:00</span>
        <span className="relative bottom-2 left-[0.5rem] text-[0.4rem] text-white font-arimo">
          M:S:CS
        </span>
      </div>
      <div className="flex items-center bg-gray-800 rounded-sm h-8 p-2 border-[0.07rem] border-slate-400">
        <input
          type="number"
          value={tempo}
          onChange={handleTempoChange}
          className="bg-slate-800 text-white text-lg font-vidaloka w-[3.1rem]"
          min={20}
          max={300}
        />
        <span className="relative bottom-2 text-[0.4rem] text-white font-arimo">
          Tempo
        </span>
      </div>
      <div className="flex items-center bg-gray-800 rounded-sm h-8 p-2 border-[0.07rem] border-slate-400">
        <input
          type="text"
          value={timeSignature}
          onChange={handleTimeSignatureChange}
          className="bg-slate-800 text-white text-lg font-vidaloka w-[3.1rem]"
        />
        <span className="relative bottom-2 text-[0.4rem] text-white font-arimo">
          Time
        </span>
      </div>
    </div>
  );
};

export default Controls;
