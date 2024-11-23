import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
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

  return (
    <nav
      className={`space-x-2 text-[1.1rem] tracking-tight font-bold font-arimo flex ${
        isMobile ? "flex-col" : "flex-row"
      } shadow-2xl bg-zinc-50 border-b-2 border-zinc-400`}
    >
      <div className="flex w-full justify-between">
        <div className="flex">
          <NavLink to="/">
            <img
              src="/assets/logo-text/main.png"
              className={`${
                isMobile ? "w-[8rem]" : "w-[12rem]"
              } w-[12rem] mx-4 mt-1`}
            />
          </NavLink>
          <NavLink to="/">
            <div className="hover:bg-zinc-200 hover:rounded-md">
              <p className="drop-shadow-2xl text-slate-800 mt-5 flex mx-4">
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#434343"
                  className="mt-0.5"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="hover:bg-zinc-200 hover:rounded-md">
              <p className="drop-shadow-2xl text-slate-800 mt-5 flex mx-4">
                Docs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#434343"
                  className="mt-0.5"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </p>
            </div>
          </NavLink>
          <NavLink to="/">
            <div className="hover:bg-zinc-200 hover:rounded-md">
              <p className="drop-shadow-2xl text-slate-800 mt-5 flex mx-4">
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#434343"
                  className="mt-0.5"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </p>
            </div>
          </NavLink>
        </div>
        <NavLink to="/audioengine">
          <div className="hover:scale-105 transition-all ease-in-out duration-200">
            <button className="drop-shadow-2xl mt-3.5 flex mx-4 px-4 py-0.5 rounded-lg text-white bg-gradient-to-t from-indigo-300 to-gray-900 font-vidaloka shadow-md">
              Enter App
            </button>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
