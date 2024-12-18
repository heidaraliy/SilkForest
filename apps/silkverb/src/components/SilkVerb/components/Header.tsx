import React from "react";
import logo from "@silkforest/assets/SilkVerb.png";

const Header: React.FC = () => {
  return (
    <>
      <img src={logo} alt="title-logo" className="w-[24rem] m-auto" />
      <h1 className="text-md mb-8 mt-4 text-center mx-auto text-zinc-50 tracking-tight max-w-xl">
        Slow, speed up, and pitch shift audio files with ease. Upload a file,
        adjust the reverb decay time and pitch shift, then apply and preview
        your changes. Export to your preferred audio format to save your
        changes.
      </h1>
      <h1 className="text-md mb-8 mt-4 text-center mx-auto text-zinc-50 tracking-tight max-w-xl">
        To learn more about each setting and how to use it, hover or tap the ⓘ
        icon next to each setting.
      </h1>
    </>
  );
};

export default Header;
