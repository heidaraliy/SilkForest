import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SilkForestBackground from "../../assets/SilkForestNavbarBG.png";
import SilkForest from "../../assets/SilkForest.png";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 space-x-2 text-xl tracking-tight font-bold font-arimo flex h-[5.5rem] items-center ${
        isMobile ? "flex-col" : "flex-row"
      } shadow-2xl border-b-2 border-zinc-400`}
      style={{
        backgroundImage: `url(${SilkForestBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full justify-between">
        <div className="flex">
          <NavLink to="/">
            <img
              src={SilkForest}
              className={`pointer-events-auto hover:scale-110 transition-all cursor-pointer duration-300${
                isMobile ? "w-[8rem]" : "w-[12rem]"
              } w-[12rem] m-2`}
              alt="SilkForest Logo"
            />
          </NavLink>
          <NavLink to="/products">
            <div className="hover:bg-[#555975] hover:rounded-md">
              <p className="drop-shadow-2xl text-zinc-50 mt-5 flex mx-4">
                Products
              </p>
            </div>
          </NavLink>
          <NavLink to="/docs">
            <div className="hover:bg-[#555975] hover:rounded-md">
              <p className="drop-shadow-2xl text-zinc-50 mt-5 flex mx-4">
                Docs
              </p>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="hover:bg-[#555975] hover:rounded-md">
              <p className="drop-shadow-2xl text-zinc-50 mt-5 flex mx-4">
                About
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
