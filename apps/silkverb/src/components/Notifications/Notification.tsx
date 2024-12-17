import React from "react";
import { motion } from "framer-motion";
import Spinner from "../SilkVerb/components/Spinner";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  const bgColor = {
    success: "bg-zinc-50",
    error: "bg-zinc-50",
    info: "bg-zinc-50",
  }[type];

  const icon = {
    success: "check_circle",
    error: "error",
    info: "info",
  }[type];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      className={`${bgColor} text-zinc-700 p-4 rounded-lg shadow-lg flex items-center justify-between font-arimo tracking-tighter font-bold border-zinc-700 border-2 mt-24 min-w-[300px]`}
    >
      <span className="flex items-center flex-1">
        {type === "info" ? (
          <div className="flex items-center justify-center w-6 h-6 mr-2">
            <Spinner isLoading={true} />
          </div>
        ) : (
          <span className="material-symbols-outlined mr-2 flex-shrink-0">
            {icon}
          </span>
        )}
        <span>{message}</span>
      </span>
      <button
        onClick={onClose}
        className="ml-4 text-gray-700 hover:text-gray-200"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Notification;
