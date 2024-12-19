import React, { useState } from "react";
import Button from "@silkverb/components/SilkVerb/components/Button";
import WarningMessage from "@silkverb/components/SilkVerb/components/WarningMessage";
import { Product } from "../ProductData";
import { useNotification } from "@silkverb/components/Notifications/context/NotificationContext";
import {
  generateAuthToken,
  saveAuthToken,
  verifyAuthToken,
  markTokenAsUsed,
} from "../../../firebase/services/authService";
import { isCommonEmail } from "./commonDomains";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, product: Product) => Promise<void>;
  productName: string;
  product: Product | null;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  productName,
  product,
}) => {
  const { addNotification, removeNotification } = useNotification();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = email.split("@")[1];

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!domain || !domain.includes(".") || domain.length <= 4) {
      setError("Please enter a valid email domain.");
      return false;
    }
    
    if (!isCommonEmail(email)) {
      setError("Please enter a valid email domain..");
      return false;
    }

    setError(""); // Clear error if all checks pass
    return true;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return; // Exit early if validation fails
    }

    setIsSubmitting(true);
    const notificationId = addNotification(
      "Sending verification code...",
      "info",
      true
    );

    try {
      const authToken = generateAuthToken();
      const saved = await saveAuthToken(email, authToken);

      if (saved) {
        removeNotification(notificationId);
        addNotification("Verification code sent. Check your email!", "success");
        setShowTokenInput(true);
        setError("");
      } else {
        removeNotification(notificationId);
        setError("Failed to generate authentication token.");
        addNotification("Failed to send verification code.", "error");
      }
    } catch (error) {
      removeNotification(notificationId);
      setError("Something went wrong. Please try again.");
      addNotification("Failed to send verification code.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTokenSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const notificationId = addNotification("Verifying code...", "info", true);

    try {
      const isValid = await verifyAuthToken(email, token);
      if (isValid && product) {
        await onSubmit(email, product);
        await markTokenAsUsed(email, token);
        removeNotification(notificationId);
        addNotification("Download starting...", "success");
        resetModalState();
        onClose();
      } else {
        removeNotification(notificationId);
        setError("Invalid token. Please check your email and try again.");
        addNotification("Invalid verification code.", "error");
      }
    } catch (error) {
      removeNotification(notificationId);
      setError("Something went wrong. Please try again.");
      addNotification("Verification failed.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModalState = () => {
    setEmail("");
    setToken("");
    setShowTokenInput(false);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className="rounded-lg p-8 max-w-md w-full mx-auto border-zinc-700 border-4"
        style={{ backgroundColor: product?.background }}
      >
        <h2 className="text-2xl font-bold mb-4">
          <img src={product?.logo} alt={productName} />
        </h2>
        <p className="text-zinc-50 mb-6 text-center">
          Enter your email to download{" "}
          <span className="font-vidaloka">{product?.name}</span> and receive
          updates about new plugins and web applications.
        </p>
        {!showTokenInput ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full p-3 border rounded"
              required
            />
            {error && <WarningMessage message={error} />}
            <div className="flex justify-center space-x-4">
              <Button onClick={onClose}>Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Verification"}
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value.toUpperCase())}
              placeholder="Enter verification code"
              className="w-full p-3 border rounded"
              required
            />
            {error && <WarningMessage message={error} />}
            <div className="flex justify-center space-x-4">
              <Button onClick={() => setShowTokenInput(false)}>Back</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Verifying..." : "Download"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DownloadModal;
