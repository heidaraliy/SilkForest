import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./Intro";

const RouterDefinitions: React.FC = () => (
  <Routes>
    <Route path="/" element={<Intro />} />
  </Routes>
);

export default RouterDefinitions;
