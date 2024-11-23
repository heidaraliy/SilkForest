import React, { ReactNode } from "react";
import { TrackData, SoundClip } from "../types";
interface TimelineContextProps {
    tracks: TrackData[];
    setTracks: React.Dispatch<React.SetStateAction<TrackData[]>>;
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
    playheadPosition: number;
    setPlayheadPosition: React.Dispatch<React.SetStateAction<number>>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    isRecording: boolean;
    setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;
    soundBank: SoundClip[];
    setSoundBank: React.Dispatch<React.SetStateAction<SoundClip[]>>;
    tempo: number;
    setTempo: React.Dispatch<React.SetStateAction<number>>;
    timeSignature: string;
    setTimeSignature: React.Dispatch<React.SetStateAction<string>>;
}
interface TimelineProviderProps {
    children: ReactNode;
}
export declare const TimelineProvider: React.FC<TimelineProviderProps>;
export declare const useTimeline: () => TimelineContextProps;
export {};
//# sourceMappingURL=TimelineContext.d.ts.map