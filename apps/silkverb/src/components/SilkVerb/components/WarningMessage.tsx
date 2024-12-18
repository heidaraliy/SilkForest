import React from "react";

interface WarningMessageProps {
  message: string;
  type?: "warning" | "info";
}

const WarningMessage: React.FC<WarningMessageProps> = ({
  message,
  type = "warning",
}) => {
  const bgColor = type === "warning" ? "bg-amber-50" : "bg-blue-50";
  const borderColor =
    type === "warning" ? "border-amber-400" : "border-blue-400";
  const textColor = type === "warning" ? "text-amber-800" : "text-blue-800";
  const iconColor = type === "warning" ? "#B45309" : "#1E40AF";

  return (
    <div
      className={`flex items-center ${bgColor} ${borderColor} flex justify-center border border-zinc-800 rounded-lg bg-gray-100 p-4 my-4`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill={iconColor}
        className="mr-2 flex-shrink-0"
      >
        {type === "warning" ? (
          <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z" />
        ) : (
          <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
        )}
      </svg>
      <p className={`${textColor} text-sm`}>{message}</p>
    </div>
  );
};

export default WarningMessage;
