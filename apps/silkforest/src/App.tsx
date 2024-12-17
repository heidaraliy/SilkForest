import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import RouterDefinitions from "./RouterDefinitions";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <RouterDefinitions />
      {location.pathname !== "/docs" && <Footer />}
    </div>
  );
};

export default App;
