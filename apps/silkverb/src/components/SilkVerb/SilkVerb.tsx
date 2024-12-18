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
import { useNotification } from "../Notifications/context/NotificationContext";
import NotificationContainer from "../Notifications/NotificationContainer";

const SilkVerb: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const { addNotification } = useNotification();

  // most of the state management logic lives here, and is passed
  // down to the components as props. easier and more modular, to
  // handle that way.
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

  const initialParameters = useRef({
    decayTime,
    pitchShift,
    dryGainValue,
    wetGainValue,
    highPassFrequency,
    lowPassFrequency,
  });

  const parametersChanged =
    decayTime !== initialParameters.current.decayTime ||
    pitchShift !== initialParameters.current.pitchShift ||
    dryGainValue !== initialParameters.current.dryGainValue ||
    wetGainValue !== initialParameters.current.wetGainValue ||
    highPassFrequency !== initialParameters.current.highPassFrequency ||
    lowPassFrequency !== initialParameters.current.lowPassFrequency;

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

  const handlePlayPause = () => {
    const audioElement = audioElementRef.current;
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  // audio playback effects.
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

  // frequency response calculation effect.
  useEffect(() => {
    const data = calculateFrequencyResponse(
      highPassFrequency,
      lowPassFrequency
    );
    setFrequencyData(data);
  }, [highPassFrequency, lowPassFrequency]);

  // handle file upload.
  const handleFileUpload = async (fileName: string) => {
    if (fileInputRef.current?.files?.[0]) {
      const file = fileInputRef.current.files[0];
      setFileName(fileName);
      await processAudioFile(file);
      setNeedsProcessing(true);
      addNotification("File uploaded successfully", "success");
    }
  };

  return (
    <div className="bg-[#2a3475] h-screen-max p-4 mt-20 md:p-12 font-arimo tracking-tighter">
      <NotificationContainer />
      <Header />
      <div className="space-y-2 md:space-y-4 max-w-5xl mx-auto">
        <FileUpload
          fileInputRef={fileInputRef}
          handleFileUpload={handleFileUpload}
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
          needsProcessing={needsProcessing || audioSrc !== ""}
          isProcessing={isProcessing}
          audioBuffer={audioBuffer}
          audioSrc={audioSrc}
          handlePlayPause={handlePlayPause}
          handleApplyChanges={handleApplyChanges}
          parametersChanged={parametersChanged}
        />

        <ExportControls
          processedBuffer={processedBuffer}
          audioBuffer={audioBuffer}
          fileName={fileName}
          isExporting={isExporting}
          setIsExporting={setIsExporting}
          needsProcessing={needsProcessing}
          processingParameters={{
            decayTime,
            pitchShift,
            dryGainValue,
            wetGainValue,
            highPassFrequency,
            lowPassFrequency,
          }}
          isProcessing={isProcessing}
        />
      </div>

      <ReactTooltip id="reverb-tooltip" className="max-w-[280px] !opacity-90" />
      <ReactTooltip
        id="dry-gain-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="wet-gain-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="high-pass-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="low-pass-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="freq-response-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="pitch-shift-tooltip"
        className="max-w-[280px] !opacity-90"
      />
      <ReactTooltip
        id="show-advanced-tooltip"
        className="max-w-[280px] !opacity-90"
      />
    </div>
  );
};

export default SilkVerb;
