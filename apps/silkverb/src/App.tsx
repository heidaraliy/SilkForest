import React from "react";
import SilkVerb from "./components/SilkVerb/SilkVerb";
import { NotificationProvider } from "./components/Notifications/context/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <SilkVerb />
    </NotificationProvider>
  );
}

export default App;
