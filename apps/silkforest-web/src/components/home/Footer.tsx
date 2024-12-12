import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-gray-700 font-arimo border-t-2 border-zinc-400 shadow-2xl">
      &copy; {new Date().getFullYear()} SilkForest. All rights reserved.
    </footer>
  );
};

export default Footer;
