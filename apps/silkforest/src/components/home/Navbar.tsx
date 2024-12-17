import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SilkForestBackground from "../../assets/SilkForestNavbarBG.png";
import SilkForest from "../../assets/SilkForest.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 text-xl tracking-tight font-bold font-arimo flex items-center h-[5.5rem] shadow-2xl border-b-2 border-zinc-400"
        style={{
          backgroundImage: `url(${SilkForestBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full items-center px-4">
          <NavLink to="/">
            <img
              src={SilkForest}
              onClick={() => setIsOpen(false)}
              className="pointer-events-auto transition-all duration-300 w-[14rem] h-auto mr-4"
              alt="SilkForest Logo"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow space-x-8">
            <NavLink
              to="/products"
              className="hover:bg-[#555975]/50 hover:rounded-md transition-all duration-300 px-4 py-2"
            >
              <p className="drop-shadow-2xl text-zinc-50">Products</p>
            </NavLink>
            <NavLink
              to="/docs"
              className="hover:bg-[#555975]/50 hover:rounded-md transition-all duration-300 px-4 py-2"
            >
              <p className="drop-shadow-2xl text-zinc-50">Docs</p>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-50 p-2 ml-auto"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        style={{
          backgroundImage: `url(${SilkForestBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`fixed top-[5.5rem] left-0 right-0 transition-all duration-300 shadow-xl md:hidden font-bold font-arimo ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <NavLink
            to="/products"
            className="hover:bg-[#555975]/50 hover:rounded-md transition-all duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            <p className="drop-shadow-2xl text-zinc-50">Products</p>
          </NavLink>
          <NavLink
            to="/docs"
            className="hover:bg-[#555975]/50 hover:rounded-md transition-all duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            <p className="drop-shadow-2xl text-zinc-50">Docs</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
