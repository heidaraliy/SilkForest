import React from "react";
import { exportMP3Audio } from "../../../utils/exportAudio/exportMP3Audio";
import { exportWAVAudio } from "../../../utils/exportAudio/exportWAVAudio";

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
}

const ExportControls: React.FC<ExportControlsProps> = ({
  processedBuffer,
  audioBuffer,
  fileName,
  isExporting,
  setIsExporting,
  processingParameters,
}) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleMp3Export = async () => {
    if (processedBuffer) {
      setIsExporting(true);
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
      } catch (error) {
        console.error("Export failed:", error);
        alert("Export failed. Please try again.");
      } finally {
        setIsExporting(false);
      }
    }
  };

  const handleWavExport = async () => {
    if (audioBuffer) {
      setIsExporting(true);
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
      } catch (error) {
        console.error("Export failed:", error);
        alert("Export failed. Please try again.");
      } finally {
        setIsExporting(false);
      }
    }
  };

  return (
    <div className="border-zinc-800 border-2 p-4 rounded-md shadow-xl bg-slate-200">
      <h1 className="text-2xl font-bold mb-4 text-left text-zinc-800 font-vidaloka">
        Export
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleMp3Export}
          disabled={!processedBuffer || isExporting}
          className="font-vidaloka px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Export MP3
        </button>
        <button
          onClick={handleWavExport}
          disabled={!audioBuffer || isExporting}
          className="font-vidaloka px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Export WAV
        </button>
      </div>
    </div>
  );
};

export default ExportControls;
