import React from "react";
import logo from "@silkforest/assets/SilkVerb.png";

const Header: React.FC = () => {
  return (
    <>
      <img src={logo} alt="title-logo" className="w-[24rem] m-auto" />
      <div className="text-md text-center mx-auto text-zinc-50 tracking-tight max-w-xl font-vidaloka -mt-2">
        built by SilkForest.
      </div>
      <h1 className="text-md mb-8 mt-8 text-center mx-auto text-zinc-50 tracking-tight max-w-xl">
        Slow, speed up, and pitch shift audio files with ease. Upload a file,
        adjust the reverb decay time and pitch shift, then apply and preview
        your changes. Export to .mp3 and .wav to save your changes.
      </h1>
    </>
  );
};

export default Header;
