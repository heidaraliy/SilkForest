import React from "react";
import { TrackData } from "../types";
interface TrackProps {
    track: TrackData;
    zoomLevel: number;
    onClipDrag: (trackId: string, clipId: string, newStart: number) => void;
    onClipResize: (trackId: string, clipId: string, newDuration: number) => void;
    index: number;
}
declare const Track: React.FC<TrackProps>;
export default Track;
//# sourceMappingURL=Track.d.ts.map