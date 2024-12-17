import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DOCS_SECTIONS } from "./DocsData";
import SilkDocs from "../../assets/SilkDocs.png";
import SilkForestSidebarBackground from "../../assets/SilkForestSidebarBG.png";

const DocsSidebar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    // Create an Intersection Observer to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // Update URL hash without triggering full navigation
            const newUrl = `${window.location.pathname}#${entry.target.id}`;
            window.history.replaceState(null, "", newUrl);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    // Observe all section headings
    document.querySelectorAll("h1[id], h2[id], h3[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Update activeId when hash changes (e.g., on direct navigation)
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
    }
  }, [location]);

  return (
    <div
      className="w-72 border-r-2 border-zinc-400 overflow-y-auto h-full"
      style={{
        backgroundImage: `url(${SilkForestSidebarBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="sticky top-0 p-6">
        <div className="text-center m-4">
          <img src={SilkDocs} alt="SilkDocs" className="mx-auto w-48" />
        </div>
        <nav className="space-y-6 bg-[#4d516e]/75 rounded-md p-4 border-zinc-400 border-2">
          {DOCS_SECTIONS.map((section) => (
            <div key={section.title} className="mb-6">
              <div className="text-2xl text-zinc-50 mb-3 p-2 font-vidaloka">
                {section.title}
              </div>
              <ul className="space-y-3 pl-2 text-xl">
                {section.children?.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      to={`/docs#${entry.id}`} // IMPORTANT: full route + hash
                      className={`block text-base transition-all duration-300 rounded-md p-1.5 font-arimo tracking-tight ${
                        activeId === entry.id
                          ? "text-zinc-50 font-semibold bg-zinc-300/20 scale-110 border-zinc-300/70 border-2"
                          : "text-zinc-100 font-extralight hover:bg-zinc-300/20 hover:text-zinc-50 hover:scale-105 transition-all duration-300 cursor-pointer"
                      }`}
                    >
                      {entry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DocsSidebar;
