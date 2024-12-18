import React from "react";
import FrequencyResponseChart from "./FrequencyResponseChart";
import Button from "./Button";
import WarningMessage from "./WarningMessage";

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
    <div className="border-zinc-600 border-2 p-4 rounded-md shadow-xl bg-zinc-200 font-arimo">
      <h1 className="text-xl font-bold my-2 mb-2 text-left text-zinc-700">
        Reverberation
      </h1>
      <div className="flex justify-start mb-4 italic text-sm tracking-wide">
        Set the reverberation parameters below to apply the reverb effect to
        your uploaded audio file. You can choose to apply a simple decay time or
        click the button below to set more advanced parameters.
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <div className="flex">
            <span
              data-tooltip-id="reverb-tooltip"
              data-tooltip-html={`Reverb Decay Time controls the length of the reverb effect. <br><br> Higher values apply a longer reverb tail, resulting in a spacier, ethereal sound. <br><br> Lower values tend to be tighter and more confined.`}
              data-tooltip-place="right"
              data-tooltip-delay-show={500}
              data-tooltip-delay-hide={300}
              className="mr-2 text-zinc-700 cursor-help"
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

        {/* advanced controls button */}
        <div className="flex justify-center">
          <Button
            onClick={() => setShowAdvanced(!showAdvanced)}
            data-tooltip-id="show-advanced-tooltip"
            data-tooltip-html={`Set advanced parameters like Dry Gain, Wet Gain, High Pass and Low Pass Frequency Filters. <br><br> Mouse over the  ⓘ  to learn more about each parameter.`}
            data-tooltip-place="right"
            data-tooltip-delay-show={500}
            data-tooltip-delay-hide={300}
          >
            {showAdvanced
              ? "Hide Advanced Reverb Settings"
              : "Show Advanced Reverb Settings"}
          </Button>
        </div>

        {/* advanced controls section */}
        {showAdvanced && (
          <div>
            <hr className="my-4 border-zinc-400 border-1" />
            {/* dry gain control */}
            <h1 className="text-xl font-bold my-2 mb-2 text-left text-zinc-700">
              Gain Staging
            </h1>
            <div className="flex justify-start mb-4 italic text-sm tracking-wide">
              Control the volume of the reverberated signal.
            </div>
            <div>
              <div className="flex">
                <span
                  data-tooltip-id="dry-gain-tooltip"
                  data-tooltip-html={`Dry Gain handles the volume of the raw, unprocessed audio signal. <br><br> Higher values make the unprocessed audio stronger, while lower values reduce it, opening up more space for additional effects and reverberation.`}
                  data-tooltip-place="right"
                  data-tooltip-delay-show={500}
                  data-tooltip-delay-hide={300}
                  className="mr-2 text-zinc-700 cursor-help"
                >
                  ⓘ
                </span>
                <label className="block text-zinc-700 font-medium mb-1">
                  Dry Gain: {dryGainValue.toFixed(2)}
                </label>
              </div>
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
            {/* wet gain control */}
            <div>
              <div className="flex">
                <span
                  data-tooltip-id="wet-gain-tooltip"
                  data-tooltip-html={`Wet Gain handles the volume of the processed, reverberated audio signal. <br><br> Higher values make the reverberated audio stronger, while lower values reduce it, giving the dry signal more space in the overall mix.`}
                  data-tooltip-place="right"
                  data-tooltip-delay-show={500}
                  data-tooltip-delay-hide={300}
                  className="mr-2 text-zinc-700 cursor-help"
                >
                  ⓘ
                </span>
                <label className="block text-zinc-700 font-medium mb-1">
                  Wet Gain: {wetGainValue.toFixed(2)}
                </label>
              </div>
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
            {/* high pass frequency control */}
            <h1 className="text-xl font-bold my-2 mb-2 text-left text-zinc-700">
              Frequency Filters
            </h1>
            <div className="flex justify-start mb-4 italic text-sm tracking-wide">
              Control where the reverb effect is applied.
            </div>
            <div>
              <div className="flex">
                <span
                  data-tooltip-id="high-pass-tooltip"
                  data-tooltip-html={`The High Pass Frequency Filter controls the dynamics of the lower frequencies in the processed audio signal. <br><br> A higher value will cut out the bass and kick elements within the wet, reverberated signal, while a lower value will allow them to filter in. <br><br> Typically, a lower value may sound 'muddier' because the bass and kick reverb overpowers the raw signal within the lower frequency ranges.`}
                  data-tooltip-place="right"
                  data-tooltip-delay-show={500}
                  data-tooltip-delay-hide={300}
                  className="mr-2 text-zinc-700 cursor-help"
                >
                  ⓘ
                </span>
                <label className="block text-zinc-700 font-medium mb-1">
                  High Pass Filter Frequency (Hz): {highPassFrequency} Hz
                </label>
              </div>
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
            {/* low pass frequency control */}
            <div>
              <div className="flex">
                <span
                  data-tooltip-id="low-pass-tooltip"
                  data-tooltip-html={`The Low Pass Frequency Filter controls the dynamics of the higher frequencies in the processed audio signal. <br><br> A higher value will cut out the high hats and snares, in addition to other 'airy' sounds within the reverberated signal, while a lower value will allow them to filter in. <br><br> A higher value may overpower the entire mix, mostly because the high hat and snare reverb creates extremely powerful air on top of the track.`}
                  data-tooltip-place="right"
                  data-tooltip-delay-show={500}
                  data-tooltip-delay-hide={300}
                  className="mr-2 text-zinc-700 cursor-help"
                >
                  ⓘ
                </span>
                <label className="block text-zinc-700 font-medium mb-1">
                  Low Pass Filter Frequency (Hz): {lowPassFrequency} Hz
                </label>
              </div>
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
            {/* frequency response chart */}
            <FrequencyResponseChart data={frequencyData} />
            {dryGainValue + wetGainValue > 1 && (
              <WarningMessage
                message={`Your current total gain is ${(
                  dryGainValue + wetGainValue
                ).toFixed(
                  2
                )}, exceeding the usual threshold of 1. This may cause clipping, leading to distortion!`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReverbControls;
