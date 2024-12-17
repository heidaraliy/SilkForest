import React from "react";

interface GainWarningProps {
  dryGainValue: number;
  wetGainValue: number;
}

export default function GainWarning({
  dryGainValue,
  wetGainValue,
}: GainWarningProps) {
  return (
    <div className="flex justify-center border border-zinc-800 rounded-lg bg-gray-100 p-4 my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#EA3323"
        className="mr-2"
      >
        <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" />
      </svg>
      <p>
        Your current total gain is{" "}
        <b>{(dryGainValue + wetGainValue).toFixed(2)}</b>, exceeding the usual
        threshold of <b>1</b>. This may cause clipping, leading to distortion!
      </p>
    </div>
  );
}
