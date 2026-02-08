"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl" | "full";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "default",
          "max-w-6xl": size === "lg",
          "max-w-7xl": size === "xl",
          "max-w-full": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
