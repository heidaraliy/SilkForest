import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./components/home/Intro";
import Products from "./components/products/Products";
import Docs from "./components/docs/Docs";
import About from "./components/about/About";
import SilkVerb from "@silkverb";

const ScrollToHashElement = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/docs" && location.hash) {
      const targetId = location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const docsContent = document.querySelector(".docs-content");
          if (docsContent && docsContent instanceof HTMLElement) {
            // Calculate the offset relative to the container
            const topOffset = element.offsetTop - docsContent.offsetTop;
            docsContent.scrollTo({
              top: topOffset - 100, // Adjust if needed
              behavior: "smooth",
            });
          }
        }, 200); // A short delay to ensure content is rendered
      }
    }
  }, [location]);

  return null;
};

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