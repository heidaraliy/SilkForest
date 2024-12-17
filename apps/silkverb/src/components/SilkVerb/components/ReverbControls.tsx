import React from "react";
import FrequencyResponseChart from "./FrequencyResponseChart";

interface ReverbControlsProps {
  decayTime: number;
  dryGainValue: number;
  wetGainValue: number;
  highPassFrequency: number;
  lowPassFrequency: number;
  showAdvanced: boolean;
  frequencyData: { frequency: number; gain: number }[];
  handleParameterChange: (
    setter: (value: number) => void,
    value: number
  ) => void;
  setDecayTime: (value: number) => void;
  setDryGainValue: (value: number) => void;
  setWetGainValue: (value: number) => void;
  setHighPassFrequency: (value: number) => void;
  setLowPassFrequency: (value: number) => void;
  setShowAdvanced: (value: boolean) => void;
}

const ReverbControls: React.FC<ReverbControlsProps> = ({
  decayTime,
  dryGainValue,
  wetGainValue,
  highPassFrequency,
  lowPassFrequency,
  showAdvanced,
  frequencyData,
  handleParameterChange,
  setDecayTime,
  setDryGainValue,
  setWetGainValue,
  setHighPassFrequency,
  setLowPassFrequency,
  setShowAdvanced,
}) => {
  return (
    <div className="border-zinc-800 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-2xl font-bold my-2 mb-4 text-left text-zinc-800 font-vidaloka">
        Reverberation
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="flex">
            <span
              data-tooltip-id="reverb-tooltip"
              data-tooltip-html={`Reverb Decay Time controls the length of the reverb effect. <br><br> Higher values apply a longer reverb tail, resulting in a spacier, ethereal sound. <br><br> Lower values tend to be tighter and more confined.`}
              data-tooltip-place="right"
              data-tooltip-delay-show={500}
              data-tooltip-delay-hide={300}
              className="mr-2 text-zinc-800 cursor-help"
            >
              ⓘ
            </span>
            <label className="block text-zinc-700 font-medium mb-1">
              Reverb Decay Time (s): {decayTime}s
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={decayTime}
            onChange={(e) =>
              handleParameterChange(setDecayTime, parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>

        {/* Advanced Controls Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="font-vidaloka m-4 py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            data-tooltip-id="show-advanced-tooltip"
            data-tooltip-html={`Set advanced parameters like Dry Gain, Wet Gain, High Pass and Low Pass Frequency Filters. <br><br> Mouse over the  ⓘ  to learn more about each parameter.`}
            data-tooltip-place="right"
            data-tooltip-delay-show={500}
            data-tooltip-delay-hide={300}
          >
            {showAdvanced
              ? "Hide Advanced Reverb Settings"
              : "Show Advanced Reverb Settings"}
          </button>
        </div>

        {/* Advanced Controls Section */}
        {showAdvanced && (
          <div>
            {/* Dry Gain Control */}
            <div>
              <label className="block text-zinc-700 font-medium mb-1">
                Dry Gain: {dryGainValue}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={dryGainValue}
                onChange={(e) =>
                  handleParameterChange(
                    setDryGainValue,
                    parseFloat(e.target.value)
                  )
                }
                className="w-full"
              />
            </div>

            {/* Wet Gain Control */}
            <div>
              <label className="block text-zinc-700 font-medium mb-1">
                Wet Gain: {wetGainValue}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={wetGainValue}
                onChange={(e) =>
                  handleParameterChange(
                    setWetGainValue,
                    parseFloat(e.target.value)
                  )
                }
                className="w-full"
              />
            </div>

            {/* High Pass Frequency Control */}
            <div>
              <label className="block text-zinc-700 font-medium mb-1">
                High Pass Frequency: {highPassFrequency} Hz
              </label>
              <input
                type="range"
                min="20"
                max="20000"
                step="1"
                value={highPassFrequency}
                onChange={(e) =>
                  handleParameterChange(
                    setHighPassFrequency,
                    parseFloat(e.target.value)
                  )
                }
                className="w-full"
              />
            </div>

            {/* Low Pass Frequency Control */}
            <div>
              <label className="block text-zinc-700 font-medium mb-1">
                Low Pass Frequency: {lowPassFrequency} Hz
              </label>
              <input
                type="range"
                min="20"
                max="20000"
                step="1"
                value={lowPassFrequency}
                onChange={(e) =>
                  handleParameterChange(
                    setLowPassFrequency,
                    parseFloat(e.target.value)
                  )
                }
                className="w-full"
              />
            </div>

            {/* Frequency Response Chart */}
            <FrequencyResponseChart data={frequencyData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReverbControls;
