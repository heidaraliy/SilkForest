import React from "react";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import RouterDefinitions from "./components/home/RouterDefinitions";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <RouterDefinitions />
      <Footer />
    </div>
  );
};

export default App;
