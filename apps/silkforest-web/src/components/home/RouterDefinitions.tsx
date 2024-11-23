import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import { AudioEngine } from "@silkforest/audioengine";

const RouterDefinitions: React.FC = () => (
  <Routes>
    <Route path="/" element={<Intro />} />
    <Route path="/audioengine" element={<AudioEngine />} />
  </Routes>
);

export default RouterDefinitions;
