import React from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/docs" && location.hash) {
      const targetId = location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const docsContent = document.querySelector(".docs-content");
          if (docsContent && docsContent instanceof HTMLElement) {
            const topOffset = element.offsetTop - docsContent.offsetTop;
            docsContent.scrollTo({
              top: topOffset - 100,
              behavior: "smooth",
            });
          }
        }, 200);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
