// apps/silkforest-web/src/App.tsx

import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import { TimelineProvider } from "./context/TimelineContext";
import AudioEngineNavbar from "./AudioEngineNavbar/AudioEngineNavbar";

const App: React.FC = () => {
  return (
    <div>
      <TimelineProvider>
        <div className="flex flex-col h-screen overflow-hidden">
          <AudioEngineNavbar />
          <MainLayout />
        </div>
      </TimelineProvider>
    </div>
  );
};

export default App;
