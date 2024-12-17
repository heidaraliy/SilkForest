import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DOCS_SECTIONS } from "./DocsData";
import SilkDocs from "../../assets/SilkDocs.png";
import SilkForestSidebarBackground from "../../assets/SilkForestSidebarBG.png";

const DocsSidebar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            const newUrl = `${window.location.pathname}#${entry.target.id}`;
            window.history.replaceState(null, "", newUrl);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    document.querySelectorAll("h1[id], h2[id], h3[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      setActiveId(hash);
    }
  }, [location]);

  const sidebarContent = (
    <div
      className="h-[calc(100vh-5.5rem)] border-r-2 border-zinc-400 overflow-y-auto"
      style={{
        backgroundImage: `url(${SilkForestSidebarBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="sticky top-0 p-6 w-72">
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
                      to={`/docs#${entry.id}`}
                      onClick={() => setIsOpen(false)}
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

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-24 z-50 bg-zinc-200 border-zinc-600 border-2 text-zinc-50 p-2 rounded-r-md transition-all duration-300 shadow-lg ${
            isOpen ? "left-72" : "left-0"
          }`}
          aria-label="Toggle documentation sidebar"
        >
          <span className="material-symbols-outlined text-zinc-700 text-2xl">
            {isOpen ? "chevron_left" : "chevron_right"}
          </span>
        </button>

        <div
          className={`fixed top-[5.5rem] bottom-0 transition-all duration-300 ease-in-out ${
            isOpen ? "left-0" : "-left-72"
          }`}
        >
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block h-[calc(100vh-5.5rem)] fixed">
        {sidebarContent}
      </div>
    </>
  );
};

export default DocsSidebar;
