import React, { useState } from "react";
import Button from "@silkverb/components/SilkVerb/components/Button";
import { Product } from "../ProductData";

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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    try {
      if (product) {
        await onSubmit(email, product);
      }
      onClose();
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 font-arimo tracking-tighter">
      <div
        className="rounded-lg p-8 max-w-md w-full mx-auto border-zinc-700 border-4"
        style={{ backgroundColor: product?.background }}
      >
        <h2 className="text-2xl font-bold mb-4 font-arimo tracking-tighter">
          <img src={product?.logo} alt={productName} className="" />
        </h2>
        <p className="text-zinc-50 mb-6 text-center">
          Enter your email to download{" "}
          <span className="font-vidaloka">{product?.name}</span> and receive
          updates about new plugins and web applications.
        </p>
        <p className="text-zinc-50 mb-6 text-sm italic text-center">
          We promise not to spam you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="your@email.com"
            className="w-full p-3 border border-zinc-700 rounded"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-center space-x-4">
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Download"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadModal;
