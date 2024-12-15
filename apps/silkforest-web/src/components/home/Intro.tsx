import React from "react";
import IntroVideo from "../../assets/intro.mp4";

const Intro: React.FC = () => {
  return (
    <div className="flex justify-center p-8 mt-12">
      <div className="font-arimo tracking-tight text-xl max-w-5xl text-gray-700">
        <div className="my-8 text-3xl text-center shadow-2xl">
          <video src={IntroVideo} className="rounded-md" autoPlay muted />
        </div>

        <div className="text-2xl font-bold">
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
        <hr />
        <br />

        <div className="text-2xl font-bold">
          Designed for clarity and control.
        </div>
        <br />
        <div className="text-lg max-w-4xl">
          By removing unnecessary noise and focusing on the most impactful
          parameters, <span className="font-vidaloka">SilkForest</span> empowers
          intuitive sound shaping. Elegant, focused interfaces combined with
          advanced audio processing make it easy to edit, test, and refine
          sounds with precision.
        </div>
        <br />
        <hr />
        <br />

        <div className="text-2xl font-bold">Built for everyone.</div>
        <br />
        <div className="text-lg max-w-4xl">
          <span className="font-vidaloka">SilkForest</span> is a passion project
          born from years of music production and sound design experience. As
          someone who's benefited from the incredible tools created by the audio
          community, I want to give back by making these plugins completely
          free. I think that powerful creative tools should be accessible to
          everyone, enabling artists at any level to explore and expand their
          sonic horizons without barriers.
        </div>
      </div>
    </div>
  );
};

export default Intro;
