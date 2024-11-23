export interface ClipData {
  id: string;
  start: number;
  duration: number;
  fileUrl?: string;
  name?: string;
  trackId: string;
}

export interface TrackData {
  id: string;
  name: string;
  clips: ClipData[];
}

export interface SoundClip {
  assignedMixerTrackId: string;
  id: string;
  name: string;
  fileUrl: string;
  duration: number;
}

export interface MixerTrack {
  id: string;
  name: string;
  volume: number;
  isMuted: boolean;
  assignedSounds: string[];
  effects: string[];
  panning?: number;
}
