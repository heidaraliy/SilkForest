import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/home/Intro";
import Products from "./components/products/Products";
import Docs from "./components/docs/Docs";
import About from "./components/about/About";
import SilkVerb from "@silkverb";
import ScrollToHashElement from "./utils/ScrollToHashElement";

const RouterDefinitions: React.FC = () => (
  <>
    <ScrollToHashElement />
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/products" element={<Products />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/about" element={<About />} />
      <Route path="/apps/silkverb" element={<SilkVerb />} />
    </Routes>
  </>
);

export default RouterDefinitions;
