import { useState, useEffect, useRef } from "react";
import { exportProcessedAudioBuffer } from "../utils/exportAudio/exportProcessedAudioBuffer";
import { exportMP3Audio } from "../utils/exportAudio/exportMP3Audio";
import { useNotification } from "../components/Notifications/context/NotificationContext";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface AudioProcessingParameters {
  decayTime: number;
  pitchShift: number;
  dryGainValue: number;
  wetGainValue: number;
  highPassFrequency: number;
  lowPassFrequency: number;
}

export const useAudioProcessor = () => {
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [processedBuffer, setProcessedBuffer] = useState<AudioBuffer | null>(
    null
  );
  const [audioSrc, setAudioSrc] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const currentBlobUrl = useRef<string | null>(null);
  const { addNotification, removeNotification } = useNotification();

  const processAudioFile = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const decodedAudioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    setAudioBuffer(decodedAudioBuffer);
    audioContext.close();
  };

  const processAudio = async (
    processingParameters: AudioProcessingParameters
  ) => {
    if (!audioBuffer) {
      addNotification("Please upload an audio file first.", "error");
      return;
    }

    setIsProcessing(true);
    const notificationId = addNotification("Processing audio...", "info", true);

    const isCancelled = false;

    try {
      const processedBuffer = await exportProcessedAudioBuffer(
        audioBuffer,
        processingParameters.decayTime,
        processingParameters.pitchShift,
        processingParameters.dryGainValue,
        processingParameters.wetGainValue,
        processingParameters.highPassFrequency,
        processingParameters.lowPassFrequency
      );

      if (!isCancelled) {
        setProcessedBuffer(processedBuffer);
        // encode to MP3 -- lightweight, browser-based playback works better vs. WAV
        const mp3Blob = await exportMP3Audio(processedBuffer);

        const blobUrl = URL.createObjectURL(mp3Blob);
        setAudioSrc(blobUrl);

        //revoke previous Blob URL if necessary
        if (currentBlobUrl.current) {
          URL.revokeObjectURL(currentBlobUrl.current);
        }
        currentBlobUrl.current = blobUrl;

        removeNotification(notificationId);
        addNotification("Changes applied successfully!", "success");
      }
    } catch (error) {
      if (!isCancelled) {
        console.error("Audio processing failed:", error);
        removeNotification(notificationId);
        addNotification("Audio processing failed. Please try again.", "error");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    return () => {
      // revoke Blob URL when component unmounts
      if (currentBlobUrl.current) {
        URL.revokeObjectURL(currentBlobUrl.current);
      }
    };
  }, []);

  return {
    audioBuffer,
    processedBuffer,
    audioSrc,
    isProcessing,
    processAudioFile,
    processAudio,
  };
};
