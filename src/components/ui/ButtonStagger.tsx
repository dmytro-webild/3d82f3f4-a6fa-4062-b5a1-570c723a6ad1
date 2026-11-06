"use client";

import { motion } from "motion/react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface ButtonStaggerProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonStagger = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonStaggerProps) => {
  const handleClick = useButtonClick(href, onClick);

  const button = (
    <a
      href={href}
      onClick={handleClick}
      className={cls("group flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      <span className="truncate overflow-hidden">
        {[...text].map((char, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-400 ease-out md:group-hover:-translate-y-[1.25em]"
            style={{ textShadow: "0 1.25em currentColor", transitionDelay: `${index * 0.01}s`, whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char}
          </span>
        ))}
      </span>
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

export default ButtonStagger;
