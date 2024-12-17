import React from "react";

const Docs: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden p-20 justify-center items-center">
      <span
        className="text-center text-lg font-arimo tracking-tight"
        style={{ maxWidth: "800px" }}
      >
        hey, it's me.
        <br />
        <br />
        there's nothing <i>that</i> important that i can really add here...
        <br />
        <br />
        <i className="text-sm">(at least, not yet.)</i>
        <br />
        <br />
        <b>i'm building some pretty cool stuff though, so stay a while.</b>
      </span>
    </div>
  );
};

export default Docs;
