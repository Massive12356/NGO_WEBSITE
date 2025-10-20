import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  onClick,
  href,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
  className = "",
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 focus:outline-none focus-visible:ring-2 
    focus-visible:ring-primary-500 focus-visible:ring-offset-2 
    dark:focus-visible:ring-offset-gray-800 disabled:opacity-50 
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    // Primary buttons now have your gradient hover effect
    primary: `
      bg-yellow-900 text-white  shadow-md hover:from-black hover:to-[#987543] 
      hover:text-white hover:bg-gradient-to-r hover:shadow-lg border-white dark:bg-white dark:text-black dark:hover:text-white hover:bg-white  shadow-md hover:from-black hover:to-[#987543] 
    `,
    secondary:
      "bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-lg",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20",
    ghost:
      "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm gap-2",
    md: "px-4 py-2.5 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};
