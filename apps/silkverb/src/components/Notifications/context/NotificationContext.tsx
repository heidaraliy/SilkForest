import React, { createContext, useContext, useState } from "react";

type NotificationType = "success" | "error" | "info";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  persistent?: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    message: string,
    type: NotificationType,
    persistent?: boolean
  ) => string;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    message: string,
    type: NotificationType,
    persistent = false
  ) => {
    const id = Math.random().toString(36).substring(7);
    setNotifications((prev) => [...prev, { id, message, type, persistent }]);

    if (!persistent) {
      setTimeout(() => removeNotification(id), 5000);
    }

    return id;
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
