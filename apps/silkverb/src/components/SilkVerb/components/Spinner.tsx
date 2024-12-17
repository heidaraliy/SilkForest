import React from "react";

interface SpinnerProps {
  isLoading: boolean;
  text?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading, text }) => {
  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full w-6 h-6 border-4 border-t-transparent border-blue-500"></div>
      {text && (
        <p className="text-zinc-800 mt-4 text-lg font-vidaloka">{text}</p>
      )}
    </div>
  );
};

export default Spinner;
