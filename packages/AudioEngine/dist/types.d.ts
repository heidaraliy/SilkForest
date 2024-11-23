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
    id: string;
    name: string;
    fileUrl: string;
    duration: number;
}
//# sourceMappingURL=types.d.ts.map