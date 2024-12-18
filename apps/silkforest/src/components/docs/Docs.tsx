import React, { Suspense } from "react";
import Spinner from "@silkverb/components/SilkVerb/components/Spinner";

const DocsContent = React.lazy(() => import("./DocsContent"));
const DocsSidebar = React.lazy(() => import("./DocsSidebar"));

const Docs: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-[5.5rem]">
      <Suspense fallback={<Spinner className="m-auto" />}>
        <DocsSidebar />
      </Suspense>
      <Suspense fallback={<Spinner className="m-auto" />}>
        <div className="flex-1 md:ml-72 h-[calc(100vh)]">
          <DocsContent />
        </div>
      </Suspense>
    </div>
  );
};

export default Docs;
