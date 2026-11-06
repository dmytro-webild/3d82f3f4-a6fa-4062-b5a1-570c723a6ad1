"use client";

import { motion } from "motion/react";
import { useButtonClick } from "@/hooks/useButtonClick";
import { cls } from "@/lib/utils";
import { useState } from "react";

interface ButtonFlipProps {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

const ButtonFlip = ({ text, variant = "primary", href = "#", onClick, animate: shouldAnimate = true, animationDelay = 0, className = "" }: ButtonFlipProps) => {
  const handleClick = useButtonClick(href, onClick);
  const [isHovered, setIsHovered] = useState(false);
  const maxIndex = Math.max(text.length - 1, 1);

  const getCharValues = (index: number) => {
    const t = index / maxIndex;
    const signedIndex = index - maxIndex / 2;
    const curve = Math.sin(t * 1.5 * (Math.PI / 180));
    const rotCurve = Math.sin(t * 30 * (Math.PI / 180));
    const rotSign = Math.max(-1, Math.min(1, signedIndex));
    const delay = 0.05 + curve * 2.9;
    const rotateZ = rotSign * rotCurve * 36 * -1;
    const translateX = signedIndex * 0.125;
    return { delay, rotateZ, translateX };
  };

  const button = (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cls("group flex items-center justify-center h-10 px-6 text-sm rounded cursor-pointer active:scale-[0.96]", variant === "primary" ? "primary-button text-primary-cta-text" : "secondary-button text-secondary-cta-text", className)}
    >
      <span className="grid">
        <span className="col-start-1 row-start-1 perspective-[10em] transform-3d">
          {[...text].map((char, index) => {
            const { delay, rotateZ, translateX } = getCharValues(index);
            return (
              <motion.span
                key={index}
                className="inline-block"
                initial={false}
                animate={isHovered ? {
                  x: `${translateX}em`,
                  y: "-1.25em",
                  rotateX: 72,
                  rotateZ,
                  scale: 0.65,
                  opacity: 0,
                } : {
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateZ: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                  delay: isHovered ? delay : 0,
                  ease: [0.675, 0.15, 0.1, 1],
                }}
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
        <span aria-hidden="true" className="col-start-1 row-start-1 perspective-[10em] transform-3d">
          {[...text].map((char, index) => {
            const { delay, rotateZ, translateX } = getCharValues(index);
            return (
              <motion.span
                key={index}
                className="inline-block"
                initial={false}
                animate={isHovered ? {
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateZ: 0,
                  scale: 1,
                  opacity: 1,
                } : {
                  x: `${translateX}em`,
                  y: "1.25em",
                  rotateX: -72,
                  rotateZ,
                  scale: 0.65,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: isHovered ? delay + 0.05 : 0,
                  ease: [0.675, 0.15, 0.1, 1],
                }}
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      </span>
    </a>
  );

  if (!shouldAnimate) return button;

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

export default ButtonFlip;
