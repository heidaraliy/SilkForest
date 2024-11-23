// apps/silkforest-web/src/context/TimelineContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";
import { TrackData, SoundClip } from "../types";
import { v4 as uuidv4 } from "uuid";

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

const TimelineContext = createContext<TimelineContextProps | undefined>(
  undefined
);

interface TimelineProviderProps {
  children: ReactNode;
}

export const TimelineProvider: React.FC<TimelineProviderProps> = ({
  children,
}) => {
  const [tracks, setTracks] = useState<TrackData[]>(
    Array.from({ length: 50 }, (_, index) => ({
      id: uuidv4(),
      name: `Track ${index + 1}`,
      clips: [],
    }))
  );

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [playheadPosition, setPlayheadPosition] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [soundBank, setSoundBank] = useState<SoundClip[]>([]);
  const [tempo, setTempo] = useState<number>(140);
  const [timeSignature, setTimeSignature] = useState<string>("4/4");

  return (
    <TimelineContext.Provider
      value={{
        tracks,
        setTracks,
        zoomLevel,
        setZoomLevel,
        playheadPosition,
        setPlayheadPosition,
        isPlaying,
        setIsPlaying,
        isRecording,
        setIsRecording,
        soundBank,
        setSoundBank,
        tempo,
        setTempo,
        timeSignature,
        setTimeSignature,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
};
