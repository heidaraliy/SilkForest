import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import Products from "../products/Products";

const RouterDefinitions: React.FC = () => (
  <Routes>
    <Route path="/" element={<Intro />} />
    <Route path="/products" element={<Products />} />
    <Route path="/docs" element={<></>} />
    <Route path="/about" element={<></>} />
  </Routes>
);

export default RouterDefinitions;
