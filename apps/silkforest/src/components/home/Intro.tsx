import React from "react";
import { useEffect, useState } from "react";
import DesktopIntroVideo from "../../assets/videos/SilkForestDesktopIntro.gif";
import MobileIntroVideo from "../../assets/videos/SilkForestMobileIntro.gif";
import Button from "@silkverb/components/SilkVerb/components/Button";

const Intro: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center p-8 mt-12">
      <div className="font-arimo tracking-tight text-xl max-w-5xl text-gray-700">
        <div className="my-8 text-3xl text-center shadow-2xl">
          {isMobile ? (
            <img src={MobileIntroVideo} className="w-full h-auto rounded-md" />
          ) : (
            <img src={DesktopIntroVideo} className="rounded-md" />
          )}
        </div>

        <div className="text-2xl font-bold mt-8 md:mt-0">
          Shape your sound, effortlessly.
        </div>
        <br />
        <div className="text-lg max-w-4xl">
          <span className="font-vidaloka">SilkForest</span> is a suite of
          plugins crafted to transform your sound into{" "}
          <b>rich, ambient expressions</b>. With tools designed to{" "}
          <b>weave ethereal soundscapes</b>, sculpt warm, resonant pads and
          synths, and push vocal production into uncharted territories,{" "}
          <span className="font-vidaloka">SilkForest</span> enables you to
          create music that <b>transcends conventional boundaries</b> and
          embodies a sense of <b>otherworldly depth and artistry</b>.
        </div>
        <br />
        <Button className="md:hidden flex m-auto mb-8">
          <a href="/products">View Plugins and Web Apps</a>
        </Button>
        <hr />
        <br />

        <div className="text-2xl font-bold">
          Designed for clarity and control.
        </div>
        <br />
        <div className="text-lg max-w-4xl">
          By removing unnecessary noise and focusing on the most impactful
          parameters, <span className="font-vidaloka">SilkForest</span> empowers
          <b> intuitive sound shaping</b>. Streamlined, focused interfaces
          combined with advanced audio processing make it{" "}
          <b>easy to edit, test, and refine</b> sounds with precision.
        </div>
        <br />
        <hr />
        <br />

        <div className="text-2xl font-bold">Built for everyone.</div>
        <br />
        <div className="text-lg max-w-4xl">
          <span className="font-vidaloka">SilkForest</span> is a passion project
          born from years of music production and sound design experience. That
          means that these plugins will always be <b>free</b>. Creation should
          be accessible to everyone and hopefully,{" "}
          <span className="font-vidaloka">SilkForest</span> can give you the
          tools to <b>explore and expand your sonic horizons</b>,{" "}
          <i>without cost</i>.
        </div>
      </div>
    </div>
  );
};

export default Intro;
