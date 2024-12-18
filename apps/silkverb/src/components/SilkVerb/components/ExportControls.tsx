import React from "react";
import { exportMP3Audio } from "../../../utils/exportAudio/exportMP3Audio";
import { exportWAVAudio } from "../../../utils/exportAudio/exportWAVAudio";
import { useNotification } from "../../Notifications/context/NotificationContext";
import Spinner from "./Spinner";
import Button from "./Button";
import WarningMessage from "./WarningMessage";

interface ExportControlsProps {
  processedBuffer: AudioBuffer | null;
  audioBuffer: AudioBuffer | null;
  fileName: string | null;
  isExporting: boolean;
  setIsExporting: (value: boolean) => void;
  processingParameters: {
    decayTime: number;
    pitchShift: number;
    dryGainValue: number;
    wetGainValue: number;
    highPassFrequency: number;
    lowPassFrequency: number;
  };
  needsProcessing: boolean;
  isProcessing: boolean;
}

const ExportControls: React.FC<ExportControlsProps> = ({
  processedBuffer,
  audioBuffer,
  fileName,
  isExporting,
  setIsExporting,
  processingParameters,
  needsProcessing,
  isProcessing,
}) => {
  const { addNotification } = useNotification();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleMp3Export = async () => {
    if (processedBuffer) {
      setIsExporting(true);
      addNotification("Exporting MP3...", "info");
      await delay(1000);
      try {
        const mp3Blob = await exportMP3Audio(processedBuffer);
        const url = URL.createObjectURL(mp3Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${
          fileName + " (made with SilkVerb)" || "your song (made with SilkVerb)"
        }.mp3`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        addNotification("MP3 export successful!", "success");
      } catch (error) {
        addNotification("Export failed. Please try again.", "error");
      } finally {
        setIsExporting(false);
      }
    }
  };

  const handleWavExport = async () => {
    if (audioBuffer) {
      setIsExporting(true);
      addNotification("Exporting WAV...", "info");
      await delay(1000);
      try {
        const wavBlob = await exportWAVAudio(
          audioBuffer,
          processingParameters.decayTime,
          processingParameters.pitchShift,
          processingParameters.dryGainValue,
          processingParameters.wetGainValue,
          processingParameters.highPassFrequency,
          processingParameters.lowPassFrequency
        );
        const url = URL.createObjectURL(wavBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${
          fileName + " (made with SilkVerb)" || "made with SilkVerb"
        }.wav`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        addNotification("WAV export successful!", "success");
      } catch (error) {
        addNotification("Export failed. Please try again.", "error");
      } finally {
        setIsExporting(false);
      }
    }
  };

  return (
    <div className="border-zinc-600 border-2 p-4 rounded-md shadow-xl bg-zinc-200">
      <h1 className="text-xl font-bold mb-2 text-left text-zinc-700 font-arimo">
        Export Audio
      </h1>
      <div className="flex justify-start mb-4 italic text-sm tracking-wide">
        Export your processed audio.
      </div>

      {!audioBuffer && (
        <WarningMessage
          type="info"
          message="Upload an audio file to enable exporting options."
        />
      )}

      {needsProcessing && (
        <WarningMessage message="Apply your changes before exporting to ensure all modifications are included." />
      )}

      {isProcessing && (
        <WarningMessage
          type="info"
          message="Processing audio... Please wait."
        />
      )}

      <div className="grid grid-cols-1 gap-2 my-2 md:grid-cols-2 grid-rows-1 justify-center">
        <Button
          onClick={handleMp3Export}
          disabled={
            !processedBuffer || isExporting || needsProcessing || isProcessing
          }
          className="flex justify-center items-center mx-2 min-w-40"
        >
          <div className="flex justify-center items-center">
            <span className="material-symbols-outlined">download</span>
            <span>Export as .mp3</span>
          </div>
        </Button>
        <Button
          onClick={handleWavExport}
          disabled={
            !audioBuffer || isExporting || needsProcessing || isProcessing
          }
          className="flex justify-center items-center mx-2 min-w-40"
        >
          <div className="flex justify-center items-center">
            <span className="material-symbols-outlined">download</span>
            <span>Export as .wav</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ExportControls;
