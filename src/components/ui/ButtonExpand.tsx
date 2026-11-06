"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface ButtonExpandProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonExpand = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonExpandProps) => {
  const handleClick = useButtonClick(href, onClick);

  const button = (
    <a
      href={href}
      onClick={handleClick}
      className={cls("group relative flex items-center gap-3 min-w-0 w-fit max-w-full py-0.5 pl-5 pr-0.5 text-sm rounded cursor-pointer", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      <span className={cls("relative z-10 flex-1 truncate md:transition-colors md:duration-500 md:ease-out", variant === "primary" ? "text-primary-cta-text md:group-hover:text-secondary-cta-text" : "text-secondary-cta-text md:group-hover:text-primary-cta-text")}>{text}</span>
      <div className={cls("relative z-10 flex items-center justify-center size-8 rounded", variant === "primary" ? "text-secondary-cta-text" : "text-primary-cta-text")}>
        <ArrowUpRight className="size-4" strokeWidth={1.5} />
      </div>
      <div className="absolute inset-0.5 z-0 overflow-hidden rounded pointer-events-none">
        <div className={cls("h-full w-full rounded -translate-x-[calc(-100%+2rem)] md:transition-transform md:duration-500 md:ease-out md:group-hover:translate-x-0", variant === "primary" ? "secondary-button" : "primary-button")} />
      </div>
    </a>
  );

  if (!animate) return button;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
    >
      {button}
    </motion.div>
  );
};

export default ButtonExpand;
