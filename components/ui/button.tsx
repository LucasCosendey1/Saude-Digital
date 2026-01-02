import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ 
  children, 
  className = "", 
  variant = "default",
  size = "md",
  onClick, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};