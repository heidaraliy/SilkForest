import React from "react";
import DocsSidebar from "./DocsSidebar";
import DocsContent from "./DocsContent";

const Docs: React.FC = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden mt-16">
      <DocsSidebar />
      <DocsContent />
    </div>
  );
};

export default Docs;
