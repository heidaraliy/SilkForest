import React from "react";

interface PitchControlsProps {
  pitchShift: number;
  handleParameterChange: (
    setter: (value: number) => void,
    value: number
  ) => void;
  setPitchShift: (value: number) => void;
}

const PitchControls: React.FC<PitchControlsProps> = ({
  pitchShift,
  handleParameterChange,
  setPitchShift,
}) => {
  return (
    <div className="border-zinc-800 border-2 p-4 rounded-md shadow-xl bg-slate-200">
      <h1 className="text-2xl font-bold mb-4 text-left text-zinc-800 font-vidaloka">
        Pitch & Tempo Shift
      </h1>
      <div>
        <div className="flex">
          <span
            data-tooltip-id="pitch-shift-tooltip"
            data-tooltip-content="Pitch shift controls both the tempo and key of the audio signal. For example, if your file is in the key of 'C' and has a BPM (beats per minute) of 120, a -1 semitone adjustment will reduce the tempo to 110 and shift the key to 'B'."
            data-tooltip-place="right"
            data-tooltip-delay-show={500}
            data-tooltip-delay-hide={300}
            className="mr-2 text-zinc-800 cursor-help"
          >
            ⓘ
          </span>
          <label className="block text-zinc-700 font-medium mb-1">
            Pitch Shift (Semitones): {pitchShift}
          </label>
        </div>
        <input
          type="range"
          min="-12"
          max="12"
          step="1"
          value={pitchShift}
          onChange={(e) =>
            handleParameterChange(setPitchShift, parseFloat(e.target.value))
          }
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PitchControls;