import React, { useRef, useState, useEffect } from "react";
import { useAudioProcessor } from "../../hooks/useAudioProcessor";
import { calculateFrequencyResponse } from "../../utils/calculateFrequencyResponse";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import ReverbControls from "./components/ReverbControls";
import PitchControls from "./components/PitchControls";
import AudioPreview from "./components/AudioPreview";
import ExportControls from "./components/ExportControls";
import { ProcessingParameters } from "./types";

const SilkVerb: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  // State management
  const [decayTime, setDecayTime] = useState(2);
  const [pitchShift, setPitchShift] = useState(0);
  const [dryGainValue, setDryGainValue] = useState(0.7);
  const [wetGainValue, setWetGainValue] = useState(0.3);
  const [highPassFrequency, setHighPassFrequency] = useState(100);
  const [lowPassFrequency, setLowPassFrequency] = useState(4000);
  const [needsProcessing, setNeedsProcessing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [frequencyData, setFrequencyData] = useState<
    Array<{ frequency: number; gain: number }>
  >([]);

  const {
    audioBuffer,
    processedBuffer,
    audioSrc,
    isProcessing,
    processAudioFile,
    processAudio,
  } = useAudioProcessor();

  const handleParameterChange = (
    setter: (value: number) => void,
    value: number
  ) => {
    setter(value);
    setNeedsProcessing(true);
  };

  const handleApplyChanges = () => {
    const processingParameters: ProcessingParameters = {
      decayTime,
      pitchShift,
      dryGainValue,
      wetGainValue,
      highPassFrequency,
      lowPassFrequency,
    };
    processAudio(processingParameters);
    setNeedsProcessing(false);
  };

  // Audio playback effects
  useEffect(() => {
    const audioElement = audioElementRef.current;
    if (!audioElement) return;

    if (audioSrc) {
      audioElement.src = audioSrc;
      audioElement.load();
    }

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audioElement.addEventListener("play", onPlay);
    audioElement.addEventListener("pause", onPause);
    audioElement.addEventListener("ended", onEnded);

    return () => {
      audioElement.removeEventListener("play", onPlay);
      audioElement.removeEventListener("pause", onPause);
      audioElement.removeEventListener("ended", onEnded);
    };
  }, [audioSrc]);

  // Frequency response calculation effect
  useEffect(() => {
    const data = calculateFrequencyResponse(
      highPassFrequency,
      lowPassFrequency
    );
    setFrequencyData(data);
  }, [highPassFrequency, lowPassFrequency]);

  return (
    <div className="bg-[#4b56a0] h-screen-max p-4 mt-20 sm:p-8 lg:p-12">
      <div className="bg-[#2a3475] border-2 border-zinc-400 font-arimo tracking-tighter max-w-3xl max-h-xl m-auto p-4 shadow-xl rounded-lg">
        <Header />

        <div className="space-y-4">
          <FileUpload
            fileInputRef={fileInputRef}
            handleFileUpload={async () => {
              if (fileInputRef.current?.files?.[0]) {
                const file = fileInputRef.current.files[0];
                setFileName(file.name.split(".")[0]);
                await processAudioFile(file);
                setNeedsProcessing(true);
              }
            }}
          />

          <ReverbControls
            decayTime={decayTime}
            dryGainValue={dryGainValue}
            wetGainValue={wetGainValue}
            highPassFrequency={highPassFrequency}
            lowPassFrequency={lowPassFrequency}
            showAdvanced={showAdvanced}
            frequencyData={frequencyData}
            handleParameterChange={handleParameterChange}
            setDecayTime={setDecayTime}
            setDryGainValue={setDryGainValue}
            setWetGainValue={setWetGainValue}
            setHighPassFrequency={setHighPassFrequency}
            setLowPassFrequency={setLowPassFrequency}
            setShowAdvanced={setShowAdvanced}
          />

          <PitchControls
            pitchShift={pitchShift}
            handleParameterChange={handleParameterChange}
            setPitchShift={setPitchShift}
          />

          <AudioPreview
            audioElementRef={audioElementRef}
            isPlaying={isPlaying}
            needsProcessing={needsProcessing}
            isProcessing={isProcessing}
            handlePlayPause={() => {
              const audioElement = audioElementRef.current;
              if (audioElement) {
                if (isPlaying) {
                  audioElement.pause();
                } else {
                  audioElement.currentTime = 30;
                  audioElement.play().catch(console.error);
                }
              }
            }}
            handleApplyChanges={handleApplyChanges}
          />

          <ExportControls
            processedBuffer={processedBuffer}
            audioBuffer={audioBuffer}
            fileName={fileName}
            isExporting={isExporting}
            setIsExporting={setIsExporting}
            processingParameters={{
              decayTime,
              pitchShift,
              dryGainValue,
              wetGainValue,
              highPassFrequency,
              lowPassFrequency,
            }}
          />
        </div>

        <ReactTooltip id="reverb-tooltip" className="max-w-md" />
        <ReactTooltip id="dry-gain-tooltip" className="max-w-md" />
        <ReactTooltip id="wet-gain-tooltip" className="max-w-md" />
        <ReactTooltip id="high-pass-tooltip" className="max-w-md" />
        <ReactTooltip id="low-pass-tooltip" className="max-w-md" />
        <ReactTooltip id="freq-response-tooltip" className="max-w-md" />
        <ReactTooltip id="pitch-shift-tooltip" className="max-w-md" />
        <ReactTooltip id="show-advanced-tooltip" className="max-w-md" />
      </div>
    </div>
  );
};

export default SilkVerb;
