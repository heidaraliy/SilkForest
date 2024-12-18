import React, { forwardRef } from "react";

interface ButtonProps {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  isFileInput?: boolean;
  accept?: string;
  capture?: "user" | "environment";
}

const Button = forwardRef<HTMLInputElement, ButtonProps>(
  (
    {
      onClick,
      onChange,
      type = "button",
      disabled = false,
      className = "",
      children,
      isFileInput = false,
      accept,
      capture,
    },
    ref
  ) => {
    const baseStyles =
      "px-4 py-2 font-arimo text-sm font-bold tracking-tight rounded bg-zinc-50 text-zinc-700 border-zinc-600 border-2";
    const enabledStyles = !disabled
      ? "hover:bg-zinc-200 transition-colors duration-200 cursor-pointer"
      : "opacity-50 cursor-not-allowed";

    if (isFileInput) {
      return (
        <div className="relative">
          <input
            type="file"
            accept={accept}
            onChange={onChange}
            ref={ref}
            disabled={disabled}
            capture={capture}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer disabled:cursor-not-allowed"
          />
          <button
            type={type}
            disabled={disabled}
            className={`${baseStyles} ${enabledStyles} ${className}`}
          >
            {children}
          </button>
        </div>
      );
    }

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseStyles} ${enabledStyles} ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
