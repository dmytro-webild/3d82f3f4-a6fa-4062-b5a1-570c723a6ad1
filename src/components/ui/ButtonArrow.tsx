"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface ButtonArrowProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonArrow = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonArrowProps) => {
  const handleClick = useButtonClick(href, onClick);

  const button = (
    <a
      href={href}
      onClick={handleClick}
      className={cls("group flex items-center justify-between gap-2 h-10 px-6 text-sm rounded cursor-pointer", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      <span className="truncate md:transition-transform md:duration-300 md:ease-out md:group-hover:translate-x-2">
        {text}
      </span>
      <div className={cls("size-5 flex items-center justify-center rounded md:transition-all md:duration-300 md:ease-out md:group-hover:scale-[0.2] md:group-hover:rotate-90", variant === "primary" ? "secondary-button text-secondary-cta-text" : "primary-button text-primary-cta-text")}>
        <ArrowRight className="size-3 md:transition-opacity md:duration-700 md:group-hover:opacity-0" />
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

export default ButtonArrow;
