import React, { Suspense } from "react";

const DocsContent = React.lazy(() => import("./DocsContent"));
const DocsSidebar = React.lazy(() => import("./DocsSidebar"));

const Docs: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-[5.5rem]">
      <Suspense fallback={<div>Loading...</div>}>
        <DocsSidebar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex-1 md:ml-72 h-[calc(100vh)]">
          <DocsContent />
        </div>
      </Suspense>
    </div>
  );
};

export default Docs;
