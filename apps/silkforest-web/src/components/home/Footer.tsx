import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center text-gray-700 font-arimo">
      &copy; {new Date().getFullYear()} SilkForest. All rights reserved.
    </footer>
  );
};

export default Footer;
