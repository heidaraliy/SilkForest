export interface ProcessingParameters {
  decayTime: number;
  pitchShift: number;
  dryGainValue: number;
  wetGainValue: number;
  highPassFrequency: number;
  lowPassFrequency: number;
}

export interface AudioProcessorHook {
  audioBuffer: AudioBuffer | null;
  processedBuffer: AudioBuffer | null;
  audioSrc: string | null;
  isProcessing: boolean;
  processAudioFile: (file: File) => Promise<void>;
  processAudio: (parameters: ProcessingParameters) => void;
} 