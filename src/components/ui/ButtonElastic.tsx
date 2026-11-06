"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";

interface ButtonElasticProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonElastic = ({ text, variant = "primary", href = "#", onClick, animate = true, animationDelay = 0, className = "" }: ButtonElasticProps) => {
  const handleClick = useButtonClick(href, onClick);

  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  const scaleX = useTransform(scale, [1, 1.08], [1, 1.08]);
  const scaleY = useTransform(scale, [1, 1.08], [1, 0.95]);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;
    scale.set(1.08);
    setTimeout(() => scale.set(1), 100);
  };

  const button = (
    <motion.a
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      style={{ scaleX, scaleY }}
      className={cls("flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      {text}
    </motion.a>
  );

  if (!animate) return button;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: animationDelay, ease: "easeOut" }}
    >
      {button}
    </motion.div>
  );
};

export default ButtonElastic;
