"use client";

import { motion } from "motion/react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface ButtonPillProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonPill = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonPillProps) => {
  const handleClick = useButtonClick(href, onClick);

  const button = (
    <a
      href={href}
      onClick={handleClick}
      className={cls(
        "flex items-center justify-center h-10 px-6 text-sm rounded-[0.5rem] cursor-pointer md:transition-[border-radius] md:duration-300 md:ease-out md:hover:rounded-[5rem]",
        variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text",
        className
      )}
    >
      {text}
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

export default ButtonPill;
