// apps/silkforest-web/src/App.tsx
import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import { TimelineProvider } from "./context/TimelineContext";
import AudioEngineNavbar from "./AudioEngineNavbar/AudioEngineNavbar";
const App = () => {
    return (React.createElement("div", null,
        React.createElement(TimelineProvider, null,
            React.createElement("div", { className: "flex flex-col h-screen overflow-hidden" },
                React.createElement(AudioEngineNavbar, null),
                React.createElement(MainLayout, null)))));
};
export default App;
//# sourceMappingURL=AudioEngine.js.map