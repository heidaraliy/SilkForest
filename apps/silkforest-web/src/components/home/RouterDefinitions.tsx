import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Intro from "./Intro";
import Products from "../products/Products";
import Docs from "../docs/Docs";

const ScrollToHashElement = () => {
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
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
      <Route path="/about" element={<></>} />
    </Routes>
  </>
);

export default RouterDefinitions;
