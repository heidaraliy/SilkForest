import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="font-arimo tracking-tight text-xl max-w-5xl text-gray-700">
        <div className="my-12 text-3xl text-center shadow-2xl">
          <video
            src="/assets/logo-text/intro.mp4"
            className="rounded-md"
            autoPlay
            muted
          />
        </div>
        <div className="text-2xl font-bold">
          Create complex sounds, without the complication.
        </div>
        <br />
        <div className="text-lg max-w-4xl">
          Audio can be shaped in many ways, with a plethora of calculated
          decisions and convoluted implementations — abstracting those
          complications is what{" "}
          <span className="font-vidaloka">SilkForest</span> does best.
          <br />
          <br />
          By reducing noise and complexities within the interface and displaying
          only the most important parameters, users can take a moment to edit,
          test, and bounce manipulated audio tracks out with ease.
        </div>
        <br />
        <hr />
        <br />
        <div className="text-2xl font-bold">Engineer your sound anywhere.</div>
        <br />
        <div className="text-lg max-w-4xl">
          With{" "}
          <span className="font-vidaloka">
            SilkForest's <b>AudioEngine</b>,
          </span>{" "}
          you don't have to be confined to your workspace. Because{" "}
          <span className="font-vidaloka">SilkForest</span> is built on the web,
          there are no external applications for you to rely on — upload a
          track, shape it to your liking, and bounce it out.
          <br />
        </div>
        <br />
        <hr />
        <br />
        <div className="text-2xl font-bold">
          <span className="font-vidaloka">SilkForest</span> is even better as a
          plugin.
        </div>
        <br />
        <div className="text-lg max-w-4xl">
          While
          <span className="font-vidaloka"> SilkForest</span> was made for the
          web, you can exert finer control with standalone VST plugins.
          <br />
          <br />
          As standalone plugins,{" "}
          <span className="font-vidaloka"> SilkForest</span> can leverage the
          flexibility of a digital audio workstation and build vibrant, dynamic
          graphical interfaces, backed by sophisticated audio processing
          algorithms.
        </div>
      </div>
    </div>
  );
};

export default Intro;
