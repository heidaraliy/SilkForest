import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const AudioEngineNavbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // handling responsivity here
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (React.createElement("nav", { className: `space-x-2 text-[1.1rem] tracking-tight font-bold font-arimo ${isMobile ? "flex-col" : "flex-row"} shadow-2xl bg-slate-700 border-b-2 border-slate-400 ` },
        React.createElement("div", { className: "flex w-full justify-between" },
            React.createElement("div", { className: "flex" },
                React.createElement(NavLink, { to: "/" },
                    React.createElement("img", { src: "/assets/logo-text/main.png", className: `w-[12rem] mx-4 mt-1` })),
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("input", { type: "text", placeholder: "Search AudioEngine...", className: "bg-zinc-50 text-slate-800 text-xs pr-16 pl-2 py-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent mt-1" }))),
            React.createElement("div", { className: "flex items-center mt-1 mr-4 text-slate-50 text-[1rem] font-vidaloka" }, "Welcome, hida"))));
};
export default AudioEngineNavbar;
//# sourceMappingURL=AudioEngineNavbar.js.map