import React from "react";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import RouterDefinitions from "./components/home/RouterDefinitions";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

const App: React.FC = () => {
  const handleDragEnd = (result: DropResult) => {};

  return (
    <div>
      {location.pathname === "/audioengine" ? <></> : <Navbar />}
      <DragDropContext onDragEnd={handleDragEnd}>
        <RouterDefinitions />
      </DragDropContext>
      {location.pathname === "/audioengine" ? <></> : <Footer />}
    </div>
  );
};

export default App;
