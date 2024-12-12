import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DOCS_SECTIONS } from "./DocsData";
import SilkDocs from "../../assets/SilkDocs.png";
import SilkForestSidebarBackground from "../../assets/SilkForestSidebarBackground.png";

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.hash.slice(1);

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
              <div className="text-xl font-semibold text-zinc-50 mb-3 p-2 font-arimo tracking-tight">
                {section.title}
              </div>
              <ul className="space-y-3 pl-2">
                {section.children?.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      to={`#${entry.id}`}
                      className={`block text-base transition-all duration-300 rounded-md p-1.5 font-arimo tracking-tight ${
                        currentPath === entry.id
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
