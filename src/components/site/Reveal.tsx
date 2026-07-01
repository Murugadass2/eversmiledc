import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const { ref, visible } = useScrollReveal();

  const base = "transition-all duration-700 ease-out";
  const hidden =
    direction === "up" ? "opacity-0 translate-y-10" :
    direction === "left" ? "opacity-0 -translate-x-10" :
    direction === "right" ? "opacity-0 translate-x-10" :
    "opacity-0";
  const shown = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${visible ? shown : hidden} ${className}`}
    >
      {children}
    </div>
  );
}
