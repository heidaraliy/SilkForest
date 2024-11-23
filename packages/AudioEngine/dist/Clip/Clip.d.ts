import React from "react";
import "react-resizable/css/styles.css";
import { ClipData } from "../types";
interface ClipProps {
    clip: ClipData;
    zoomLevel: number;
    onClipDrag: (trackId: string, clipId: string, newStart: number) => void;
    onClipResize: (trackId: string, clipId: string, newDuration: number) => void;
    index: number;
}
declare const _default: React.NamedExoticComponent<ClipProps>;
export default _default;
//# sourceMappingURL=Clip.d.ts.map