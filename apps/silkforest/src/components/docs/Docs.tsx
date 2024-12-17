import React from "react";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

const Docs: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-[5.5rem]">
      <DocsSidebar />
      <div className="flex-1 md:ml-72 h-[calc(100vh)]">
        <DocsContent />
      </div>
    </div>
  );
};

export default Docs;
